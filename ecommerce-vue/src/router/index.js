import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../Views/HomeView.vue'
import AboutView from '../Views/AboutView.vue'
import CartView from '../Views/CartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cart',
      name: 'cart',
  
      component: CartView
    },
    {
      path: '/about-view',
      name: 'about',
  
      component: AboutView
    },

  ]
})

export default router