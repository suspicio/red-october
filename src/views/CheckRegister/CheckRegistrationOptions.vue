<template>
  <div class="modal__wrapper">
    <div class="modal__content">
      <div class="close" @click="disable" />
      <input type="file" v-show="false" accept="image/jpeg, image/png, image/webp, image/tiff" ref="dropImage" @change="onChange">
      <TheButton
        :is-long="true"
        :is-rounded="true"
        :text="'ЗАГРУЗИТЬ ИЗ ГАЛЕРЕИ'"
        class="mgb"
        :event="onUploadFile"
      ></TheButton>
      <TheButton
        :event="manual"
        :is-long="true"
        :is-rounded="true"
        color="#fff"
        :text="'ВВЕСТИ ВРУЧНУЮ'"
        class="special__button"
      ></TheButton>
      <div class="or__with-lines">
        <div class="line"></div>
        <p>ИЛИ</p>
        <div class="line"></div>
      </div>
      <div class="centralized">
        <img src="@/assets/whatsup.png" alt="Whatsapp">
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
import { mapActions } from 'vuex'

export default {
  name: 'CheckRegistrationOptions',

  components: {
    TheButton
  },

  methods: {
    ...mapActions(['uploadReceiptFile']),

    disable () {
      this.$emit('activate')
    },

    manual () {
      this.$emit('activate')
      this.$emit('manual')
    },

    onUploadFile () {
      this.$refs.dropImage.click()
    },

    onChange (e) {
      const file = e.target.files[0]
      if (file) {
        if (file.size / 1024 / 1024 > 50) {
          e.target.files = null
          this.$toasted.error('Максимальный размер файла 50MB')
        } else {
          this.uploadReceiptFile(file)
            .then(res => {
              if (res === true) {
                this.disable()
              }
            })
        }
      }
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
      text-decoration: underline dashed 1px;
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
