<template>
  <div class="modal__wrapper">
    <div class="modal__content">
      <div class="close" @click="disable">
      </div>
      <TheButton
        :is-long="true"
        :is-rounded="true"
        :text="'ЗАГРУЗИТЬ ИЗ ГАЛЕРЕИ'"
        class="mgb"
      ></TheButton>
      <TheButton
        :event="manual"
        :is-long="true"
        :is-rounded="true"
        :text="'ВВЕСТИ ВРУЧНУЮ'"
        class="special__button"
      ></TheButton>
      <div class="or__with-lines">
        <div class="line"></div>
        <p>ИЛИ</p>
        <div class="line"></div>
      </div>
      <div class="centralized">
        <img src="@/assets/whatsup.png">
        <a class="dashed" href="#">WhatsApp-бот</a>
      </div>
      <div class="centralized normal">
        <a class="normal" href="#">Правила акции</a>
      </div>
    </div>
  </div>
</template>

<script>
import TheButton from '@/components/TheButton'

export default {
  name: 'CheckRegistrationOptions',
  components: {
    TheButton
  },
  methods: {
    disable () {
      this.$emit('activate')
    },

    manual () {
      this.$emit('activate')
      this.$emit('manual')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal__content {
  padding: 48px !important;

  .mgb {
    margin-bottom: 16px;
  }

  .special__button {
    color: white;
    background-color: transparent;
    border: 2px solid white;
  }

  .or__with-lines {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 24px 0 12px 0;

    .line {
      width: 100%;
      height: 1px;
      background-color: white;
      opacity: 0.5;
    }

    p {
      display: block;
      width: fit-content;
      margin: 0 10px;
      font-family: 'Zen Kaku Gothic New', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 130%;
      text-align: center;
      color: #FFFFFF;
      opacity: 0.5;
    }
  }

  .centralized {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 12px;

    img {
      margin-right: 8px;
    }

    .dashed {
      font-family: Zen Kaku Gothic New;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 130%;
      color: #F8E577;
      text-decoration: underline dashed;
    }

    .normal {
      font-family: Zen Kaku Gothic New;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 130%;
      color: #FFFFFF;
      text-decoration: none;
      padding-top: 12px;
    }
  }
}
</style>
