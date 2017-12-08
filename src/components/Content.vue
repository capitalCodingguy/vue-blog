<template>
  <div class="content">
    <Row class="layout" type="flex" justify="space-between">
      <Col span="16">
        <div class="layout-breadcrumb">
          <Breadcrumb>
            <BreadcrumbItem href="">燕子梁筑</BreadcrumbItem>
            <BreadcrumbItem href="">博客</BreadcrumbItem>
            <BreadcrumbItem href="current_id">{{current_article.title}}java里的变量</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <router-view></router-view>
      </Col>
      <Col span="7" style="margin-top: 40px;">
        <Card :bordered="false">
          <div slot="title">
            <Icon type="ios-folder-outline" size="14px" />
            <span style="margin-left: 5px;font-weight: bold;">文章分类</span>
          </div>
          <div>
            <div vertical class="classify" v-for="(category, key, index) in categories" v-bind:key="category.id">
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
            <Button type="ghost" class="tag-button" shape="circle" size="small">Circle</Button>
            <Button type="ghost" class="tag-button" shape="circle" size="small">Circle</Button>
            <Button type="ghost" class="tag-button" shape="circle" size="small">Circle</Button>
            <Button type="ghost" class="tag-button" shape="circle" size="small">Circle</Button>
          </div>
        </Card>
        <Card :bordered="false" style="margin-top: 20px;">
          <div slot="title">
            <Icon type="ios-flame-outline" size="14px" />
            <span style="margin-left: 5px;font-weight: bold;">热门评论</span>
          </div>
          <div class="tag-content">
            <Button type="ghost" class="tag-button" shape="circle" size="small">Circle</Button>
            <Button type="ghost" class="tag-button" shape="circle" size="small">Circle</Button>
            <Button type="ghost" class="tag-button" shape="circle" size="small">Circle</Button>
            <Button type="ghost" class="tag-button" shape="circle" size="small">Circle</Button>
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
    name: "Content",
    data: () => ({
      posts_url: 'http://blog.app/api/blog_list',
      categories_url: 'http://blog.app/api/categories',
      recommendedPosts_url: 'http://blog.app/api/recommendedPosts',
      categories: [],
      recommendedPosts: [],
      current_id: 1,
      current_article: ''
    }),
    mounted: function () {
      //热门文章列表
      this.getHotArticle();
      //请求文章分类列表
      this.getArticleCategory();
    },
    methods: {
      //页码变更函数
      pageChange: function(event){
        this.limit = event;
        this.getBlogList();
      },

      getBlogList: function(){
        this.axios.get(this.posts_url + '?page=' + this.limit).then((res) => {
          this.total = res.data.total;
          this.posts = res.data.data;
        });
      },
      getHotArticle: function(){
        this.axios.get(this.recommendedPosts_url).then((res) => {
          this.recommendedPosts = res.data;
        });
      },
      getArticleCategory: function(){
        this.axios.get(this.categories_url).then((res) => {
          this.categories = res.data;
        });
      },
      goArticlePage: function(){
        
      }
    },
    components: {},
  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content {
    max-width: 1200px;
    /* background-color: #fff; */
    margin: 80px auto 0;
  }
  .layout{
    
  }
  .layout-breadcrumb{
    /* padding: 10px 0 0 20px; */
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
    display: flex;
  }
  .tag-button {
    margin: 0 5px 5px;
  }
  .v-note-wrapper .v-note-panel{
    box-shadow: none;
  }
</style>
