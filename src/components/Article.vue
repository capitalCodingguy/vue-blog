<template>
  <transition
    appear 
    v-on:enter="enter"
    v-on:leave="leave"
    v-on:before-appear="beforeAppear"
    v-on:appear="appear"
    :css="false">
  <div class="content">
   <div class="article-title">
    <h4>{{article.title}}</h4>
   </div>
   <IRow type="flex" justify="center" style="color:#666;">
    <ICol span="3" class="article-title-col">
      <Icon type="ios-calendar-outline" size="16px" />
      <span style="margin-left: 5px;font-size: 14px;;">{{article.created_at | timeFormat}}</span>
    </ICol>
    <ICol span="3" class="article-title-col">
      <Icon type="ios-folder-outline" size="16px" />
      <span style="margin-left: 5px;font-size: 14px;">{{category.name}}</span>
    </ICol>
    <ICol span="2">
      <Icon type="ios-eye-outline" size="16px" />
      <span style="margin-left: 5px;font-size: 14px;">{{article.view_count}}</span>
    </ICol>
   </IRow>
   <!-- <mavon-editor class="mavon-editor" v-model:default_open="default_open" v-model="article.content" :subfield="true" :toolbarsFlag="true" :editable="true" :ishljs="true" @save="saveArticleData" @htmlcode="htmlcode" style="height: 100%;"></mavon-editor> -->
   <mavon-editor class="mavon-editor" default_open="preview" v-bind:value="article.content" :subfield="false" :toolbarsFlag="false" :editable="false" @save="saveArticleData" @htmlcode="htmlcode" code_style="vs" v-bind:ishljs="false" style="height: 100%;"></mavon-editor>
  </div>
  </transition>
</template>
<script>
 //引入markdown编辑文件
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import Icon from 'iview/src/components/icon';
import { Row, Col } from 'iview/src/components/grid';
export default {
  name: "Article",
  data: () => ({
    default_open: 'preview',
    article: '',
    category: {},
    articleId: '' 
  }),
  mounted: function(){
    this.getArticleData();
  },
  filters: {
    timeFormat: function(value) {
      if(!value) return '';
      return value.substr(0,10);
    }
  },
  methods: {
    getArticleData: function() {
      this.articleId = this.$route.params.articleId;
      this.axios.get('blog/' + this.$route.params.articleId).then((res) => {
        this.article = res.data;
        this.category = res.data.category;
        //更新面包屑导航数据
        let crumbs = this.$store.state.crumbs;
        crumbs.push({url: '/blog/articlelist/', title: this.article.title });
        this.$store.commit('setCrumbs', crumbs);
      });
    },
    //获取热门文章列表id
    getArticleId: function() {
      this.$route.params.articleId = this.$store.state.article;
      this.getArticleData();
    },
    saveArticleData: function(data) {
      console.log(data);
    },
    htmlcode: function(data) {
      console.log(data);
    },
    //文章动画函数
    enter: function(el, done) {
      Velocity(
        el,
        "transition.slideLeftBigIn",
        { duration: 780, stagger: 250 },
        done
      );
    },
    leave: function(el, done) {
      Velocity(
        el,
        "transition.slideLeftBigOut",
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
        "transition.slideLeftBigIn",
        { duration: 800, delay: 800, stagger: 250 },
        done
      );
    },
  },
  computed: {
    //监听热门博客
    getHotBlog() {
      return this.$store.state.article;
    }
  },
  watch: {
    getHotBlog() {
      this.getArticleId();
    }
  },
  destroyed: function () {
    //页面销毁之前，清楚state里的article数据
    let crumbs = this.$store.state.crumbs;
    crumbs.pop();
    this.$store.commit('setCrumbs', crumbs);
  },
  components: {'mavon-editor': mavonEditor, "Icon": Icon, "IRow": Row, "ICol": Col,},
};
</script>

<style scoped>
  .content {
    max-width: 1200px;
    min-height: 1000px;
    background-color: #fff;
    margin: 20px 0 0 20px;
  }
  .article-title {
    font-size: 18px;
    margin: 25px 25px 10px;
    padding: 20px 0 20px;
    border-bottom: 1px solid rgba(238,238,238,.5);
  }
  .mavon-editor{
    box-shadow: none;
    text-align: left;
  }
  .mavon-editor.v-note-wrapper .v-note-panel{
    box-shadow: none;
    padding-top: 15px;
  }
</style>
