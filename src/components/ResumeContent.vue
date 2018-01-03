<template>
  <div class="content">
    <IRow class="layout" type="flex" justify="space-between">
      <ICol span="24" style="margin-top: 20px;">
        <transition
          appear 
          v-on:enter="enter"
          v-on:leave="leave"
          v-on:before-appear="beforeAppear"
          v-on:appear="appear"
          :css="false">
          <Card :bordered="false" class="item">
            <p slot="title">个人信息</p>
            <div style="margin-left: 15px;">
              <p>姓名：常燕飞</p>
              <p class="list">性别：男</p>
              <p class="list">民族：汉</p>
              <p class="list">出生日期：1992-03-18</p>
              <p class="list">开发经验：三年以上</p>
              <p class="list">电子邮箱：capital_codingguy@163.com</p>
            </div>
          </Card>
        </transition>
        <transition
          appear 
          v-on:enter="enter"
          v-on:leave="leave"
          v-on:before-appear="beforeAppear"
          v-on:appear="appear"
          :css="false">
          <Card :bordered="false" class="item">
            <p slot="title">职业技能</p>
            <div style="margin-left: 15px;">
              <p class="list" v-for="(skill, key) of skills" v-bind:key="key">{{skill}}</p>
            </div>
          </Card>
        </transition>
        <transition
        appear 
        v-on:enter="enter"
        v-on:leave="leave"
        v-on:before-appear="beforeAppear"
        v-on:appear="appear"
        :css="false">
          <Card :bordered="false" class="item">
            <p slot="title">工作经历</p>
            <div class="experience" v-for="(experience, key) of experiences" v-bind:key="key">
              <p>{{experience.time}}</p>
              <p>{{experience.company}}</p>
              <p>{{experience.position}}</p>
            </div>
          </Card>
        </transition>
        <transition
          appear 
          v-on:enter="enter"
          v-on:leave="leave"
          v-on:before-appear="beforeAppear"
          v-on:appear="appear"
          :css="false">
        <Card :bordered="false" class="item">
          <p slot="title">项目经验</p>
          <Card class="works" v-for="(work, key) of works" v-bind:key="key">
            <div>
                <p class="works-title">{{work.name}}</p>
                <div class="works-item">
                  <p class="item-left">技术要点：</p>
                  <div>
                    <p>{{work.skill}}</p>
                  </div>
                </div>
                <div class="works-item">
                  <p class="item-left">项目描述：</p>
                  <div>
                    <p>{{work.memo}}</p>
                  </div>
                </div>
                <div class="works-item">
                  <p class="item-left">职责描述：</p>
                  <div >
                    <p v-for="(duty, key) of work.dutylist" v-bind:key="key">{{duty}}</p>
                  </div>
                </div>
                <p></p>
            </div>
          </Card>
        </Card>
        </transition>
        <transition
          appear 
          v-on:enter="enter"
          v-on:leave="leave"
          v-on:before-appear="beforeAppear"
          v-on:appear="appear"
          :css="false">
          <Card :bordered="false" class="item">
            <p slot="title">教育经历</p>
            <div class="experience">
              <p>2010.09-2013.06</p>
              <p>河南牧业经济学院（英才校区）</p>
              <p>大专</p>
              <p>计算机应用技术</p>
            </div>
          </Card>
        </transition>
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
import { Card } from "iview";
import { Row, Col } from "iview/src/components/grid";
export default {
  name: "ResumeContent",
  data: () => ({
    experiences: [
      { time: "2017.03-至今", company: "斑马骑士（北京）科技有限公司", position: "前端开发工程师" },
      { time: "2016.03-2017.02", company: "北京闪电装饰有限公司", position: "移动web开发" },
      {
        time: "2014.06-2016.02",
        company: "华源润通（郑州）科技有限公司",
        position: "前端开发工程师"
      }
    ],
    skills: [
      "1.熟练运用HTML、CSS等网页制作技术，熟悉页面架构和布局，快速切图完成页面",
      "2.熟练使用HTML5、CSS3等新技术，构建移动端网站、响应式网站。",
      "3.熟练使用axios、angular-httpModule、fetchJs、ajax、jsonP等前后端交互技术，完成api对接。",
      "4.熟练使用包括angular(1~5)、vue、react等框架进行开发，深刻理解框架路由、dom渲染、组件封装交互、数据流管理等通用概念。",
      "5.熟悉Hybrid App开发相关技术，熟练使用React Native、ionic、Cordova，了解MUI、vuex等。",
      "6.熟悉微信小程序、公众号开发，熟练使用wxIDE，了解WeUI规范。",
      "7.熟悉egret游戏框架、可进行html5小游戏开发。",
      "8.熟悉使用bootstrop、amazeui、semantic、iview等UI框架进行快速开发。",
      "9.熟悉es6语法、熟练使用js超集typescript进行工程化开发。",
      "10.熟悉npm、webpck、git等常用开发工具",
      "11.了解mysql、linux、php、laravel框架，可进行简单的数据库操作及api开发。"
    ],
    works: [
      {
        name: "闪电刷新工友端App",
        skill: "angular、ng-route，ionic、cordova、JPUSH、codePush、baiduMap、mui组件",
        memo:
          "应用于闪电刷新装修工人团队、实现工单派送，新工单通知，节点拍照及审核、确认开工完工、邀请工友，时间节点筛选工人、工人本地组队等功能。",
        dutylist: [
          "熟悉angular常用指令、模版、依赖注入、ng-route路由分发、scope作用域、过滤器、Service、http拦截等功能。",
          "熟悉ionic常见的界面错位以及cordova常见bug、熟练使用NetWork、Toast、modal、camera、File等常用模块的配置操作。",
          "快速查看api文档、完成界面数据绑定、能和后台进行配合、完成前端后台数据交互。",
          "熟悉ios项目从证书申请、下载、本地调试、打包上传、提交审核、版本迭代等苹果端整体上线流程。",
          "熟练使用xcode实现基础的的bug调试、ios源文件修改，以及ios端常见的样式错位。"
        ]
      },
      {
        name: "闪电刷新用户版（小程序）",
        skill: "wxml、wxss、wxIDE",
        memo: "微信端闪电刷新用户版小程序，实现报价计算、电话预约、案例查询、列表懒加载、定位展示周边案例等实用功能。",
        dutylist: [
          "实现scrollview轮播，list列表、下拉刷新、modal弹窗、request数据上传；",
          "熟练使用wxIDE进行代码编辑、功能调试、利用egrat wing实现即时预览；",
          "了解wxml特殊视图容器以及wxss与css之间的差异；",
          "了解微信小程序端page页面周期钩子；"
        ]
      },
      {
        name: "汇乐家居pc站",
        skill: "js、jquery、scrollup、layer",
        memo: "负责网站整体架构设计,html静态页面以及js模块的编写。多人开发（3人）",
        dutylist: [
          "利用模块化部局思想，提高代码的复用性，如head、foot等部位；",
          "利用Bootcdn开源脚本库，优化响应速度，节省服务器流量；",
          "使用ScrollUp、layer等轻量级插件，实现弹出层，滚动等效果；",
          "大量使用字体图标，减轻服务器压力，提高网站响应速度；",
          "内嵌百度地图、720云360度全景装修效果图。"
        ]
      },
      {
        name: "金慧科技pc站",
        skill: "js、jquery、fullpage、unslider",
        memo: "为河南高新技术企业、十一五重点支持企业金慧科技制作官网。企业主营互联网不良信息监测系统，智能图像识别技术、网络直播互动教室等。",
        dutylist: [
          "多人协作开发，使用svn进行协同开发以及版本控制；",
          "使用fullpage全屏滚动插件，实现主页全屏滚动显示；",
          "使用unslider轮播插件，实现banner动态轮播特效，如scale、rotate、mask。"
        ]
      },
      {
        name: "郑州至轩设计pc站",
        skill: "html、css、js、jquery",
        memo: "为河南高新技术企业、十一五重点支持企业金慧科技制作官网。企业主营互联网不良信息监测系统，智能图像识别技术、网络直播互动教室等。",
        dutylist: ["Html静态页面编写，css3动态效果实现", "使用jquery第三方框架实现网页交互效果"]
      }
    ] 
  }),
  mounted: function() {},
  methods: {
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
  computed: {},
  components: { IRow: Row, ICol: Col, Card: Card }
};
</script>
<style scoped>
.content {
  flex: 1;
  max-width: 1200px;
  margin: 84px auto 0;
}
h2 {
  font-size: 16px;
  color: #303e49;
  font-weight: 400;
}
.item {
  margin-top: 20px;
  margin-left: 20px;
  text-align: left;
  min-width: 1180px;
}
.item .list {
  margin-top: 15px;
}
.item .list:first-child {
  margin-top: 0;
}
.experience {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: 0 15px 0;
}
.experience:first-child {
  margin-top: 0;
}
.works {
  margin-top: 15px;
}
.works:first-child {
  margin-top: 0;
}
.works-title {
  font-weight: 700;
}
.works-item {
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
}
.works-item .item-left {
  font-weight: 700;
}
</style>
