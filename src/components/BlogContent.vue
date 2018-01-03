<template>
  <div class="content">
    <IRow class="layout" type="flex" justify="space-between">
      <ICol span="16" style="padding-top: 20px;">
        <router-view></router-view>
      </ICol>
      <ICol span="7" style="margin-top: 40px;margin-left: 20px;">
        <transition
          appear 
          v-on:enter="enter"
          v-on:leave="leave"
          v-on:before-appear="beforeAppear"
          v-on:appear="appear"
          :css="false">
          <Card :bordered="false" v-if="categories.length" :key="">
            <div slot="title">
              <Icon type="ios-folder-outline" size="14px" />
              <span style="margin-left: 5px;font-weight: bold;">文章分类</span>
            </div>
            <div>
              <div vertical class="classify" v-for="(category, key, index) in categories" v-bind:key="category.id" v-on:click="setCurrentCate(category)" v-bind:class="{active:currentCateId === category.id}" v-show="category.posts_count">
                <span>{{category.name}}</span>
                <Badge v-bind:count="category.posts_count" class-name="badge-color"></Badge>
              </div>
            </div>
          </Card>
        </transition>
        <transition
          appear 
          v-on:enter="enter"
          v-on:leave="leave"
          v-on:before-appear="beforeAppear"
          v-on:appear="appear"
          :css="false">
          <Card :bordered="false" style="margin-top: 20px;" v-if="recommendedPosts.length">
            <div slot="title">
              <Icon type="ios-book-outline" size="14px" />
              <span style="margin-left: 5px;font-weight: bold;">推荐阅读</span>
            </div>
            <div>
              <div vertical class="classify" v-for="(post, key, index) in recommendedPosts" v-on:click="setCurrentPost(post)" v-bind:key="post.id" v-bind:class="{active:currentPostId === post.id}">
                <span style="width: 80%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align: left;">{{post.title}}</span>
                <Badge v-bind:count="post.view_count" class-name="badge-color"></Badge>
              </div>
            </div>
          </Card>
        </transition>
        <transition
          appear 
          v-on:enter="enter"
          v-on:leave="leave"
          v-on:before-appear="beforeAppear"
          v-on:appear="appear"
          :css="false">
          <Card :bordered="false" style="margin-top: 20px;" v-if="tags.length">
            <div slot="title">
              <Icon type="ios-pricetags-outline" size="14px" />
              <span style="margin-left: 5px;font-weight: bold;">热门标签</span>
            </div>
            <div class="tag-content">
              <IButton v-for="(tag, key, index) in tags" v-bind:key="key" 
                v-if="tag.posts_count" 
                v-on:click="getArticleList(tag)"
                v-bind:class="{active:tagName == tag.name}"
                type="ghost" 
                class="tag-button" shape="circle" size="small">
                {{tag.name}}
                <Badge v-bind:count="tag.posts_count" class-name="badge-color"></Badge>
              </IButton>
            </div>
          </Card>
        </transition>
      </ICol>
    </IRow>
  </div>
</template>
<style>
.badge-color {
  background: #9caebf !important;
}
</style>

<script>
import { Card, Icon, Button, Badge } from "iview";
import { Row, Col } from "iview/src/components/grid";
export default {
  name: "BlogContent",
  data: () => ({
    tags: [],
    tagName: "",
    categories: [],
    currentCateId: "",
    currentPostId: "",
    recommendedPosts: [],
    article: ""
  }),
  mounted: function() {
    //热门文章列表
    this.getHotArticle();
    //请求文章分类列表
    this.getArticleCategory();
    //请求标签列表
    this.getTags();
  },
  methods: {
    getHotArticle: function() {
      this.axios.get(this.web_api_url + "recommendedPosts").then(res => {
        this.recommendedPosts = res.data;
      });
    },
    getArticleCategory: function() {
      this.axios.get(this.web_api_url + "categories").then(res => {
        this.categories = res.data;
      });
    },
    getTags: function() {
      this.axios.get(this.web_api_url + "tag").then(res => {
        this.tags = res.data;
      });
    },
    getArticleList: function(tag) {
      //清空分类及标签选中特效
      this.currentPostId = "";
      this.currentCateId = "";
      this.tagName = tag.name;
      //如果是文章详情页面点击，需要导向文章列表
      if (this.$router.history.current.name != "articlelist") {
        this.$router.push({ name: "articlelist" });
      } else {
        //分类点击前，发送事件清空total
        this.$store.commit("setIsChangeTotal", new Date().getTime());
      }
      //如果是点击热门标签请求数据，需要清空total
      this.$store.commit("setBlogListUrl", "tag/" + tag.name);
      this.$store.commit("setCrumbs", [
        { url: "/blog/", title: "标签" },
        { url: "/blog/", title: tag.name }
      ]);
    },
    setCurrentCate: function(category) {
      this.currentCateId = category.id;
      //清空分类及标签选中特效
      this.currentPostId = "";
      this.tagName = "";
      //如果是文章详情页面点击，需要导向文章列表
      if (this.$router.history.current.name != "articlelist") {
        this.$router.push({ name: "articlelist" });
      } else {
        //分类点击前，发送事件清空total
        this.$store.commit("setIsChangeTotal", new Date().getTime());
      }
      this.$store.commit("setBlogListUrl", "category/" + category.name);
      this.$store.commit("setCrumbs", [
        { url: "/blog/", title: "分类" },
        { url: "/blog/", title: category.name }
      ]);
    },
    setCurrentPost: function(post) {
      this.currentPostId = post.id;
      //清空分类及标签选中特效
      this.currentCateId = "";
      this.tagName = "";
      this.$store.commit("setArticle", post.id);
      this.$router.push({
        name: "article",
        path: "/blog/article/",
        params: { articleId: post.id }
      });
      this.$store.commit("setCrumbs", [
        { url: "/blog/", title: "推荐阅读" },
        { url: "/blog/", title: post.name }
      ]);
    },
    //右侧边栏动画函数
    enter: function(el, done) {
      Velocity(
        el,
        "transition.slideRightBigIn",
        { duration: 780, stagger: 250 },
        done
      );
    },
    leave: function(el, done) {
      Velocity(
        el,
        "transition.slideRightBigOut",
        { duration: 780, stagger: 250 },
        done
      );
    },
    beforeAppear: function(el) {
      el.style.display = "none";
    },
    appear: function(el, done) {
      Velocity(
        el,
        "transition.slideRightBigIn",
        { duration: 800, delay: 800, stagger: 250 },
        done
      );
    },
  },
  computed: {
    setArticle() {
      return this.$store.state.article.title;
    }
  },
  components: {
    IRow: Row,
    ICol: Col,
    Card: Card,
    Icon: Icon,
    IButton: Button,
    Badge: Badge
  }
};
</script>
<style scoped>
.content {
  flex: 1;
  max-width: 1200px;
  margin: 84px auto 0;
}
.layout-breadcrumb {
  padding-left: 20px;
}
.ivu-breadcrumb {
  text-align: left;
}
.classify {
  height: 42px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px 0;
  cursor: pointer;
  border-bottom: 1px solid #e9eaec;
}
.classify.active {
  background-color: #e9eaec;
}
.classify-button {
  height: 42px;
}
.tag-content {
  text-align: left;
}
.tag-button {
  margin: 0 5px 5px;
}
.tag-button.active {
  border-color: #e9eaec;
  background-color: #e9eaec;
}
.v-note-wrapper .v-note-panel {
  box-shadow: none;
}
</style>
