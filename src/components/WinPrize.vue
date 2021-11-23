<template>
  <div class="modal__wrapper">
    <div class="modal__content">
      <div class="close" @click="disable">
      </div>
      <div class="win__prize-wrapper">
        <img src="@/assets/prize.png">
        <h1>ВЫ ВЫИГРАЛИ ПРИЗ!</h1>
        <h2>С вами свяжется наш координатор <br> в течении 3х рабочих дней</h2>
        <p>Также понадобится документ, удостоверяющий личность и предварительно заполненные данные на сайте</p>
        <TheButton
          :text="'ВВЕСТИ ДАННЫЕ'"
          :is-long="false"
          :is-rounded="true"
          :bg-color="'#F8E577'"
          :color="'#091E16'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TheButton from '@/components/TheButton'
export default {
  name: 'WinPrize',
  components: { TheButton },
  methods: {
    disable () {
      this.$emit('activate')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal__content {
  max-width: 365px !important;

  .win__prize-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;

    h2 {
      font-family: Zen Kaku Gothic New;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 130%;
      text-align: center;
      color: #FFFFFF;
    }

    p {
      font-family: Zen Kaku Gothic New;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 130%;
      text-align: center;
      color: #FFFFFF;
      opacity: 0.5;
      margin-bottom: 27px;
      margin-top: 8px;
    }
  }
}
</style>
