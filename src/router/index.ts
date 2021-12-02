import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Action from '../views/Actions.vue'
import ExternalUser from '@/views/ExternalUser.vue'
import ExternalChat from '@/views/ExternalChat.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/actions',
    name: 'Actions',
    component: Action
  },
  {
    path: '/external-user',
    name: 'ExternalUser',
    component: ExternalUser
  },
  {
    path: '/external-chat',
    name: 'ExternalChat',
    component: ExternalChat
  }
]

const router = new VueRouter({
  routes
})

export default router
