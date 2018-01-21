import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        //用户部分
        name: null,
        avatar: null,
        token: null,
        auth: false,
        //博客部分
        article: '',
        crumbs: [{url: '/blog/', title: '博客'}],
        blogListUrl: 'blog_list',
        isChangeTotal: 'blogList'
    }, 
    mutations:{ 
      // 用户登录成功，存储token并设置header头
      logined(state, token){
        state.auth = true
        state.token = token
        localStorage.token = token
      },
      // 用户刷新token成功，使用新的token替换掉本地的token
      refreshToken(state, token) {
        state.token = token
        localStorage.token = token
        axios.defaults.headers.common['Authorization'] = state.token
      },
      // 登录成功后拉取用户的信息存储到本地
      profile(state, data) {
        state.name = data.name
        state.avatar = data.avatar
      },
      // 用户登出，清除本地数据
      logout(state){
        state.name = null
        state.avatar = null
        state.auth = false
        state.token = null
        localStorage.removeItem('token')
      },
      setArticle (state, msg) {
        state.article = msg;
      },
      setCrumbs (state, msg) {
        state.crumbs = msg;
      },
      setBlogListUrl (state, msg) {
        state.blogListUrl = msg;
      },
      setIsChangeTotal (state, msg) {
        state.isChangeTotal = msg
      }
    },
    actions: {
      // 登录成功后保存用户信息
      logined({dispatch,commit}, token) {
        return new Promise((resolve, reject) => {
          commit('logined', token)
          axios.defaults.headers.common['Authorization'] = token
          dispatch('profile').then(() => {
            resolve()
          }).catch(() => {
            reject()
          })
        })
      },
      // 登录成功后使用 token 拉取用户的信息
      profile({commit}) {
        return new Promise((resolve, reject) => {
          axios.get('profile', {}).then(response => {
            if (response.status == 200) {
              commit('profile', response.data)
              resolve()
            } else {
              reject()
            }
          })
        })
      },
      // 用户登出，清除本地数据并重定向至登录页面
      logout({commit}) {
        return new Promise((resolve, reject) => {
          commit('logout')
          axios.post('logout', {}).then(response => {
            Vue.$router.push({name: 'login'})
          })
        })
      },
      // 将刷新的 token 保存至本地
      refreshToken({commit}, token) {
        return new Promise((resolve, reject) => {
          commit('refreshToken', token)
        })
      }
    }
})
export default store;