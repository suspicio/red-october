<template>
  <div class="modal__wrapper">
    <div class="modal__content">
      <div class="close" @click="disable">
      </div>
      <h1>Регистрация</h1>
      <form @submit.prevent="onRegister">
        <TheInput
          v-model="name"
          :text="'Имя'"
        ></TheInput>
        <TheInput
          v-model="lastName"
          :text="'Фамилия'"
        ></TheInput>
        <TheInput
          v-model="phone"
          :text="'8 (000) 000-00-00'"
        ></TheInput>
        <TheInput
          v-model="email"
          :text="'E-mail'"
        ></TheInput>
        <div class="form__buttons">
          <TheButton
            :bg-color="'#F8E577'"
            :is-rounded="true"
            :text="'ОТПРАВИТЬ'"
            class="TheButton"
          ></TheButton>
          <a @click="activateLogIn">Есть личный кабинет?</a>
        </div>
        <div class="confidential__policy">
          <p>Нажимая «Отправить», вы соглашаетесь </p>
          <p>с <a href="#">Политикой обработки персональных данных</a></p>
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
  name: 'Registration',

  components: {
    TheButton,
    TheInput
  },

  data () {
    return {
      name: '',
      lastName: '',
      phone: '',
      email: ''
    }
  },

  computed: {
    validation () {
      const validated = {}

      validated.name = !!this.name
      validated.lastName = !!this.lastName
      validated.email = (this.email && (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g).test(this.email)) || false
      validated.phone = this.phone?.length === 10 && !isNaN(this.phone)

      return validated
    }
  },

  methods: {
    ...mapActions(['register']),

    disable () {
      this.$emit('activate')
    },
    activateLogIn () {
      this.$emit('activate')
      this.$emit('activateLogIn')
    },

    onRegister () {
      if (Object.values(this.validation).some(v => !v)) {
        return
      }

      this.register({
        firstName: this.name,
        lastName: this.lastName,
        phone: this.phone,
        email: this.email
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
