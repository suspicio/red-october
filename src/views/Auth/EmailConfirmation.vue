<template>
  <div class="modal__wrapper forgot-pass">
    <div class="modal__content">
      <div class="close" @click="disable">
      </div>
      <h1>Ваш email подтвержден!</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmailConfirmation',

  methods: {
    disable () {
      this.isError = false
      this.$emit('activate')
    }
  }
}
</script>

<style scoped lang="scss">
.modal__content {
  h1 {
    text-transform: none !important;
    font-family: 'Zen Kaku Gothic New' !important;
    font-weight: normal !important;
  }
}
</style>
