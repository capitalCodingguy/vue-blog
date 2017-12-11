<template>
  <div class="content">
    <Row class="works-layout" type="flex" justify="center">
      <Col span="24" style="margin-top: 40px;">
        <h2>个人作品列表</h2>
        <section id="cd-timeline" class="cd-container">
          <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-movie">
                <div style="background-color: #9caebf;"></div>
            </div>
            <div class="cd-timeline-content">
                <h2>闪电刷新工友端</h2>
                <p>都是分开建安费垃圾分类发动机阿里积分卡死了房</p>
                <span class="cd-date">2015-05-15</span>
            </div>
          </div>
          <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-movie">
                <div style="background-color: #9caebf;"></div>
            </div>
            <div class="cd-timeline-content">
                <h2>闪电刷新小程序</h2>
                <p>填写内容</p>
                <span class="cd-date">2015-05-15</span>
            </div>
          </div>
        </section>
      </Col>
    </Row>
  </div>
</template>
<style>
.badge-color {
  background: #9caebf !important;
}
</style>

<script>
export default {
  name: "WorksContent",
  data: () => ({
    value2: [20, 50]
  }),
  mounted: function() {
    //热门文章列表
    this.getHotArticle();
    //请求文章分类列表
    this.getArticleCategory();
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
    }
  },
  computed: {
    setArticle() {
      return this.$store.state.article.title;
    }
  },
  components: {}
};
</script>
<style scoped>
.content {
  flex: 1;
  min-width: 1200px;
  margin: 80px auto 0;
}
.layout-breadcrumb{
  text-align: left;
  padding-left: 20px;
}
.works-layout {
  margin-left: 20px;
  padding-top: 25px;
  /* background-color: #fff; */
}
h2 {
  font-size: 16px;
  color: #303e49;
  font-weight: 400;
}
.cd-container {
  /* this class is used to give a max-width to the element it is applied to, and center it horizontally when it reaches that max-width */
  width: 90%;
  max-width: 1170px;
  margin: 0 auto; //
  background: #fff;
}

.cd-container::after {
  /* clearfix */
  content: "";
  display: table;
  clear: both;
}

#cd-timeline {
  position: relative;
  padding: 2em 0;
  margin-top: 2em;
  margin-bottom: 2em;
}

#cd-timeline::before {
  /* this is the vertical line */
  content: "";
  position: absolute;
  top: 0;
  left: 18px;
  height: 100%;
  width: 4px;
  background: #d7e4ed;
}

@media only screen and (min-width: 1170px) {
  #cd-timeline {
    margin-top: 3em;
    margin-bottom: 3em;
  }
  #cd-timeline::before {
    left: 50%;
    margin-left: -2px;
  }
}

.cd-timeline-block {
  position: relative;
  margin: 2em 0;
}

.cd-timeline-block:after {
  content: "";
  display: table;
  clear: both;
}

.cd-timeline-block:first-child {
  margin-top: 0;
}

.cd-timeline-block:last-child {
  margin-bottom: 0;
}

@media only screen and (min-width: 1170px) {
  .cd-timeline-block {
    margin: 4em 0;
  }
  .cd-timeline-block:first-child {
    margin-top: 0;
  }
  .cd-timeline-block:last-child {
    margin-bottom: 0;
  }
}

.cd-timeline-img {
  position: absolute;
  top: 25px;
  left: 15px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  box-shadow: 0 0 0 4px white, inset 0 2px 0 rgba(0, 0, 0, 0.08),
    0 3px 0 4px rgba(0, 0, 0, 0.05);
}

.cd-timeline-img.cd-picture {
  background: #75ce66;
}

.cd-timeline-img.cd-movie {
  background: #9caebf;
}

.cd-timeline-img.cd-location {
  background: #f0ca45;
}

