<template>
  <div class="modal__wrapper">
    <div class="modal__content">
      <div class="close" @click="disable">
      </div>
      <div>
        <div class="input__form">
          <h1>ВВОД ЧЕКА ВРУЧНУЮ</h1>
          <form @submit.prevent>
            <div class="in-line">
              <TheInput
                :text="'Дата покупки'"
              ><div class="number__input number__input-f">1</div></TheInput>
              <TheInput
                :text="'Время покупки'"
              ><div class="number__input">2</div></TheInput>
            </div>
            <TheInput
              :text="'ФП'"
            ><div class="number__input">3</div></TheInput>
            <TheInput
              :text="'ФН'"
            ><div class="number__input">4</div></TheInput>
            <TheInput
              :text="'ФД'"
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
    </div>
  </div>
</template>

<script>
import TheInput from '@/components/TheInput'
import TheButton from '@/components/TheButton'

export default {
  name: 'ManualCheckEnter',
  components: {
    TheInput,
    TheButton
  },
  methods: {
    disable () {
      this.$emit('activate')
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
  justify-content: center;
  align-items: center;
  width: 410px;
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
