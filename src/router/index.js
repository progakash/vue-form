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
    path: '/file',
    name: 'file',
    component: pages['FileUploadApp']
  },
  {
    path: '/multilevel',
    name: 'multilevel',
    component:pages[' MultilevelFormApp']
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
