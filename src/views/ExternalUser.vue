<template>
  <div>
    <h2>外部联系人</h2>
    <div v-if="externalUser">
      <img width="48" :src="externalUser.avatar" alt="头像"/>
      <p>ID: {{ externalUser.external_userid }}</p>
      <p>姓名: {{ externalUser.name }}@{{ externalUser.corp_name }}</p>
      <p>姓别: {{ genderMap[externalUser.gender] }}</p>
      <a-button type="primary" size="small" onClick={openUserProfile}>
        查看详情
      </a-button>
    </div>
    <p v-else>找不到外部联系人</p>
  </div>
</template>

<script lang="ts">
import { ExternalUserResponse } from '@/api/types'
import { Component, Vue } from 'vue-property-decorator'
import { Button } from 'ant-design-vue'

@Component({
  name: 'ExternalUser',
  components: {
    'a-button': Button
  }
})
export default class ExternalUser extends Vue {
  externalUser: ExternalUserResponse['external_contact'] | null = null
  genderMap = ['未定义', '男', '女']
}
</script>

<style scoped></style>
