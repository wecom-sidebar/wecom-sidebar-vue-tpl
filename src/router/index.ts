import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Action from '../views/Actions.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/actions',
    name: 'Action',
    component: Action
  }
]

const router = new VueRouter({
  routes
})

export default router
