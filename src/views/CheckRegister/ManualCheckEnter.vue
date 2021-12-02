<template>
  <div class="modal__wrapper">
    <div class="modal__content">
      <div class="close" @click="disable"/>
      <div class="modal__part">
        <div class="input__form">
          <h1>ВВОД ЧЕКА ВРУЧНУЮ</h1>
          <form @submit.prevent="onSubmit">
            <div class="in-line">
              <TheInput
                v-model="purchaseDate"
                :text="'Дата покупки'"
                type="date"
              >
                <div class="number__input number__input-f">1</div>
              </TheInput>
              <TheInput
                v-model="purchaseTime"
                :text="'Время покупки'"
                type="time"
              >
                <div class="number__input">2</div>
              </TheInput>
            </div>
            <TheInput
              v-model="fp"
              :text="'ФП'"
            >
              <div class="number__input">3</div>
            </TheInput>
            <TheInput
              v-model="fn"
              :text="'ФН'"
            >
              <div class="number__input">4</div>
            </TheInput>
            <TheInput
              v-model="fd"
              :text="'ФД'"
            >
              <div class="number__input">5</div>
            </TheInput>
            <TheInput
              v-model="sum"
              :text="'Сумма чека'"
              class="the-input-sum"
            >
            </TheInput>
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
        <img alt="Чек" class="modal__image" src="/images/check.png">
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
      this.$emit('checkStatus', this.uploadReceiptManual({
        t: `${this.purchaseDate}T${this.purchaseTime}`,
        fn: this.fn,
        fp: this.fp,
        i: this.fd,
        s: this.sum
      }))
    }
  }
}
</script>

<style lang="scss" scoped>
.input__form {
  width: 410px;
}

.the-input-sum {
  padding-right: 24px;
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
