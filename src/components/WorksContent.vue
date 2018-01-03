<template>
  <div class="content">
    <IRow class="works-layout" type="flex" justify="center">
      <ICol span="24" style="margin-top: 20px;">
        <h2>个人作品列表</h2>
        <section id="cd-timeline" class="cd-container" >
          <transition-group
            appear 
            v-on:enter="enter"
            v-on:leave="leave"
            v-on:before-appear="beforeAppear"
            v-on:appear="appear"
            :css="false">
            <div class="cd-timeline-block" v-for="(work, key) of works" v-bind:key="key">
              <div class="cd-timeline-img cd-movie">
                  <div style="background-color: #9caebf;"></div>
              </div>
              <div class="cd-timeline-content">
                  <h2>{{work.title}}</h2>
                  <p style="text-align: left;text-indent: 2em;">{{work.content}}</p>
                  <span class="cd-date">{{work.time}}</span>
                  <div v-if="work.imglist.length" class="cd-img-list">
                    <img style="width: 33%;height: 100%;" class="preview-img" v-for="(img, value, index) of work.imglist" v-bind:key="key" v-bind:src="img" @click="clickImg($event)" alt="">
                    <big-img v-if="showBigImg" @clickit="viewBigImg" :imgSrc="imgSrc"></big-img>
                  </div>
                  <div v-if="!work.imglist.length" class="cd-img-list">
                    <img style="width: 33%;height: 100%;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513420996039&di=37221cd7f5e5c97b3fcccd3d8f70cdd6&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fcrop%253D0%252C0%252C600%252C998%2Fsign%3D8a8e1a10fd36afc31a4365258e29c7f4%2F4afbfbedab64034ff13195d6a5c379310b551d65.jpg" alt="">
                    <img style="width: 33%;height: 100%;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513420996039&di=37221cd7f5e5c97b3fcccd3d8f70cdd6&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fcrop%253D0%252C0%252C600%252C998%2Fsign%3D8a8e1a10fd36afc31a4365258e29c7f4%2F4afbfbedab64034ff13195d6a5c379310b551d65.jpg" alt="">
                    <img style="width: 33%;height: 100%;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513420996039&di=37221cd7f5e5c97b3fcccd3d8f70cdd6&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fcrop%253D0%252C0%252C600%252C998%2Fsign%3D8a8e1a10fd36afc31a4365258e29c7f4%2F4afbfbedab64034ff13195d6a5c379310b551d65.jpg" alt="">
                  </div>
                  <p style="text-align: right;color: #9caebf;margin-right: 6px;cursor:pointer;">
                    <a target="_blank" href="http://www.baidu.com" style="color: #9caebf;">查看详情</a>
                  </p>
              </div>
            </div>
          </transition-group>
        </section>
      </ICol>
    </IRow>
  </div>
</template>
<style>
.badge-color {
  background: #9caebf !important;
}
</style>

