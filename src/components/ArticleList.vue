<template>
  <div class="content">
    <div v-for="(post, key, index) in posts" v-bind:key="post.id">
      <transition
        appear 
        v-on:enter="enter"
        v-on:leave="leave"
        v-on:before-appear="beforeAppear"
        v-on:appear="appear"
        :css="false">
        <Card :bordered="false" class="my-card" >
          <div slot="title" v-on:click="goArticlePage(post.id)">
            <p class="article-title">{{post.title}}</p>
            <IRow type="flex" justify="center">
              <ICol span="4" class="article-title-col">
                <Icon type="ios-calendar-outline" size="14px" />
                <span style="margin-left: 5px;font-size: 12px;">{{post.created_at | timeFormat}}</span>
              </ICol>
              <ICol span="3" class="article-title-col">
                <Icon type="ios-folder-outline" size="14px" />
                <span style="margin-left: 5px;font-size: 12px;">{{post.category.name}}</span>
              </ICol>
              <ICol span="3">
                <Icon type="ios-eye-outline" size="14px" />
                <span style="margin-left: 5px;font-size: 12px;">{{post.view_count}}</span>
              </ICol>
            </IRow>
          </div>
          <p class="article-content" v-on:click="goArticlePage(post.id)" v-html="post.description"></p>
          <div class="card-foot">
            <Icon type="ios-pricetags-outline" size="30px" />
            <IButton type="ghost" shape="circle" size="small" class="article-tag" v-for="(tag,key,index) in post.tags" v-bind:key="tag.id">{{tag.name}}</IButton>
          </div>
        </Card>
      </transition>
    </div>
    <IRow class="articleList-page" v-if="total && posts.length">
      <ICol span="24">
        <transition
          appear 
          v-on:enter="enter"
          v-on:leave="leave"
          v-on:before-appear="beforeAppear"
          v-on:appear="appear"
          :css="false">
          <IPage :total="total" :page-size="7" v-model:current="current" show-total v-on:on-change="pageChange"></IPage>
        </transition>
      </ICol>
    </IRow>
  </div>
</template> 

<script>
import { Card, Icon, Button, Page } from "iview";
import { Row, Col } from "iview/src/components/grid";
import Velocity from "velocity-animate";
window.Velocity = window.velocity = Velocity;
import "velocity-animate/velocity.ui";
export default {
  name: "ArticleList",
  props: ["post"],
  data: () => ({
    limit: 1,
    total: 0,
    current: 1,
    blogListUrl: "blog_list",
    posts: []
  }),
  methods: {
    //页码变更函数
    pageChange: function(event) {
      this.limit = event;
      this.getBlogList();
    },
    getBlogList: function() {
      this.blogListUrl = this.$store.state.blogListUrl;
      this.axios
        .get(this.web_api_url + this.blogListUrl + "?page=" + this.limit)
        .then(res => {
          this.total = res.data.total;
          this.posts = res.data.data;
        });
    },
    goArticlePage: function(id) {
      this.$router.push({
        name: "article",
        path: "/blog/article/",
        params: { articleId: id }
      });
    },
    enter: function(el, done) {
      Velocity(
        el,
        "transition.slideLeftBigIn",
        { duration: 750, stagger: 250 },
        done
      );
    },
    leave: function(el, done) {
      Velocity(
        el,
        "transition.slideLeftBigOut",
        { duration: 750, stagger: 250 },
        done
      );
    },
    beforeAppear: function(el) {
      el.style.display = "none";
    },
    appear: function(el, done) {
      Velocity(
        el,
        "transition.slideLeftBigIn",
        { duration: 750, delay: 800, stagger: 250 },
        done
      );
    }
  },
  mounted: function() {
    //请求博客列表
    this.getBlogList();
  },
  computed: {
    getIsChangeTotal() {
      return this.$store.state.isChangeTotal;
    },
    //请求博客列表
    getBlogUrl() {
      return this.$store.state.blogListUrl;
    }
  },
  watch: {
    //检测到来源为热门标签及分类，就清空total
    getIsChangeTotal() {
      this.limit = 1;
      this.current = 1;
    },
    getBlogUrl() {
      this.getBlogList();
    }
  },

  filters: {
    timeFormat: function(value) {
      if (!value) return "";
      return value.substr(0, 10);
    }
  },
  components: {
    IRow: Row,
    ICol: Col,
    Card: Card,
    Icon: Icon,
    IButton: Button,
    IPage: Page
  }
};
</script>
<style scoped>
.content {
  max-width: 1200px;
  margin-top: 20px;
  /* background-color: #fff; */
  margin: 20px auto 0;
  margin-left: 20px;
}
.articleList-page {
  margin-top: 20px;
}
.layout-breadcrumb {
  padding: 10px 15px 0;
}
.my-card {
  margin-top: 20px;
  padding-bottom: 0;
}
.article-title {
  margin-bottom: 5px;
}
.article-title-col {
  border-right: 1px solid #e9eaec;
}
.ivu-card-body {
  padding: 16px 0 16px;
}
.article-content {
  text-align: left;
  cursor: pointer;
}
.card-foot {
  height: 40px;
  line-height: 40px;
  margin-top: 20px;
  text-align: left;
  border-top: 1px solid #e9eaec;
}
.article-tag {
  margin-left: 8px;
}
</style>
