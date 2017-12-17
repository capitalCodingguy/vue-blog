import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Index from '@/page/Index'
import BlogContent from '@/components/BlogContent'
import WorksContent from '@/components/WorksContent'
import ResumeContent from '@/components/ResumeContent'
import MeContent from '@/components/MeContent'
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
      redirect: '/blog/',
      children: [
        {
          path: '/blog/',
          component: BlogContent,
          redirect: '/blog/articlelist/',
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
        },
        {
          name: 'works',
          path: '/works/',
          component: WorksContent,
        },
        {
          name: 'resume',
          path: '/resume/',
          component: ResumeContent,
        },
        {
          name: 'me',
          path: '/me/',
          component: MeContent,
        }
      ]
    }
  ]
})
