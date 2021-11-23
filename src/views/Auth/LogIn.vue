<template>
  <div class="modal__wrapper">
    <div class="modal__content">
      <div class="close" @click="disable">
      </div>
      <h1>Вход в личный кабинет</h1>
      <form @submit.prevent>
        <TheInput
          v-model="phone"
          :text="'Телефон'"
        ></TheInput>
        <TheInput
          v-model="password"
          :text="'Код из SMS (при регистрации)'"
        ></TheInput>
        <div class="form__buttons">
          <TheButton
            :bg-color="'#F8E577'"
            :is-rounded="true"
            :text="'ВОЙТИ'"
            class="TheButton"
            :event="onLogin"
          ></TheButton>
          <a @click="activateForgot">Запросить код повторно</a>
        </div>
        <div class="confidential__policy">
          <p>Нажимая «Войти», вы соглашаетесь </p>
          <p>с <a href="#">Политикой обработки персональных данных</a></p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import TheInput from '@/components/TheInput'
import TheButton from '@/components/TheButton'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'LogIn',
  components: {
    TheButton,
    TheInput
  },
  computed: {
    validation () {
      const validated = {}

      validated.phone = this.phone?.length === 10 && !isNaN(this.phone)

      return validated
    }
  },
  data () {
    return {
      phone: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['signin']),
    ...mapState(['user']),

    disable () {
      this.$emit('activateLogIn')
    },

    activateForgot () {
      this.$emit('activateForgot')
      this.$emit('activateLogIn')
    },

    onLogin () {
      if (Object.values(this.validation).some(v => !v)) {
        return
      }

      this.signin({
        phone: this.phone,
        password: this.password
      })

      console.log(this.user)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
