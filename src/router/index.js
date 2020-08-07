import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'About',
    component: () => import('../views/Dashboard.vue'),
    children: [
      { path: '/', component: () => import('../views/Home.vue') },
      { path: '/services', component: () => import('../views/Services.vue') },
      { path: '/work', component: () => import('../views/Work.vue') },
      { path: '/blog', component: () => import('../views/Blog.vue') },
      { path: '/about', component: () => import('../views/About.vue') },
      { path: '/work/project', component: () => import('../views/Project.vue') },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
