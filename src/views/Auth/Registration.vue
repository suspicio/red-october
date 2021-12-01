<template>
  <div class="modal__wrapper">
    <div class="modal__content">
      <div class="close" @click="disable">
      </div>
      <h1>Регистрация</h1>
      <form @submit.prevent="onRegister">
        <TheInput
          v-model="name"
          @input="(e) => {this.name = e}"
          :text="'Имя'"
        ></TheInput>
        <TheInput
          v-model="lastName"
          @input="(e) => {this.lastName = e}"
          :text="'Фамилия'"
        ></TheInput>
        <TheInput
          v-model="phone"
          @input="(e) => {this.phone = e}"
          :is-phone="true"
          :text="'8 (000) 000-00-00'"
        ></TheInput>
        <TheInput
          v-model="email"
          @input="(e) => {this.email = e}"
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
          <p>с <a href="https://magnit.krasniy-oktyabr.ru/api/policy.pdf" target="_blank" download>Политикой обработки персональных данных</a></p>
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
      validated.email = !!this.email && ((/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/).test(this.email) || false)
      validated.phone = this.phone?.replace('+7', '').replaceAll(' ', '')
        .replaceAll('-', '').replace('(', '')
        .replace(')', '').substr(0, 10).length === 10

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
        let error = 'Какое-то поле пустое, или в неправильном формате'
        if (this.validation.name === false) {
          error = 'Поле имя не заполнено'
        } else if (this.validation.lastName === false) {
          error = 'Поле фамилия не заполнено'
        } else if (this.validation.email === false) {
          error = 'Поле почта не заполнено или заполнено в неправильном формате'
        } else if (this.validation.phone === false) {
          error = 'Поле тел. номер не заполнено или заполнено неправильно'
        }
        this.$toasted.error(error)
      } else {
        this.register({
          firstName: this.name,
          lastName: this.lastName,
          phone: this.phone?.replace('+7', '').replaceAll(' ', '')
            .replaceAll('-', '').replace('(', '')
            .replace(')', '').substr(0, 10),
          email: this.email
        })
        this.activateLogIn()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
