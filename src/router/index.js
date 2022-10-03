import { createRouter, createWebHistory } from 'vue-router'
import RegisterApp from '../pages/RegisterApp'
import SimpleFormApp from '../pages/SimpleFormApp'
import FileUploadApp from '../pages/FileUploadApp'
import MultilevelFormApp from '../pages/MultilevelFormApp'

const routes = [
  {
    path: '/register',
    name: 'register',
    component: RegisterApp
  },
  {
    path: '/simple',
    name: 'simple',
    component: SimpleFormApp
  },
  {
    path: '/file',
    name: 'file',
    component: FileUploadApp
  },
  {
    path: '/multilevel',
    name: 'multilevel',
    component: MultilevelFormApp
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
