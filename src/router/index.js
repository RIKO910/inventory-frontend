import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayoutVue from '@/Layouts/DefaultLayout.vue';
import AuthLayoutVue from '@/Layouts/AuthLayout.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      component: DefaultLayoutVue,
      meta:{requiresAuth: true},
      children:[
        {path:'/dashboard', name: 'dashboard', component:()=>import('@/views/Dashboard.vue')}
      ]
    },
    {
      path: '/auth',
      redirect: '/login',
      component:AuthLayoutVue,
      meta:{isGuest:true},
      children: [
        {path:'/login', name: 'login', component: ()=> import('@/views/Auth/Login.vue') }
      ]
    }
  ]
})

export default router
