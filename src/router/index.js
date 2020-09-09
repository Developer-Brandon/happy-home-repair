import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Products from '@/views/Products.vue'
import About from '@/views/About.vue'
import Notice from '@/views/Notice.vue'
import Estimate from '@/views/Estimate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Products',
    name: 'Products',
    component: Products,
  },
  {
    path: '/About',
    name: 'About',
    component: About,
  },
  {
    path: '/Notice',
    name: 'Notice',
    component: Notice,
  },
  {
    path: '/Estimate',
    name: 'Estimate',
    component: Estimate,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
