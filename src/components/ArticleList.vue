<template>
  <div class="content">
    <div v-for="(post, key, index) in posts" v-bind:key="post.id">
      <Card :bordered="false" class="my-card">
        <div slot="title" v-on:click="goArticlePage(post.id)">
          <p class="article-title">{{post.title}}</p>
          <Row type="flex" justify="center">
            <Col span="4" class="article-title-col">
              <Icon type="ios-calendar-outline" size="14px" />
              <span style="margin-left: 5px;font-size: 12px;">{{post.created_at | timeFormat}}</span>
            </Col>
            <Col span="3" class="article-title-col">
              <Icon type="ios-folder-outline" size="14px" />
              <span style="margin-left: 5px;font-size: 12px;">{{post.category.name}}</span>
            </Col>
            <Col span="3">
              <Icon type="ios-eye-outline" size="14px" />
              <span style="margin-left: 5px;font-size: 12px;">{{post.view_count}}</span>
            </Col>
          </Row>
        </div>
        <p class="article-content">{{post.description}}</p>
        <div class="card-foot">
          <Icon type="ios-pricetags-outline" size="30px" />
          <Button type="ghost" shape="circle" size="small" class="article-tag" v-for="(tag,key,index) in post.tags" v-bind:key="tag.id">{{tag.name}}</Button>
        </div>
      </Card>
    </div>
    <Row class="articleList-page">
      <Col span="24">
        <Page :total="total" show-total v-on:on-change="pageChange"></Page>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  name: "ArticleList",
  props: ["post"],
  data: () => ({
    limit: 1,
    total: 0,
    posts: [],
  }),
  methods: {
    //页码变更函数
    pageChange: function(event){
      this.limit = event;
      this.getBlogList();
    },
    getBlogList: function(){
      this.axios.get(this.web_api_url + 'blog_list' + '?page=' + this.limit).then((res) => {
        this.total = res.data.total;
        this.posts = res.data.data;
      });
    },
    goArticlePage: function(id){
      this.$router.push({name: 'article', path: '/blog/article/', params: {"articleId" : id }});
    }
  },
  mounted: function() {
    //请求博客列表
    this.getBlogList();
  },
  filters: {
    timeFormat: function(value) {
      if (!value) return "";
      return value.substr(0, 10);
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
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
