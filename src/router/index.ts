import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory("./"),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/page1',
      name: 'page1',
      component: () => import('@/views/Page1.vue')
    },
    {
      path: '/page2',
      name: 'page2',
      component: () => import('@/views/Page2.vue')
    }
    ,{
      path: '/page3',
      name: 'page3',
      component: () => import('@/views/Page3.vue')
    }
    //addrouter
  ]
})

export default router