<script>
import { Row, Col } from 'iview/src/components/grid';
export default {
  name: "WorksContent",
  data: () => ({
    showBigImg: false,
    imgSrc: '',
    value2: [20, 50],
    works: [
      {"title" : "斑马学堂app", "content": "机器人编程课课堂辅助工具，功能主要有注册、二维码登录、现场分组、组员管理、组员签到、拍照、画图、作品标签系统、单人及组队报告编辑系统、生成报告等。", "time": "2017-10-08", "src": "", "imglist": []},
      {"title" : "央视动画编辑器", "content": "央视少儿app合作项目，动漫人物场景录制系统。使用html5游戏框架egret制作，实现动漫人物故事的编辑、录制、播放、保存等功能。", "time": "2017-07-12", "src": "", "imglist": []},
      {"title" : "达奇漂流工具微信版", "content": "微信端达奇互助交换系统，实现在线选购，微信支付，填单申请等功能。", "time": "2017-05-15", "src": "", "imglist": []},
      {"title" : "斑马小镇教育版", "content": "斑马小镇教育版pc站，实现课程播放、小组管理、同学管理、班级动态通知、作品评分。", "time": "2017-03-22", "src": "", "imglist": []},
      {"title" : "闪电刷新管家端", "content": "闪电刷新管家端，主要功能有上门预约、材料添加、报价单、施工管理、基检信息展示等使用功能。", "time": "2017-01-5", "src": "", "imglist": []},
      {"title" : "闪电刷新小程序", "content": "闪电刷新微信用户端，实现报价计算、电话预约、案例查询、定位展示周边案例等功能。", "time": "2016-12-12", "src": "", "imglist": [
        'http://ozynkcxdv.bkt.clouddn.com/%E5%B0%8F%E7%A8%8B%E5%BA%8F1.jpg','http://ozynkcxdv.bkt.clouddn.com/%E5%B0%8F%E7%A8%8B%E5%BA%8F2.jpg','http://ozynkcxdv.bkt.clouddn.com/%E5%B0%8F%E7%A8%8B%E5%BA%8F3.jpg'
      ]},
      {"title" : "闪电刷新工友端", "content": "闪电刷新装修工友使用，实现工单派送、工单通知、节点拍照审核、确认工单、邀请工友、通过时间节点筛选工人、工人本地组队等功能。", "time": "2016-06-18", "src": "", "imglist": []},
      {"title" : "闪电刷新移动站", "content": "闪电刷新移动版网站，实现一键预约、装修报价器、轮播图等功能。", "time": "2016-02-12", "src": "", "imglist": []},
      {"title" : "汇乐家居pc站", "content": "汇乐家居pc站，实现一键预约、设计、主材、施工、一步到位，专业的互联网家装站。", "time": "2015-10-03", "src": "", "imglist": []},
      {"title" : "搜书神器", "content": "个人尝试ionic框架的demo，实现五星评分、跨域请求数据、列表渲染，动态懒加载数据。", "time": "2015-08-10", "src": "", "imglist": []},
      {"title" : "金惠科技pc站", "content": "公司外包项目，为河南高新技术企业、十一五重点支持企业金慧科技制作官网。企业主营互联网不良信息监测系统，智能图像识别技术、网络直播互动教室等。", "time": "2015-05-10", "src": "", "imglist": []},
      {"title" : "郑州至轩设计pc站", "content": "至轩——中原地区最具性价比的专业设计公司，600家金牌客户口碑认证，客户遍及中原及全国各地众多地区。", "time": "2015-01-10", "src": "", "imglist": []},
    ]
  }),
  mounted: function() {
    
  },
  methods: {
    // clickImg(e) {
    //   this.showBigImg = true;
    //   this.imgSrc = e.currentTarget.src;
    // },
    // viewBigImg() {
    //   this.showBigImg = false;
    // }
    enter: function(el, done) {
      Velocity(
        el,
        "transition.slideDownBigIn",
        { duration: 750, stagger: 250 },
        done
      );
    },
    leave: function(el, done) {
      Velocity(
        el,
        "transition.slideDownBigOut",
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
        "transition.slideDownBigIn",
        { duration: 750, delay: 800, stagger: 250 },
        done
      );
    }
  },
  computed: {
    
  },
  components: {
    // 'big-img': ImgPreview
    "IRow": Row, "ICol": Col,
  }
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
.cd-img-list {
  display: flex;
  justify-content: space-around;
  height: 0;
}
.cd-timeline-content:hover .cd-img-list {
  /* height: 100%; */
  animation:ttt .4s 1 forwards;
}

@keyframes ttt {
  0%{
    height: 0;
    opacity: 0;
  }
  33%{
    height: 66px;
    opacity: 0.3;
  }
  66%{
    height: 132px;
    opacity: 0.6;
  }
  100%{
    height: 100%;
    opacity: 1;
  }
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
