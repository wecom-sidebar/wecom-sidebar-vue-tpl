<template>
  <a-menu v-model="current" mode="horizontal">
    <a-menu-item key="Home">
      <router-link to="/">
        <a-icon type="home" />首页
      </router-link>
    </a-menu-item>
    <a-menu-item key="Actions">
      <router-link to="/actions">
        <a-icon type="setting" />操作
      </router-link>
    </a-menu-item>
    <a-menu-item key="人">
      <router-link to="/external-user">
        <a-icon type="user" />人
      </router-link>
    </a-menu-item>
    <a-menu-item key="群">
      <router-link to="/external-chat">
        <a-icon type="usergroup-add" />群
      </router-link>
    </a-menu-item>
  </a-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Icon, Menu } from 'ant-design-vue'

@Component({
  name: 'Nav',
  components: {
    'a-menu': Menu,
    'a-menu-item': Menu.Item,
    'a-icon': Icon
  }
})
export default class Nav extends Vue {
  current: string[] = [this.$route.name as string]
}
</script>

<style scoped>

</style>
