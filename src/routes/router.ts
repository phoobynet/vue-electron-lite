import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/routes/home/Home.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/',
    component: Home
  }]
})
