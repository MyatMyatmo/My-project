import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import About from '../views/About.vue'
import Job from '../views/Job/Job.vue'
import JobDetail from '../views/Job/JobDetail.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // when your pj is large, use lazy loading routes
  {
    path: '/about',
    name: 'About',
    component: ()=>{
      return import ('../views/About.vue')
    }
  },
  {
    path: '/job',
    name: 'Job',
    component: Job
  },
  {
    path: '/jobDetail/:id',
    name: 'JobDetail',
    component: JobDetail,
    props: true  //when dyanmic route create let make props *true*
  },
  //redirect
  {
    path: '/all-jobs',
    redirect: '/job'
  },
  //catch
  {
    path: '/:catch(.*)',  // route not exist (use with regular expression)
    name: 'NotFound',
    component: NotFound
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
