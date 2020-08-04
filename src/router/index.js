import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/dashboard',
    name: 'About',
    component: () => import('../views/Dashboard.vue'),
    children: [
      { path: '/dashboard/services', component: () => import('../views/Services.vue') },
      { path: '/dashboard/work', component: () => import('../views/Work.vue') },
      { path: '/dashboard/blog', component: () => import('../views/Blog.vue') },
      { path: '/dashboard/about', component: () => import('../views/About.vue') },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
