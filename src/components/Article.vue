<template>
  <div class="content">
   <mavon-editor class="mavon-editor" v-model:default_open="default_open" v-model="article" :subfield="false" :toolbarsFlag="false" :editable="false" :ishljs="true" @save="saveArticleData" @htmlcode="htmlcode" style="height: 100%;"></mavon-editor>
  </div>
</template>
<script>
 //引入markdown编辑文件
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  name: "Article",
  data: () => ({
    post_url: 'http://blog.app/api/blog/',
    default_open: 'preview',
    article: '',
    articleId: ''

  }),
  mounted: function(){
    this.getArticleData();
  },
  filters: {
    timeFormat: function(value) {
      if(!value) return ''
      return value.substr(0,10)
    }
  },
  methods: {
    getArticleData: function() {
      this.articleId = this.$route.params.articleId;
      this.axios.get(this.post_url + this.$route.params.articleId).then((res) => {
        this.article = res.data.content;
      });
    },
    saveArticleData: function(data) {
      console.log(data);
    },
    htmlcode: function(data) {
      console.log(data);
    }
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
  .mavon-editor{
    box-shadow: none;
  }
  .mavon-editor.v-note-wrapper .v-note-panel{
    box-shadow: none;
    padding-top: 15px;
  }
</style>
