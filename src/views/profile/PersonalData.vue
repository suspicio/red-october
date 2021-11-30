<template>
  <div class="modal__wrapper personal-data">
    <div class="modal__content">
      <div class="close" @click="disable"/>
      <div class="modal__part">
        <div class="input__form">
          <h1>ДАННЫЕ ДЛЯ ПОЛУЧЕНИЯ ПРИЗА</h1>
          <h2>Паспорт</h2>
          <form @submit.prevent="onSubmit">
            <div class="in-line">
              <div class="left">
                <TheInput
                  v-model="passportNum"
                  @input="(e) => {this.passportNum = e}"
                  :text="'Серия и номер'"
                >
                </TheInput>
              </div>
              <div class="right double">
                <TheInput
                  v-model="passportDate"
                  @input="(e) => {this.passportDate = e}"
                  :text="'Когда выдан'"
                  type="date"
                >
                </TheInput>
                <TheInput
                  v-model="passportCode"
                  @input="(e) => {this.passportCode = e}"
                  :text="'Код подразделения'"
                >
                </TheInput>
              </div>
            </div>
            <div class="in-line">
              <div class="left">
                <TheInput
                  v-model="passportFrom"
                  @input="(e) => {this.passportFrom = e}"
                  big
                  :text="'Кем выдан'"
                  is-textarea
                >
                </TheInput>
              </div>
              <div class="right">
                <TheInput
                  v-model="address"
                  @input="(e) => {this.address = e}"
                  :big="true"
                  :text="'Регистрация'"
                >
                </TheInput>
              </div>
            </div>
            <h2>ИНН</h2>
            <div class="in-line">
              <div class="left">
              <TheInput
                v-model="inn"
                @input="(e) => {this.inn = e}"
                :text="'Номер'"
                no-margin
              >
              </TheInput>
              </div>
              <div class="right">
                <div class="form__buttons centerize">
                  <div class="TheButton send-button">
                    <TheButton
                      :bg-color="'#F8E577'"
                      :is-rounded="true"
                      :text="'ОТПРАВИТЬ'"
                      class="TheButton"
                    ></TheButton>
                  </div>
                  <div class="confidential__policy">
                    <p>Нажимая «Отправить», вы соглашаетесь </p>
                    <p>с <a href="#">Политикой обработки персональных данных</a></p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="check__example">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheInput from '@/components/TheInput'
import TheButton from '@/components/TheButton'
import { mapActions } from 'vuex'

export default {
  name: 'PersonalData',

  components: {
    TheInput,
    TheButton
  },

  data () {
    return {
      passportNum: '',
      passportDate: '',
      passportCode: '',
      passportFrom: '',
      address: '',
      inn: ''
    }
  },

  methods: {
    ...mapActions(['uploadUserInfo']),

    disable () {
      this.$emit('activate')
    },

    onSubmit () {
      this.uploadUserInfo({
        passportNum: this.passportNum,
        passportDate: this.passportDate,
        passportCode: this.passportCode,
        passportFrom: this.passportFrom,
        address: this.address,
        inn: this.inn
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
.personal-data {
  h1 {
    margin-bottom: 0px !important;
  }

  h2 {
    font-weight: normal;
    font-size: 18px;
    line-height: 130%;
    color: #FFFFFF;
    opacity: 0.5;
    margin-bottom: 16px;
    margin-top: 24px;
  }

  .form__buttons {
    margin: 0 !important;
  }

  .send-button {
    //
  }

  .centerize {
    align-items: center !important;

    .TheButton {
      margin-right: 8px !important;
    }
  }
}

.input__form {
  width: 890px;
}

.in-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 890px;
}

.left {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-right: 45px;
}

.right {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;

  &.double {
    > * {
      &:first-child {
        margin-right: 8px;
      }
    }
  }
}

.modal__content {
  display: flex;
}

.modal__image {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.number__input {
  width: 16px;
  height: 16px;
  font-family: MyriadPro;
  background-color: #F8E577;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 9px;

  &-f {
    margin-right: 45px;
  }
}

@media (max-width: 768px) {
  .input__form {
    width: 270px;
  }

  .in-line {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 270px;
  }

  .modal__content {
    flex-direction: column;
  }

  .modal__content {
    margin-top: 300px;
    position: relative;
  }

  .modal__wrapper {
    overflow-y: auto;
    padding-bottom: 30px;
    height: 100%;
  }
}
</style>
