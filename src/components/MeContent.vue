<template>
  <div class="content">
    <Row class="works-layout" type="flex" justify="center">
      <Col span="24" style="margin-top: 40px;padding: 25px;background-color: #fff;">
        <h2>个人简介</h2>
        <div class="charts">
          <div id="chartColumn" style="width:800px;height:500px;display: flex;align-items:center;justify-content:center;"></div>
          <div id="chartBar" style="width:1200px; height:800px;"></div>
          <div id="chartLine" style="width:100%; height:400px;"></div>
          <div id="chartPie" style="width:100%; height:400px;"></div>
        </div>
      </Col>
    </Row>
  </div>
</template>
<script>
import echarts from "echarts";
// import option from './assets/data/chartsSkill.json'
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
    this.chartPie = echarts.init(document.getElementById("chartPie"));

    this.chartColumn.setOption({
      title: { text: "职业履历表" },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    });
    this.chartBar.setOption({
      // backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [
      //   {
      //     offset: 0,
      //     color: "#fff"
      //   },
      //   {
      //     offset: 1,
      //     color: "#fff"
      //   }
      // ]),
      title: {
        text: "职业技能树",
        subtext: "tree",
        top: "top",
        left: "left"
      },
      tooltip: {},
      legend: [
        {
          formatter: function(name) {
            return echarts.format.truncateText(
              name,
              40,
              "16px Microsoft Yahei",
              "…"
            );
          },
          tooltip: {
            show: true
          },
          selectedMode: "false",
          bottom: 20,
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
        }
      ],
      toolbox: {
        show: false,
        feature: {
          dataView: {
            show: true,
            readOnly: true
          },
          restore: {
            show: true
          },
          saveAsImage: {
            show: true
          }
        }
      },
      animationDuration: 3000,
      animationEasingUpdate: "quinticInOut",
      series: [
        {
          name: "技能树",
          type: "graph",
          layout: "force",

          force: {
            repulsion: 350
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
    resizeCharts: function() {}
  },
  computed: {},
  components: {}
};
</script>
<style scoped>
.content {
  flex: 1;
  max-width: 1200px;
  margin: 80px auto 0;
}
.works-layout {
  max-width: 1200px;
  margin-left: 20px;
}
.charts {
  width: 100%;
}
</style>
