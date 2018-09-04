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
  store: store,
  created() {
    console.log(this.axios);
    this.axios.defaults.baseURL = 'http://blog.test/api/';
    // this.axios.defaults.baseURL = 'http://api.swallowfly.cn/api/';
    // 自定义的 axios 响应拦截器
    this.axios.interceptors.response.use((response) => {
      let token = response.headers.authorization
      if (token) { 
        // 如果 header 中存在 token，那么触发 refreshToken 方法，替换本地的 token
        this.$store.dispatch('refreshToken', token)
      }
      return response
    }, (error) => {
      switch (error.response.status) {
        // 如果响应中的 http code 为 401，那么则此用户可能 token 失效了之类的，我会触发 logout 方法，清除本地的数据并将用户重定向至登录页面
        case 401:
          return this.$store.dispatch('logout')
          break
        // 如果响应中的 http code 为 400，那么就弹出一条错误提示给用户
        case 400:
          return this.$Message.error(error.response.data.error)
          break
      }
      return Promise.reject(error)
    })
  }
})
