import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  /** Basic routing structure  */
  routes: [
    {
      path: '/netVue-clone/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/netVue-clone/home',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/netVue-clone/my-list',
      name: 'My List',
      component: () => import('../views/WishlistView.vue')
    }
  ]
})

export default router
