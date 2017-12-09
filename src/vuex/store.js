import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        article: ''
    },
    mutations:{
      setArticle (state, msg) {
        state.article = msg;
      }
    }
})
export default store;