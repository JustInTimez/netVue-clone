import { createRouter, createWebHashHistory } from 'vue-router'
// import LoginView from '../views/LoginView.vue'


const router = createRouter({
  history: createWebHashHistory(),
  /** Basic routing structure  */
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/my-list',
      name: 'My List',
      component: () => import('../views/WishlistView.vue')
    }
  ]
})

export default router
