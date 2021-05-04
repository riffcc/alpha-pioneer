import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import FeaturedView from '../views/FeaturedView.vue'

Vue.use(VueRouter)



const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Featured',
    component: FeaturedView
  },
  {
    path: '/torrents/:category',
    name: 'Category',
    component: () => import(/* webpackChunkName: "category" */'../views/TorrentsView.vue')
    
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