@media only screen and (min-width: 1170px) {
  .cd-timeline-img {
    width: 10px;
    height: 10px;
    left: 50%;
    
    margin-left: -5px;
    /* Force Hardware Acceleration in WebKit */
    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;
  }
  .cssanimations .cd-timeline-img.is-hidden {
    visibility: hidden;
  }
  .cssanimations .cd-timeline-img.bounce-in {
    visibility: visible;
    -webkit-animation: cd-bounce-1 0.6s;
    -moz-animation: cd-bounce-1 0.6s;
    animation: cd-bounce-1 0.6s;
  }
}

.cd-timeline-content {
  position: relative;
  margin-left: 60px; //
  background: white;
  background: #fff;
  border-radius: 0.25em;
  padding: 1em;
  box-shadow: 0 3px 0 #d7e4ed;
  border-radius: 0.25em;
}

.cd-timeline-content:after {
  content: "";
  display: table;
  clear: both;
}

.cd-timeline-content h2 {
  color: #303e49;
  font-weight: 400;
}

.cd-timeline-content p,
.cd-timeline-content .cd-read-more,
.cd-timeline-content .cd-date {
  font-size: 13px;
  font-size: 0.8125rem;
  color: black;
}

.cd-timeline-content .cd-read-more,
.cd-timeline-content .cd-date {
  display: inline-block;
}

.cd-timeline-content p {
  color: #495060;
  margin: 1em 0;
  line-height: 1.6;
}

.cd-timeline-content .cd-read-more {
  float: right;
  padding: 0.8em 1em;
  background: #acb7c0;
  color: white;
  border-radius: 0.25em;
}

.no-touch .cd-timeline-content .cd-read-more:hover {
  background-color: #bac4cb;
}

a.cd-read-more:hover {
  text-decoration: none;
  background-color: #424242;
}

.cd-timeline-content .cd-date {
  float: left;
  color: #999;
  padding: 0.8em 0;
  opacity: 0.7;
}

.cd-timeline-content::before {
  content: "";
  position: absolute;
  top: 16px;
  right: 100%;
  height: 0;
  width: 0;
  border: 7px solid transparent;
  position: absolute;
  top: 16px;
  right: 100%;
  height: 0;
  width: 0;
  border: 7px solid transparent;
  border-right: 7px solid #d7e4ed;
}

@media only screen and (min-width: 768px) {
  .cd-timeline-content h2 {
    font-weight: 400;
  }
  .cd-timeline-content p {
    
  }
  .cd-timeline-content .cd-read-more,
  .cd-timeline-content .cd-date {
    font-size: 14px;
    font-size: 0.875rem;
  }
}

@media only screen and (min-width: 1170px) {
  .cd-timeline-content {
    margin-left: 0;
    padding: 1.6em;
    width: 45%;
  }
  .cd-timeline-content::before {
    top: 24px;
    left: 100%;
    border-color: transparent;
    border-left-color: white;
  }
  .cd-timeline-content .cd-read-more {
    float: left;
  }
  .cd-timeline-content .cd-date {
    position: absolute;
    width: 100%;
    left: 80%;
    top: 6px;
    font-size: 16px;
    font-size: 1rem;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content {
    float: right;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content::before {
    top: 24px;
    left: auto;
    right: 100%;
    border-color: transparent;
    border-right-color: white;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-read-more {
    float: right;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-date {
    left: auto;
    right: 122%;
    text-align: right;
  }
  .cssanimations .cd-timeline-content.is-hidden {
    visibility: hidden;
  }
  .cssanimations .cd-timeline-content.bounce-in {
    visibility: visible;
    -webkit-animation: cd-bounce-2 0.6s;
    -moz-animation: cd-bounce-2 0.6s;
    animation: cd-bounce-2 0.6s;
  }
}

@media only screen and (min-width: 1170px) {
  /* inverse bounce effect on even content blocks */
  .cssanimations
    .cd-timeline-block:nth-child(even)
    .cd-timeline-content.bounce-in {
    -webkit-animation: cd-bounce-2-inverse 0.6s;
    -moz-animation: cd-bounce-2-inverse 0.6s;
    animation: cd-bounce-2-inverse 0.6s;
  }
}
</style>
