<template>
  <div class="actions">
    <h2>功能</h2>

    <a-textarea class="textarea" v-model="msg" />

    <a-button class="sendBtn" block type="primary" @click="sendMsg">
      发送
    </a-button>
  </div>
</template>

<script lang="ts">
import { Button, Input, message } from 'ant-design-vue'
import { Component, Vue } from 'vue-property-decorator'
import { invoke } from 'wecom-sidebar-jssdk'

@Component({
  name: 'Actions',
  components: {
    'a-button': Button,
    'a-input': Input,
    'a-textarea': Input.TextArea
  }
})
export default class Actions extends Vue {
  msg = '';

  async sendMsg () {
    if (!this.msg) alert('消息不能为空')

    try {
      await invoke('sendChatMessage', {
        msgtype: 'text',
        enterChat: true,
        text: {
          content: this.msg
        }
      })
    } catch (e) {
      message.error(e.message)
    }
  }
}
</script>

<style scoped lang="less">
.textarea {
  width: 100%;
  margin-bottom: 8px;
}
</style>
