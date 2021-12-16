<template>
  <div>
    <h2>外部联系群</h2>
    <div v-if="externalChat">
      <p>群名: {externalChat.name}</p>
      <p>群主: {externalChat.owner}</p>
      <p>群公告: {externalChat.notice}</p>
      <p>群成员: </p>
      <ul>
        <li v-for="member in externalChat.member_list" :key="member.userid">
          <a @click="openUserProfile(member.userid, member.type)">
          {{member.userid}}
          </a>
        </li>
      </ul>
    </div>
    <p v-else>找不到外部联系群</p>
  </div>
</template>

<script lang="ts">
import { ExternalChatResponse } from '@/api/types'
import { Component, Vue } from 'vue-property-decorator'
import { fetchExternalChat } from '@/api'
import { invoke } from 'wecom-sidebar-jssdk'
import { message } from 'ant-design-vue'

@Component({
  name: 'ExternalChat'
})
export default class ExternalChat extends Vue {
  externalChat: ExternalChatResponse['group_chat'] | null = null;

  async openUserProfile (userId: string, type: 1 | 2) {
    try {
      await invoke('openUserProfile', {
        userid: userId,
        type
      })
    } catch (e) {
      message.error(e.message)
    }
  }

  async getExternalChatInfo () {
    try {
      const res = await invoke('getCurExternalChat', {})

      if (!res || !res.chatId) return

      console.log('外部联系群 ID', res.chatId)

      this.externalChat = await fetchExternalChat(res.chatId || '')
    } catch (e) {
      message.error(e.message)
    }
  }

  async mounted () {
    await this.getExternalChatInfo()
  }
}
</script>

<style scoped></style>
