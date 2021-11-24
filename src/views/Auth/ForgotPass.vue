<template>
  <div class="modal__wrapper">
    <div class="modal__content">
      <div class="close" @click="disable">
      </div>
      <h1>ЗАБЫЛИ КОД?</h1>
      <form @submit.prevent="onSubmit">
        <TheInput
          :text="'Телефон (при регистрации)'"
          v-model="phone"
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
import { mapActions } from 'vuex'

export default {
  name: 'ForgotPass',

  components: {
    TheButton,
    TheInput
  },

  data () {
    return {
      phone: ''
    }
  },

  methods: {
    ...mapActions(['askForSMSCode']),

    disable () {
      this.$emit('activateForgot')
    },

    onSubmit () {
      this.askForSMSCode(this.phone)
        .then(res => {
          if (res === true) {
            this.disable()
          }
        })
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
