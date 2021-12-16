import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { checkRedirect, initSdk } from 'wecom-sidebar-jssdk'
import config from '@/config'
import { fetchSignatures, fetchUserId } from '@/api'

import 'ant-design-vue/dist/antd.css'
import { mockSdk } from '@/mock'

// 自动 Mock
mockSdk()

Vue.config.productionTip = false

checkRedirect(config, fetchUserId) // 重定向获取 code（用户身份）
  .then(() => initSdk(config, fetchSignatures)) // 初始化 JsSdk
  .then(() => {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  })
