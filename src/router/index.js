import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Index from '@/page/Index'
//import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'Blog',
      component: Index
    }
  ]
})
