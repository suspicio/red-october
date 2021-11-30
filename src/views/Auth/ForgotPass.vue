<template>
  <div class="modal__wrapper">
    <div class="modal__content">
      <div class="close" @click="disable">
      </div>
      <h1>ЗАБЫЛИ КОД?</h1>
      <form @submit.prevent="sendPass">
        <TheInput
          v-model="phone"
          @input="(e) => {this.phone = e}"
          :is-phone="true"
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
    <div v-if="isError" class="additional__info">{{ text }}</div>
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
      phone: '',
      text: '',
      isError: false
    }
  },

  methods: {
    ...mapActions(['askForSMSCode']),

    disable () {
      this.isError = false
      this.$emit('activateForgot')
    },

    sendPass () {
      this.askForSMSCode(this.phone?.replace('+7', '').replaceAll(' ', '')
        .replaceAll('-', '').replace('(', '')
        .replace(')', '').substr(0, 10) || '').then(value => {
        if (value.success === false) {
          if (value.error === 'Данный номер не зарегистрирован в системе. Вам необходимо пройти регистрацию') {
            this.text = 'Такой телефон не зарегистрирован'
            this.isError = true
          }
        } else {
          this.$emit('sendToNumber', this.phone)
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

.additional__info {
  position: absolute;
  width: fit-content;
  left: calc(50vw - 293px);
  bottom: 45px;
  font-family: Zen Kaku Gothic New;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 130%;
  text-align: center;
  text-transform: uppercase;
  color: #F8E577;
}

@media (max-width: 768px) {
  .additional__info {
    font-size: 22px !important;
    line-height: 110% !important;
    width: 238px;
    letter-spacing: 0.02em;
    left: calc(50vw - 128px) !important;
    bottom: 18px;
  }
}
</style>
