<template>
  <div class="modal__wrapper">
    <div class="modal__content">
      <div class="close" @click="disable"/>
      <input v-show="false" ref="dropImage" accept="image/jpeg, image/png, image/webp, image/tiff" type="file"
             @change="onChange">
      <TheButton
        :event="onUploadFile"
        :is-long="true"
        :is-rounded="true"
        :text="'ЗАГРУЗИТЬ ИЗ ГАЛЕРЕИ'"
        class="mgb"
      ></TheButton>
      <TheButton
        v-if="isMobile !== false"
        :event="qr"
        :is-long="true"
        :is-rounded="true"
        :text="'ОТСКАНИРУЙТЕ QR-КОД ЧЕКА'"
        class="mgb"
      ></TheButton>
      <TheButton
        :event="manual"
        :is-long="true"
        :is-rounded="true"
        :text="'ВВЕСТИ ВРУЧНУЮ'"
        class="special__button"
        color="#fff"
      ></TheButton>
      <div class="or__with-lines">
        <div class="line"></div>
        <p>ИЛИ</p>
        <div class="line"></div>
      </div>
      <div class="centralized">
        <img alt="Whatsapp" src="@/assets/whatsup.png">
        <a class="dashed" href="https://api.whatsapp.com/send/?phone=79639299984">WhatsApp-бот</a>
      </div>
      <div class="centralized normal">
        <a class="normal" href="/rules/Правила_Акции_Красный_Октябрь_30_11.pdf" download="Правила_Акции_Красный_Октябрь_30_11.pdf">Правила акции</a>
      </div>
    </div>
  </div>
</template>

<script>
import TheButton from '@/components/TheButton'
import { mapActions } from 'vuex'
import isMobileDevice from '@/utils/mobileChecker'

export default {
  name: 'CheckRegistrationOptions',

  components: {
    TheButton
  },

  computed: {
    isMobile () {
      console.log(isMobileDevice())
      return isMobileDevice()
    }
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

    qr () {
      this.$emit('activate')
      this.$emit('qrcode')
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
