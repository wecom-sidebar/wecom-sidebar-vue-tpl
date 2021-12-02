<template>
  <a-menu v-model="current" mode="horizontal">
    <a-menu-item key="Home">
      <router-link to="/">
        <a-icon type="mail" />首页
      </router-link>
    </a-menu-item>
    <a-menu-item key="About">
      <router-link to="/about">
        <a-icon type="appstore" />关于
      </router-link>
    </a-menu-item>
  </a-menu>
</template>

<script lang="ts">
import { Menu, Icon } from 'ant-design-vue'
import Vue from 'vue'

interface State {
  current: string[];
}

export default Vue.extend({
  name: 'Nav',
  data (): State {
    return {
      current: [this.$route.name as string]
    }
  },
  components: {
    'a-menu': Menu,
    'a-menu-item': Menu.Item,
    'a-icon': Icon
  }
})
</script>

<style scoped>

</style>
