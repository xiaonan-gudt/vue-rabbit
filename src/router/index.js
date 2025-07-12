import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/layout/index.vue'
import Home from '@/views/home/index.vue'
import Login from '@/views/login/index.vue'
import Category from '@/views/category/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component:Layout,
      name:'layout',
      redirect:'/home',
      children:[
        {
          path:'/home',
          name:'home',
          component:Home
        },
        {
          path:'/category/:id',
          name:'category',
          component:Category,
        }
      ]
    },
    {
      path:'/login',
      name:'login',
      component:Login
    }
  ],
})

export default router
