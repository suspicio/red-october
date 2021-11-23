<template>
  <div class="modal__wrapper">
    <div class="modal__content">
      <div class="close" @click="disable">
      </div>
      <h1>ЗАБЫЛИ КОД?</h1>
      <form @submit.prevent>
        <TheInput
          :text="'Телефон (при регистрации)'"
        ></TheInput>
        <div class="form__buttons left__buttons">
          <TheButton
            :bg-color="'#F8E577'"
            :is-rounded="true"
            :text="'ОТПРАВИТЬ'"
            class="TheButton"
          ></TheButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import TheInput from '@/components/TheInput'
import TheButton from '@/components/TheButton'

export default {
  name: 'ForgotPass',
  components: {
    TheButton,
    TheInput
  },
  methods: {
    disable () {
      this.$emit('activateForgot')
    }
  }
}
</script>

<style lang="scss" scoped>
.left__buttons {
  justify-content: left !important;
  align-items: start !important;
}
</style>
