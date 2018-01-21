<template>
  <transition
    appear 
    v-on:enter="enter"
    v-on:leave="leave"
    v-on:before-appear="beforeAppear"
    v-on:appear="appear"
    :css="false">
    <div class="content">
      <ul>
        <li class="inputItem">
          <h3 class="inputTitle">文章标题</h3>
          <IInput :value.sync="value" placeholder="请输入文章标题"></IInput>  
        </li>
        <li class="inputItem">
          <h3 class="inputTitle">文章描述</h3>
          <IInput :value.sync="value" type="textarea" placeholder="请输入文章标题"></IInput>  
        </li>
        <li class="inputItem">
          <h3 class="inputTitle">文章slug</h3>
          <IInput :value.sync="value" placeholder="请输入文章标题"></IInput>  
        </li>
        <li class="inputItem">
          <h3 class="inputTitle">文章分类</h3>
          <i-select :model.sync="model1" style="width:200px">
            <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
        </i-select>
        </li>
        <li class="inputItem">
          <h3 class="inputTitle">文章标签</h3>
          <IInput :value.sync="value" placeholder=""></IInput>  
        </li>
        <li class="inputItem">
          <h3 class="inputTitle">文章内容</h3>
          <mavon-editor class="mavon-editor" default_open="eidt" v-bind:value="article.content" :subfield="false" :toolbarsFlag="true" :editable="true" v-bind:ishljs="true" @save="saveArticleData" @htmlcode="htmlcode" code_style="code-github" style="height: 100%;"></mavon-editor>
        </li>
      </ul>
    </div>
  </transition>
</template>
<script>
 //引入markdown编辑文件
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css';
import { Input, Icon } from 'iview';
import { Row, Col } from 'iview/src/components/grid';
export default {
  name: "ArticleEdit",
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
  components: {'mavon-editor': mavonEditor, "Icon": Icon, "IRow": Row, "ICol": Col, "IInput": Input},
};
</script>

<style scoped>
  .content {
    max-width: 1200px;
    min-height: 1000px;
    background-color: #fff;
    margin: 20px 0 0 20px;
  }
  .inputItem{
    text-align: left;
    padding: 10px 15px 0;
  }
  .inputTitle{
    margin-bottom: 5px;
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
