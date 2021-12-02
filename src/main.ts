import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { checkRedirect, createJsSdk, initSdk } from '@/lib'
import { invokeResMock, mockUserId, wxResMock } from '@/mock'
import config from '@/_config'
import { fetchSignatures, fetchUserId } from '@/api'

import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false

export const jsSdk = createJsSdk(wxResMock, invokeResMock)

checkRedirect(config, fetchUserId, mockUserId) // 重定向获取 code（用户身份）
  .then(() => initSdk(jsSdk, config, fetchSignatures)) // 初始化 JsSdk
  .then(() => {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  })
