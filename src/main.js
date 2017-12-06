import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'

//引入首页粒子动画js
import particles from 'particles.js'

import iView from 'iview'
import 'iview/dist/styles/iview.css'
import '../my-theme/index.less'

Vue.config.productionTip = false

Vue.use(iView)
Vue.use(Vuex)
Vue.use(particles)
Vue.use(VueAxios, axios)

const vuex_store = new Vuex.Store({
  state: {
    totalmess: 0,
    title: '登录'
  },
  mutations:{
    
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store: vuex_store
})
