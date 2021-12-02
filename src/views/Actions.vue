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
import { Button, Input } from 'ant-design-vue'
import { Component, Vue } from 'vue-property-decorator'
import { jsSdk } from '@/main'

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

    await jsSdk.invoke('sendChatMessage', {
      msgtype: 'text',
      text: {
        content: this.msg
      }
    })
  }
}
</script>

<style scoped lang="less">
.textarea {
  width: 100%;
  margin-bottom: 8px;
}
</style>
