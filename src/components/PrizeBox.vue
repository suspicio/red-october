<template>
  <div class="prize__box">
    <div class="text__box">
      <h1>{{ prize }}</h1>
      <p>{{ date }}</p>
    </div>
    <div class="button__box">
      <p>Как забрать приз?</p>
      <TheButton
        :bg-color="'#B8140D'"
        :color="'#FFFFFF'"
        :event="activate"
        :is-long="false"
        :is-rounded="true"
        :text="'ВВЕСТИ ДАННЫЕ'"
        class="szsm"
      >
      </TheButton>
    </div>
  </div>
</template>

<script>
import TheButton from '@/components/TheButton'

export default {
  name: 'PrizeBox',
  components: {
    TheButton
  },
  props: {
    date: {
      type: String,
      default: '01.02.2021'
    },
    prize: {
      type: String,
      default: 'Выигран приз: Сертификат на 3 000 рублей'
    }
  },
  methods: {
    activate () {
      console.log('some')
    }
  }
}
</script>

<style lang="scss" scoped>
.prize__box {
  display: flex;
  flex-direction: column;
  width: 375px;
  justify-content: flex-start;
  align-items: flex-start;

  .text__box {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 5px;

    p {
      font-family: Zen Kaku Gothic New;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 130%;
      color: #091E16;
      opacity: 0.5;
    }

    h1 {
      font-family: Zen Kaku Gothic New;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 130%;
      color: #091E16;
    }
  }

  .button__box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    width: 100%;

    p {
      font-family: Zen Kaku Gothic New;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 130%;
      color: #B8140D;
      text-decoration: underline dashed 1px;
    }
  }
}

@media (max-width: 768px) {
  .prize__box {
    max-width: 226px;
  }

  .button__box {
    flex-direction: column-reverse;

    p {
      margin-top: 20px;
    }

    .szsm {
      height: 40px;
      margin-top: 20px;
    }
  }

  .text__box {
    flex-direction: column;

    p {
      position: absolute;
      top: 10px;
      right: 20px;
    }
  }
}
</style>
