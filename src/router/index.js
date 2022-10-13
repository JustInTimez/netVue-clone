import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import WishlistView from '../views/WishlistView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  /** Basic routing structure  */
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/home',
      name: 'Home',
      component: WishlistView
    },
    {
      path: '/my-list',
      name: 'My List',
      component: WishlistView
    }
  ]
})

export default router
