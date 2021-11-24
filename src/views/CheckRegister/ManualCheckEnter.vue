<template>
  <div class="modal__wrapper">
    <div class="modal__content">
      <div class="close" @click="disable" />
      <div class="modal__part">
        <div class="input__form">
          <h1>ВВОД ЧЕКА ВРУЧНУЮ</h1>
          <form @submit.prevent="onSubmit">
            <div class="in-line">
              <TheInput
                :text="'Дата покупки'"
                v-model="purchaseDate"
                type="date"
              ><div class="number__input number__input-f">1</div></TheInput>
              <TheInput
                :text="'Время покупки'"
                v-model="purchaseTime"
                type="time"
              ><div class="number__input">2</div></TheInput>
            </div>
            <TheInput
              :text="'ФП'"
              v-model="fp"
            ><div class="number__input">3</div></TheInput>
            <TheInput
              :text="'ФН'"
              v-model="fn"
            ><div class="number__input">4</div></TheInput>
            <TheInput
              :text="'ФД'"
              v-model="fd"
            ><div class="number__input">5</div></TheInput>
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
        <div class="check__example">

        </div>
      </div>
      <div class="modal__part">
        <img class="modal__image" src="/images/check.png" alt="Чек">
      </div>
    </div>
  </div>
</template>

<script>
import TheInput from '@/components/TheInput'
import TheButton from '@/components/TheButton'
import { mapActions } from 'vuex'

export default {
  name: 'ManualCheckEnter',

  components: {
    TheInput,
    TheButton
  },

  data () {
    return {
      purchaseDate: '',
      purchaseTime: '',
      fp: '',
      fn: '',
      fd: '',
      sum: '0'
    }
  },

  methods: {
    ...mapActions(['uploadReceiptManual']),

    disable () {
      this.$emit('activate')
    },

    onSubmit () {
      this.uploadReceiptManual({
        t: `${this.purchaseDate}T${this.purchaseTime}Z`,
        fn: this.fn,
        fp: this.fp,
        i: this.fd,
        s: this.sum
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
.input__form {
  width: 410px;
}

.in-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 410px;
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
</style>
