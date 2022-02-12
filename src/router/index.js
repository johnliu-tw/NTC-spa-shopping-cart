import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Product from '../views/Product.vue'
import Checkout from '../views/Checkout.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/products/:productId',
    name: 'Product',
    component: Product
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
