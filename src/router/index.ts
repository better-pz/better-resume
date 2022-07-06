import {createRouter,createWebHashHistory,createWebHistory,RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {  
        path:'/', 
        name:'index',
        component: () => import('@/views/home.vue')
    },

    
]

const router =createRouter({
    // history: createWebHistory(import.meta.env.BASE_URL),
    history: createWebHashHistory(),
    routes
  });


  export default router;