<template>
  <a-menu v-model="current" mode="horizontal">
    <a-menu-item key="Home">
      <router-link to="/">
        <a-icon type="home" />首页
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
