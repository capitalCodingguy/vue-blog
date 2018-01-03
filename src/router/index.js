import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/page/Home'
import Index from '@/page/Index'
import BlogContent from '@/components/BlogContent'
// import WorksContent from '@/components/WorksContent'
// import ResumeContent from '@/components/ResumeContent'
// import MeContent from '@/components/MeContent'
import ArticleList from '@/components/ArticleList'
// import Article from '@/components/Article'
const Home = resolve => require(['../page/Home.vue'], resolve);
// const BlogContent = resolve => require(['../components/BlogContent.vue'], resolve);
const WorksContent = resolve => require(['../components/WorksContent.vue'], resolve);
const ResumeContent = resolve => require(['../components/ResumeContent.vue'], resolve);
const MeContent = resolve => require(['../components/MeContent.vue'], resolve);
const LoginContent = resolve => require(['../components/LoginContent.vue'], resolve);
const Article = resolve => require(['../components/Article.vue'], resolve);
const ArticleEdit = resolve => require(['../components/ArticleEdit.vue'], resolve);
Vue.use(Router)

export default new Router({
  routes: [
    { 
      path: '/home',
      name: 'Home', 
      component: Home,
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
            },
            {
              name: 'articleEdit',
              path: '/blog/articleEdit/',
              component: ArticleEdit,
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
        },
        {
          name: 'login',
          path: '/login/',
          component: LoginContent,
        }
      ]
    }
  ]
})
