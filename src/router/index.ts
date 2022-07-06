import {createRouter,createWebHashHistory,createWebHistory,RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {  
        path:'/', 
        name:'index',
        component: () => import('../views/MainFrame.vue')
    },

    
]

const router =createRouter({
    // history: createWebHistory(import.meta.env.BASE_URL),
    history: createWebHashHistory(),
    routes
  });


  export default router;