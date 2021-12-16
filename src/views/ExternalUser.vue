<template>
  <div>
    <h2>外部联系人</h2>
    <div v-if="externalUser">
      <img width="48" :src="externalUser.avatar" alt="头像"/>
      <p>ID: {{ externalUser.external_userid }}</p>
      <p>姓名: {{ externalUser.name }}@{{ externalUser.corp_name }}</p>
      <p>姓别: {{ genderMap[externalUser.gender] }}</p>
      <a-button type="primary" size="small" @click="openUserProfile">
        查看详情
      </a-button>
    </div>
    <p v-else>找不到外部联系人</p>
  </div>
</template>

<script lang="ts">
import { ExternalUserResponse } from '@/api/types'
import { Component, Vue } from 'vue-property-decorator'
import { Button, message } from 'ant-design-vue'
import { fetchExternalUser } from '@/api'
import { invoke } from 'wecom-sidebar-jssdk'

@Component({
  name: 'ExternalUser',
  components: {
    'a-button': Button
  }
})
export default class ExternalUser extends Vue {
  externalUser: ExternalUserResponse['external_contact'] | null = null
  genderMap = ['未定义', '男', '女']

  async getExternalUserInfo () {
    try {
      const res = await invoke('getCurExternalContact', {})

      if (!res || !res.userId) return

      console.log('外部联系人 ID', res.userId)

      this.externalUser = await fetchExternalUser(res.userId)
    } catch (e) {
      message.error(e.message)
    }
  }

  async openUserProfile () {
    if (!this.externalUser) {
      return message.warn('找不到外部联系人')
    }

    try {
      await invoke('openUserProfile', {
        userid: this.externalUser.external_userid,
        type: this.externalUser.type
      })
    } catch (e) {
      message.error(e.message)
    }
  }

  async mounted () {
    await this.getExternalUserInfo()
  }
}
</script>

<style scoped></style>
