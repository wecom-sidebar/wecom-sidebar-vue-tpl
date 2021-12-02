import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createJsSdk } from '@/lib'
import { invokeResMock, wxResMock } from '@/mock'

Vue.config.productionTip = false

export const jsSdk = createJsSdk(wxResMock, invokeResMock)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
