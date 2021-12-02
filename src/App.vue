<template>
  <div id="app">
    <sidebar-nav></sidebar-nav>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Nav from '@/components/Nav.vue'

export default {
  name: 'App',
  components: {
    'sidebar-nav': Nav
  }
}
</script>

<style lang="less"></style>
