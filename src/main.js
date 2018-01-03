import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import store from './vuex/store'

//引入首页粒子动画js
import particles from 'particles.js'

import 'iview/dist/styles/iview.css'
import '../my-theme/index.less'

import MyPlugin from './assets/global/MyPlugin'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(particles)

Vue.use(VueAxios, axios)

//全局变量
Vue.use(MyPlugin)

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store: store
})
