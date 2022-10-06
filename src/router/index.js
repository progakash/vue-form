import { createRouter, createWebHistory } from 'vue-router'
import pages from '../pages'

const routes = [
  {
    path: '/register',
    name: 'register',
    component: pages['RegisterApp']
  },
  {
    path: '/simple',
    name: 'simple',
    component: pages['SimpleFormApp']
  },
  {
    path: '/switch',
    name: 'switch',
    component: pages['SwitchPageApp']
  },
  {
    path: '/input',
    name: 'input',
    component: pages['InputPageApp']
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
