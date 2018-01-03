<template>
  <div class="content">
    <IRow class="works-layout" type="flex" justify="space-between">
      <ICol span="24" style="margin-top: 20px;">
        <div class="charts">
          <transition
            appear 
            v-on:enter="enter"
            v-on:leave="leave"
            v-on:before-appear="beforeAppear"
            v-on:appear="appear"
            :css="false">
            <div class="charts-tree">
              <h2 style="text-align: left;">关键词</h2>
              <div id="chartLine" style="width:1180px; height:300px;"></div>
            </div>
          </transition>
          <transition
            appear 
            v-on:enter="enter"
            v-on:leave="leave"
            v-on:before-appear="beforeAppear"
            v-on:appear="appear"
            :css="false">
            <div class="charts-tree">
              <h2 style="text-align: left;">技能拓扑树</h2>
              <div id="chartBar" style="width:1020px;height:600px;"></div>
            </div>
          </transition>
          <!-- <transition
            appear 
            v-on:enter="enter"
            v-on:leave="leave"
            v-on:before-appear="beforeAppear"
            v-on:appear="appear"
            :css="false"> -->
            <div class="charts-tree">
              <h2 style="text-align: left;">职业履历表</h2>
              <div id="chartColumn" style="height:500px;width:1100px;display: flex;align-items:center;justify-content:center;"></div>
            </div>
          <!-- </transition> -->
        </div>
      </ICol>
    </IRow>
  </div>
