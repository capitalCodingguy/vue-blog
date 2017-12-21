<template>
  <div class="content">
    <Row class="layout" type="flex" justify="space-between">
      <Col span="16" style="padding-top: 20px;">
        <router-view></router-view>
      </Col>
      <Col span="7" style="margin-top: 40px;margin-left: 20px;">
        <Card :bordered="false">
          <div slot="title">
            <Icon type="ios-folder-outline" size="14px" />
            <span style="margin-left: 5px;font-weight: bold;">文章分类</span>
          </div>
          <div>
            <div vertical class="classify" v-for="(category, key, index) in categories" v-bind:key="category.id" v-show="category.posts_count">
              <span>{{category.name}}</span>
              <Badge v-bind:count="category.posts_count" class-name="badge-color"></Badge>
            </div>
          </div>
        </Card>
        <Card :bordered="false" style="margin-top: 20px;">
          <div slot="title">
            <Icon type="ios-book-outline" size="14px" />
            <span style="margin-left: 5px;font-weight: bold;">推荐阅读</span>
          </div>
          <div>
            <div vertical class="classify" v-for="(post, key, index) in recommendedPosts"  v-bind:key="post.id">
              <span style="width: 80%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{post.title}}</span>
              <Badge v-bind:count="post.view_count" class-name="badge-color"></Badge>
            </div>
          </div>
        </Card>
        <Card :bordered="false" style="margin-top: 20px;">
          <div slot="title">
            <Icon type="ios-pricetags-outline" size="14px" />
            <span style="margin-left: 5px;font-weight: bold;">热门标签</span>
          </div>
          <div class="tag-content">
            <Button v-for="(tag, key, index) in tags" v-bind:key="key" v-if="tag.posts_count" 
              v-on:click="getArticleList(tag)"
              type="ghost" class="tag-button" shape="circle" size="small">
              {{tag.name}}
              <Badge v-bind:count="tag.posts_count" class-name="badge-color"></Badge>
            </Button>
          </div>
        </Card>
      </Col>
    </Row>
  </div>
</template>
<style>
  .badge-color{
    background: #9caebf !important;
  }
</style>

<script>
  export default {
    name: "BlogContent",
    data: () => ({
      tags: [],
      categories: [],
      recommendedPosts: [],
      article: ''
    }),
    mounted: function () {
      //热门文章列表
      this.getHotArticle();
      //请求文章分类列表
      this.getArticleCategory();
      //请求标签列表
      this.getTags();
    },
    methods: {
      getHotArticle: function(){
        this.axios.get(this.web_api_url + 'recommendedPosts').then((res) => {
          this.recommendedPosts = res.data;
        });
      },
      getArticleCategory: function(){
        this.axios.get(this.web_api_url + 'categories').then((res) => {
          this.categories = res.data;
        });
      },
      getTags: function(){
        this.axios.get(this.web_api_url + 'tag').then((res) => {
          this.tags = res.data;
        });
      },
      getArticleList: function(tag){
        this.$store.commit('setBlogListUrl', 'tag/' + tag.name)
        this.$store.commit('setCrumbs', [{url: '/blog/', title: '标签'}])
      }
    },
    computed: {
      setArticle () {
        return this.$store.state.article.title;
      }
    },
    components: {},
  };
</script>
<style scoped>
  .content {
    flex: 1;
    max-width: 1200px;
    margin: 84px auto 0;
  }
  .layout-breadcrumb{
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
    border-bottom: 1px solid #e9eaec;
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
  .v-note-wrapper .v-note-panel{
    box-shadow: none;
  }
</style>
