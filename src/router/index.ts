import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/wyx'
    },
    {
      path: '/wyx',
      name: 'wyx-main',
      component: () => import('../views/WyxMainView.vue')
    },
    {
      path: '/wyx/peach-blossom-spring',
      name: 'peach-blossom-spring',
      component: () => import('../views/PeachBlossomSpringView.vue')
    },
    {
      path: '/check',
      name: 'password-check',
      component: () => import('../PasswordCheck.vue')
    },
    {
      path: '/91',
      name: 'blog-list',
      component: () => import('../views/BlogListView.vue')
    }
  ]
})

export default router