</template>
<script>
import echarts from "echarts";
import wordCloud from "echarts-wordcloud";
import { Row, Col } from 'iview/src/components/grid';
export default {
  name: "MeContent",
  data: () => ({
    chartColumn: null,
    chartBar: null,
    chartLine: null,
    chartPie: null
  }),
  mounted: function() {
    this.chartColumn = echarts.init(document.getElementById("chartColumn"));
    this.chartBar = echarts.init(document.getElementById("chartBar"));
    this.chartLine = echarts.init(document.getElementById("chartLine"));

    var dataCloud = {
      cloudData: [
        { name: "宅男", value: "25" },
        { name: " 勤思考", value: " 14" },
        { name: " 共产主义接班人", value: "13" },
        { name: " 爱搞机", value: " 24" },
        { name: " 村头小王子", value: " 30" },
        { name: " 90后", value: " 1" },
        { name: " 白羊", value: " 2" },
        { name: " IT民工", value: "3" },
        { name: " 沉默是金", value: "8" },
        { name: " 前果粉", value: "5" },
        { name: " 172", value: " 1" },
        { name: " 废", value: " 2" },
        { name: " 丧", value: " 18" },
        { name: " 米粉", value: " 18" },
        { name: " 数码控", value: " 1" },
        { name: " 爱美剧", value: " 22" },
        { name: " 北漂", value: " 23" },
        { name: " 不偷井盖的河南人", value: " 31" },
        { name: " 逗你玩儿", value: " 15" },
        { name: " 刷机狂", value: " 12" },
        { name: " k歌之王", value: " 22" },
        { name: " 戏精", value: " 19" }
      ],
      cloudDiv: "chartLine"
    };

    var createRandomItemStyle1 = function(params) {
      //此方法与下方配置中的第一个textStle下的color等同
      var colors = [
        "#fda67e",
        "#81cacc",
        "#cca8ba",
        "#88cc81",
        "#82a0c5",
        "#fddb7e",
        "#735ba1",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3"
      ];
      return colors[parseInt(Math.random() * 10)];
    };

    var createRandomItemStyle2 = function() {
      var colorArr = [
        "#fda67e",
        "#81cacc",
        "#cca8ba",
        "#88cc81",
        "#82a0c5",
        "#fddb7e",
        "#735ba1",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3"
      ];
      var flag = parseInt(Math.random() * 10);
      return {
        normal: {
          fontFamily: "微软雅黑",
          color: colorArr[flag]
        }
      };
    };
    function _setWordCloud(cloudData) {
      var option = {
        series: [
          {
            type: "wordCloud",
            shape: "ellipse",
            gridSize: 8,
            textStyle: {
              normal: {
                // fontFamily: "微软雅黑",
                color: function() {
                  var colors = [
                    "#fda67e",
                    "#81cacc",
                    "#cca8ba",
                    "#88cc81",
                    "#82a0c5",
                    "#fddb7e",
                    "#735ba1",
                    "#bda29a",
                    "#6e7074",
                    "#546570",
                    "#c4ccd3"
                  ];
                  return colors[parseInt(Math.random() * 10)];
                }
              }
            },
            data: cloudData
          }
        ]
      };
      return option;
    }

    //词云图初始化
    function initWordCloud(wordCloudData) {
      var option = _setWordCloud(wordCloudData.cloudData);
      var myChart = echarts.init(
        document.getElementById(wordCloudData.cloudDiv)
      );
      myChart.setOption(option);
    }

    initWordCloud(dataCloud);

    this.chartColumn.setOption({
      tooltip: {
        trigger: "axis"
      },
      legend: {
        formatter: function(name) {
          return echarts.format.truncateText(
            name,
            80,
            "16px Microsoft Yahei",
            "…"
          );
        },
        tooltip: {
          show: false
        },

        width: '85%',
        orient: "horizontal",
        // selectedMode: "true",
        // right: "right",
        top: "5%",
        data: ["html", "css", "js", "jquery", "ionic", "小程序" ,"vue", "typescript", "angular", "react", "egret", "mysql", "laravel", "php"]
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: "8%",
        right: "8%",
        top: '18%',
        bottom: "4%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          data: ["2013", "2014", "2015", "2016", "2017", "2018(年)"]
        }
      ],
      yAxis: [
        {
          type: "value"
        }
      ],
      series: [
        {
          name: "html",
          type: "line",
          stack: "总量",
          label: {
            normal: {
              show: false,
              position: "bottom"
            }
          },
          areaStyle: { normal: {} },
          data: [20, 39, 43, 57, 68, 82]
        },
        {
          name: "css",
          type: "line",
          stack: "总量",
          label: {
            normal: {
              show: false,
              position: "bottom"
            }
          },
          areaStyle: { normal: {} },
          data: [13, 20, 35, 42, 55, 62]
        },
        {
          name: "js",
          type: "line",
          stack: "总量",
          areaStyle: { normal: {} },
          data: [10, 22, 33, 48, 68, 72]
        },
        {
          name: "jquery",
          type: "line",
          stack: "总量",
          label: {
            normal: {
              show: false,
              position: "bottom"
            }
          },
          areaStyle: { normal: {} },
          data: [0, 10, 23, 37, 48, 22]
        },
        {
          name: "ionic",
          type: "line",
          stack: "总量",
          areaStyle: { normal: {} },
          data: [0, 0, 0, 20, 48, 72]
        },
        {
          name: "小程序",
          type: "line",
          stack: "总量",
          label: {
            normal: {
              show: false,
              position: "bottom"
            }
          },
          areaStyle: { normal: {} },
          data: [0, 0, 0, 0, 40, 52]
        },
        {
          name: "vue",
          type: "line",
          stack: "总量",
          label: {
            normal: {
              show: false,
              position: "bottom"
            }
          },
          areaStyle: { normal: {} },
          data: [0, 0, 0, 0, 18, 42]
        },
        {
          name: "typescript",
          type: "line",
          stack: "总量",
          label: {
            normal: {
              show: false,
              position: "bottom"
            }
          },
          areaStyle: { normal: {} },
          data: [0, 0, 0, 20, 48, 62]
        },
        {
          name: "angular",
          type: "line",
          stack: "总量",
          label: {
            normal: {
              show: false,
              position: "bottom"
            }
          },
          areaStyle: { normal: {} },
          data: [0, 0, 0, 40, 55, 70]
        },
        {
          name: "react",
          type: "line",
          stack: "总量",
          label: {
            normal: {
              show: false,
              position: "bottom"
            }
          },
          areaStyle: { normal: {} },
          data: [0, 0, 0, 20, 35, 40]
        },
        {
          name: "mysql",
          type: "line",
          stack: "总量",
          label: {
            normal: {
              show: false,
              position: "bottom"
            }
          },
          areaStyle: { normal: {} },
          data: [0, 0, 0, 15, 20, 33]
        },
        {
          name: "laravel",
          type: "line",
          stack: "总量",
          label: {
            normal: {
              show: false,
              position: "bottom"
            }
          },
          areaStyle: { normal: {} },
          data: [0, 0, 0, 10, 15, 30]
        },
        {
          name: "php",
          type: "line",
          stack: "总量",
          label: {
            normal: {
              show: false,
              position: "bottom"
            }
          },
          areaStyle: { normal: {} },
          data: [0, 0, 0, 5, 25, 33]
        }
      ]
    });
    this.chartBar.setOption({
      // title: {
      //   text: "职业技能树",
      //   subtext: "tree",
      //   top: "top",
      //   left: "left"
      // },
      tooltip: {},
      legend: {
        formatter: function(name) {
          return echarts.format.truncateText(
            name,
            80,
            "16px Microsoft Yahei",
            "…"
          );
        },
        tooltip: {
          show: true
        },
        orient: "vertical",
        selectedMode: "true",
        right: "right",
        bottom: "5%",
        data: [
          "javascript",
          " 前端框架",
          "app开发",
          "html、css",
          "后台相关",
          "模块化",
          "UI组件",
          "工具",
          "微信开发",
          "html5游戏"
        ]
      },
      animationDuration: 3000,
      animationEasingUpdate: "quinticInOut",
      series: [
        {
          name: "技能树",
          type: "graph",
          layout: "force",

          force: {
            repulsion: 200
          },
          data: [
            {
              name: "技能树",
              symbolSize: 150,
              draggable: "true",
              value: 27
            },
            {
              name: "javascript",
              value: 15,
              symbolSize: 80,
              category: "javascript",
              draggable: "true"
            },
            {
              name: "算法",
              symbolSize: 3,
              category: "javascript",
              draggable: "true",
              value: 1
            },
            {
              name: "原生js",
              symbolSize: 60,
              category: "javascript",
              draggable: "true",
              value: 1
            },
            {
              name: "es6",
              symbolSize: 15,
              category: "javascript",
              draggable: "true",
              value: 1
            },
            {
              name: " 前端框架",
              value: 60,
              symbolSize: 70,
              category: " 前端框架",
              draggable: "true"
            },
            {
              name: "angular",
              symbolSize: 45,
              category: " 前端框架",
              draggable: "true",
              value: 1
            },
            {
              name: "react",
              symbolSize: 20,
              category: " 前端框架",
              draggable: "true",
              value: 1
            },
            {
              name: "vue",
              symbolSize: 30,
              category: " 前端框架",
              draggable: "true",
              value: 1
            },
            {
              name: "app开发",
              value: 5,
              symbolSize: 70,
              category: "app开发",
              draggable: "true"
            },
            {
              name: "react-native",
              symbolSize: 30,
              category: "app开发",
              draggable: "true",
              value: 1
            },
            {
              name: "vuex",
              symbolSize: 20,
              category: "app开发",
              draggable: "true",
              value: 1
            },
            {
              name: "ionic、cordova",
              symbolSize: 45,
              category: "app开发",
              draggable: "true",
              value: 1
            },
            {
              name: "模块化",
              value: 40,
              symbolSize: 30,
              category: "模块化",
              draggable: "true"
            },
            {
              name: "gulp",
              symbolSize: 10,
              category: "模块化",
              draggable: "true",
              value: 1
            },
            {
              name: "webpack",
              symbolSize: 20,
              category: "模块化",
              draggable: "true",
              value: 1
            },
            {
              name: "seaJs",
              symbolSize: 10,
              category: "模块化",
              draggable: "true",
              value: 1
            },
            {
              name: "requireJs",
              symbolSize: 10,
              category: "模块化",
              draggable: "true",
              value: 1
            },
            {
              name: "UI组件",
              value: 30,
              symbolSize: 25,
              category: "UI组件",
              draggable: "true"
            },
            {
              name: "Material2",
              symbolSize: 5,
              category: "UI组件",
              draggable: "true",
              value: 1
            },
            {
              name: "iView",
              symbolSize: 5,
              category: "UI组件",
              draggable: "true",
              value: 1
            },
            {
              name: "Ant Design",
              symbolSize: 5,
              category: "UI组件",
              draggable: "true",
              value: 1
            },
            {
              name: "工具",
              value: 5,
              symbolSize: 30,
              category: "工具",
              draggable: "true"
            },
            {
              name: "git",
              symbolSize: 10,
              category: "工具",
              draggable: "true",
              value: 1
            },
            {
              name: "npm",
              symbolSize: 10,
              category: "工具",
              draggable: "true",
              value: 1
            },
            {
              name: "html、css",
              value: 60,
              symbolSize: 60,
              category: "html、css",
              draggable: "true"
            },
            {
              name: "css3",
              symbolSize: 30,
              category: "html、css",
              draggable: "true",
              value: 1
            },
            {
              name: "html5",
              symbolSize: 40,
              category: "html、css",
              draggable: "true",
              value: 1
            },
            {
              name: "后台相关",
              value: 20,
              symbolSize: 40,
              category: "后台相关",
              draggable: "true"
            },
            {
              name: "mysql",
              symbolSize: 10,
              category: "后台相关",
              draggable: "true",
              value: 1
            },
            {
              name: "php",
              symbolSize: 10,
              category: "后台相关",
              draggable: "true",
              value: 1
            },
            {
              name: "linux",
              symbolSize: 10,
              category: "后台相关",
              draggable: "true",
              value: 1
            },
            {
              name: "laravel",
              symbolSize: 10,
              category: "后台相关",
              draggable: "true",
              value: 1
            },
            {
              name: "微信开发",
              value: 6,
              symbolSize: 18,
              category: "微信开发",
              draggable: "true"
            },
            {
              name: "公众号页面",
              symbolSize: 10,
              category: "微信开发",
              draggable: "true",
              value: 1
            },
            {
              name: "小程序",
              symbolSize: 10,
              category: "微信开发",
              draggable: "true",
              value: 1
            },
            {
              name: "html5游戏",
              value: 15,
              symbolSize: 30,
              category: "html5游戏",
              draggable: "true"
            },
            {
              name: "egret",
              symbolSize: 20,
              category: "html5游戏",
              draggable: "true",
              value: 1
            }
          ],
          links: [
            {
              source: "技能树",
              target: "javascript"
            },
            {
              source: "javascript",
              target: "算法"
            },
            {
              source: "javascript",
              target: "原生js"
            },
            {
              source: "javascript",
              target: "es6"
            },
            {
              source: "技能树",
              target: " 前端框架"
            },
            {
              source: " 前端框架",
              target: "angular"
            },
            {
              source: " 前端框架",
              target: "react"
            },
            {
              source: " 前端框架",
              target: "vue"
            },
            {
              source: "技能树",
              target: "app开发"
            },
            {
              source: "app开发",
              target: "vuex"
            },
            {
              source: "app开发",
              target: "react-native"
            },
            {
              source: "app开发",
              target: "ionic、cordova"
            },
            {
              source: "技能树",
              target: "模块化"
            },
            {
              source: "模块化",
              target: "gulp"
            },
            {
              source: "模块化",
              target: "webpack"
            },
            {
              source: "模块化",
              target: "requireJs"
            },
            {
              source: "模块化",
              target: "seaJs"
            },
            {
              source: "技能树",
              target: "UI组件"
            },
            {
              source: "UI组件",
              target: "Material2"
            },
            {
              source: "UI组件",
              target: "iView"
            },
            {
              source: "UI组件",
              target: "Ant Design"
            },
            {
              source: "技能树",
              target: "工具"
            },
            {
              source: "工具",
              target: "git"
            },
            {
              source: "工具",
              target: "npm"
            },
            {
              source: "技能树",
              target: "html、css"
            },
            {
              source: "html、css",
              target: "css3"
            },
            {
              source: "html、css",
              target: "html5"
            },
            {
              source: "技能树",
              target: "后台相关"
            },
            {
              source: "后台相关",
              target: "mysql"
            },
            {
              source: "后台相关",
              target: "php"
            },
            {
              source: "后台相关",
              target: "laravel"
            },
            {
              source: "后台相关",
              target: "linux"
            },
            {
              source: "技能树",
              target: "微信开发"
            },
            {
              source: "微信开发",
              target: "公众号页面"
            },
            {
              source: "微信开发",
              target: "小程序"
            },
            {
              source: "技能树",
              target: "html5游戏"
            },
            {
              source: "html5游戏",
              target: "egret"
            },
            {
              source: "技能树",
              target: "法学院"
            }
          ],
          categories: [
            {
              name: "javascript"
            },
            {
              name: " 前端框架"
            },
            {
              name: "app开发"
            },
            {
              name: "模块化"
            },
            {
              name: "UI组件"
            },
            {
              name: "工具"
            },
            {
              name: "html、css"
            },
            {
              name: "后台相关"
            },
            {
              name: "微信开发"
            },
            {
              name: "html5游戏"
            },
            {}
          ],
          focusNodeAdjacency: true,
          roam: true,
          label: {
            normal: {
              show: true,
              position: "top"
            }
          },
          lineStyle: {
            normal: {
              color: "source",
              curveness: 0,
              type: "solid"
            }
          }
        }
      ]
    });
  },
  methods: {
    resizeCharts: function() {},
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
  components: {"IRow": Row, "ICol": Col}
};
</script>
<style scoped>
.content {
  flex: 1;
  max-width: 1200px;
  margin: 84px auto 0;
}
h2{
  font-size: 16px;
  color: #303e49;
  font-weight: 400;
}
.works-layout {
  /* max-width: 1200px; */
  margin-left: 20px;
}
.charts {
  /* width: 1150px; */
  width: 100%;
}
.charts-tree {
  padding: 20px;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 3px;
}
</style>
