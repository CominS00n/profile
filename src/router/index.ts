import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/ConvertDate.vue')
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('../views/ExperienceView.vue')
    },
    {
      path: '/projects/:value',
      name: 'projects',
      component: () => import('@/views/ProjectsView.vue')
    }
  ]
})

export default router
