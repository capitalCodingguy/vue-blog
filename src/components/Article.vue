<template>
  <div class="content">
   <div class="article-title">
    <h4>{{article.title}}</h4>
   </div>
   <Row type="flex" justify="center" style="margin-bottom: 10px;color:#666;">
    <Col span="3" class="article-title-col">
      <Icon type="ios-calendar-outline" size="16px" />
      <span style="margin-left: 5px;font-size: 14px;;">{{article.created_at | timeFormat}}</span>
    </Col>
    <Col span="3" class="article-title-col">
      <Icon type="ios-folder-outline" size="16px" />
      <span style="margin-left: 5px;font-size: 14px;" v-cloak>{{article.category.name}}</span>
    </Col>
    <Col span="2">
      <Icon type="ios-eye-outline" size="16px" />
      <span style="margin-left: 5px;font-size: 14px;">{{article.view_count}}</span>
    </Col>
   </Row>
   <mavon-editor class="mavon-editor" v-model:default_open="default_open" v-model="article.content" :subfield="false" :toolbarsFlag="false" :editable="false" :ishljs="true" @save="saveArticleData" @htmlcode="htmlcode" style="height: 100%;"></mavon-editor>
  </div>
</template>
<script>
 //引入markdown编辑文件
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  name: "Article",
  data: () => ({
    default_open: 'preview',
    article: '',
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
      this.axios.get(this.web_api_url + 'blog/' + this.$route.params.articleId).then((res) => {
        this.article = res.data;
        this.$store.commit('setArticle', res.data);
      });
    },
    saveArticleData: function(data) {
      console.log(data);
    },
    htmlcode: function(data) {
      console.log(data);
    }
  },
  destroyed: function () {
    //页面销毁之前，清楚state里的article数据
    this.$store.commit('setArticle', '');
  },
  components: {'mavon-editor': mavonEditor},
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
    padding: 25px 0 25px;
    border-bottom: 1px solid rgba(238,238,238,.5);
  }
  .mavon-editor{
    box-shadow: none;
  }
  .mavon-editor.v-note-wrapper .v-note-panel{
    box-shadow: none;
    padding-top: 15px;
  }
</style>
