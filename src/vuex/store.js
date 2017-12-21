import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        article: '',
        crumbs: [{url: '/blog/', title: '博客'}],
        blogListUrl: 'blog_list',
    },
    mutations:{
      setArticle (state, msg) {
        state.article = msg;
      },
      setCrumbs (state, msg) {
        console.log(msg);
        state.crumbs = msg;
      },
      setBlogListUrl (state, msg) {
        state.blogListUrl = msg;
      }
    }
})
export default store;