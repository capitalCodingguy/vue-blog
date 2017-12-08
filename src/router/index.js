import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Index from '@/page/Index'
import Content from '@/components/Content'
import ArticleList from '@/components/ArticleList'
import Article from '@/components/Article'

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
      component: Index,
      children: [
        {
          path: '/blog/',
          component: Content,
          children: [
            {
              name: 'articlelist',
              path: '/blog/articlelist/',
              component: ArticleList
            },
            {
              name: 'article',
              path: '/blog/article/',
              component: Article,
            }
          ]
        }
      ]
    }
  ]
})
