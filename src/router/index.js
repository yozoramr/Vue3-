import { createRouter, createWebHistory } from 'vue-router'
import { useCounterStore } from '@/stores/modules/user'

const router = createRouter({
  // vite 中的环境变量 import.meta.env.BASE_URL
  // vite 中base属性
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/article/select'
    },
    {
      path: '/article',
      component: () => import('@/views/layout/LayoutContainer.vue'),
      children: [
        {
          path: '/article/select',
          component: () => import('@/views/article/ArticleSelect.vue')
        },
        {
          path: '/article/manage',
          component: () => import('@/views/article/ArticleManage.vue')
        },
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/login/LoginPage.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }

  ]
})

router.beforeEach((to) => {
  const userStore = useCounterStore()
  if (!userStore.token && to.path !== '/login'){
    return '/login'
  } 
  return true
})

export default router
