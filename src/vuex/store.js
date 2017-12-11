import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        article: '',
        Crumbs: [{url: '/blog/', title: '博客'}],
    },
    mutations:{
      setArticle (state, msg) {
        state.article = msg;
      },
      setCrumbs (state, msg) {
        state.Crumbs = msg;
      }
    }
})
export default store;