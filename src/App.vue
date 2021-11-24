<template>
  <router-view></router-view>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',

  async created () {
    await this.isAuth()
  },

  methods: {
    ...mapActions(['isAuth'])
  }
}
</script>
