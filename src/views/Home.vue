<template>
  <div class="home">
    <h1 v-if="user">欢迎回来，{{ user.name }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { fetchUser } from '@/api'
import { UserResponse } from '@/api/types'
import Cookies from 'js-cookie'

@Component({})
export default class Home extends Vue {
  user: UserResponse | null = null

  async mounted () {
    const userId = Cookies.get('userId')
    this.user = await fetchUser(userId || '')
  }
}
</script>
