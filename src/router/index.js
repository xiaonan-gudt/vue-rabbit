import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/layout/index.vue'
import Home from '@/views/home/index.vue'
import Login from '@/views/login/index.vue'
import Category from '@/views/category/index.vue'
import SubCategory from '@/views/subCategory/index.vue'
import Detail from "@/views/detail/index.vue"
import CartList from "@/views/cartList/index.vue"
import CheckOut from '@/views/checkout/index.vue'
import Pay from '@/views/pay/index.vue'
import PayBack from '@/views/pay/components/payCallBack.vue'
import Member from '@/views/member/index.vue'
import MemberInfo from '@/views/member/components/UserInfo.vue'
import MemberOrder from '@/views/member/components/UserOrder.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component:Layout,
      redirect:'/home',
      children:[
        {
          path:'/home',
          component:Home
        },
        {
          path:'/category/:id',
          component:Category,
        },
        {
          path:'/category/sub/:id',
          component:SubCategory,
        },
        {
          path:'/detail/:id',
          component:Detail,
        },
        {
          path:'/cartlist',
          component:CartList
        },
        {
          path:'/checkout',
          component:CheckOut
        },
        {
          path:'/pay',
          component:Pay
        },
        {
          path: 'paycallback', // 注意路径，必须是paycallback
          component: PayBack
        },
        {
          path: '/member',
          component: Member,
          children:[
            {
              path:'',
              component:MemberInfo
            },
            {
              path:'/member/order',
              component:MemberOrder
            }
          ]
      }
      ]
    },
    {
      path:'/login',
      component:Login
    },
  ],
  scrollBehavior(){
    return {
     top:0
    }
  }
})

export default router
