<template>
  <div class="modal__wrapper">
    <div class="modal__content">
      <div class="close" @click="disable">
      </div>
      <h1>Вход в личный кабинет</h1>
      <form @submit.prevent>
        <TheInput
          v-model="phone"
          @input="(e) => {this.phone = e}"
          :is-phone="true"
          :text="'Телефон'"
        ></TheInput>
        <TheInput
          v-model="password"
          @input="(e) => {this.password = e}"
          :text="'Код из SMS (при регистрации)'"
          type="password"
        ></TheInput>
        <div class="form__buttons">
          <TheButton
            :bg-color="'#F8E577'"
            :event="onLogin"
            :is-rounded="true"
            :text="'ВОЙТИ'"
            class="TheButton"
          ></TheButton>
          <a @click="activateForgot">Запросить код повторно</a>
        </div>
        <div class="confidential__policy">
          <p>Нажимая «Войти», вы соглашаетесь </p>
          <p>с <a href="#">Политикой обработки персональных данных</a></p>
        </div>
      </form>
    </div>
    <div v-if="isNumber" class="additional__info">Код был отправлен на <br v-if="isMobile !== false"/>{{ number }}</div>
  </div>
</template>

<script>
import TheInput from '@/components/TheInput'
import TheButton from '@/components/TheButton'
import { mapActions } from 'vuex'
import isMobileDevice from '@/utils/mobileChecker'

export default {
  name: 'LogIn',
  props: {
    number: {
      type: String,
      default: 'ваш номер'
    },
    isNumber: {
      type: Boolean,
      default: false
    }
  },
  components: {
    TheButton,
    TheInput
  },
  computed: {
    validation () {
      const validated = {}

      validated.phone = this.phone?.replace('+7', '').replaceAll(' ', '')
        .replaceAll('-', '').replace('(', '')
        .replace(')', '').substr(0, 10).length === 10

      return validated
    }
  },
  data () {
    return {
      phone: '',
      password: '',
      isMobile: true
    }
  },
  created () {
    this.isMobile = isMobileDevice()
  },

  methods: {
    ...mapActions(['signin']),

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
        phone: this.phone?.replace('+7', '').replaceAll(' ', '')
          .replaceAll('-', '').replace('(', '')
          .replace(')', '').substr(0, 10),
        password: this.password
      })
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

.additional__info {
  position: absolute;
  width: fit-content;
  left: calc(50vw - 303px);
  top: 45px;
  font-family: Zen Kaku Gothic New;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 130%;
  text-align: center;
  text-transform: uppercase;
  color: #F8E577;
  z-index: 80;
}

@media (max-width: 768px) {
  .additional__info {
    font-size: 22px !important;
    line-height: 110% !important;
    width: 238px;
    letter-spacing: 0.02em;
    left: calc(50vw - 119px) !important;
    bottom: 18px;
  }
}
</style>
