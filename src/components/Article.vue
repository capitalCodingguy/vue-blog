<template>
  <div class="content">
   <mavon-editor class="mavon-editor" :default_open="default_open" v-model="article" :subfield="false" :toolbarsFlag="false" :editable="false" :ishljs="true" @save="saveArticleData" @htmlcode="htmlcode" style="height: 100%;"></mavon-editor>
  </div>
</template>
<script>
 //引入markdown编辑文件
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  name: "Article",
  props: ['articleId'],
  data: () => ({
    post_url: 'http://blog.app/api/blog/',
    default_open: 'preview',
    article: '',

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
      this.axios.get(this.post_url + this.articleId).then((res) => {
        console.log(res.data);
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
    background-color: #fff;
    margin: 20px 0 0 20px;
  }
  .mavon-editor{
    box-shadow: none;
  }
  .mavon-editor.v-note-wrapper .v-note-panel{
    box-shadow: none;
    padding-top: 0;
  }
</style>
