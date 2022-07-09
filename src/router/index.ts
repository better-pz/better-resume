import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
      },
      {
        path: '/editor',
        name: 'editor',
        component: () => import('@/views/editor/index.vue'),
      },
      {
        path: '/template',
        name: 'template',
        component: () => import('@/views/template/index.vue'),
      },
      // {
      //   path: '/component',
      //   name: 'component',
      //   component: () => import('@/views/component/index.vue'),
      // },
      {
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/contact/index.vue'),
      },
      {
        path: '/help',
        name: 'help',
        component: () => import('@/views/help/index.vue'),
      },
    ],
  },

  {
    path: '/404',
    name: 'notFind',
    component: () => import('@/views/error/404.vue'),
  },
]

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes,
})

export default router
