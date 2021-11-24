<template>
  <router-view></router-view>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',

  async created () {
    await this.isAuth()
      .then(res => {
        if (!res) {
          // eslint-disable-next-line no-unused-expressions
          this.$router.push('/')?.catch(() => {})
        }
      })
  },

  methods: {
    ...mapActions(['isAuth'])
  }
}
</script>
