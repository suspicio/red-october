<template>
  <div class="modal__wrapper">
    <div class="modal__content">
      <div class="close" @click="disable"/>
      <div class="qr__wrapper">
        <p>Наведите QR-код на рамку</p>
        <div class="camera__wrapper">
          <qrcode-stream @decode="onDecode" @init="onInit"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader'
import { mapActions } from 'vuex'

export default {
  name: 'QRCodeReader',
  components: { QrcodeStream },

  data () {
    return {
      error: '',
      tm: '',
      fn: '',
      fp: '',
      i: '',
      s: ''
    }
  },

  methods: {
    ...mapActions(['uploadReceiptManual']),

    disable () {
      this.$emit('activate')
    },

    onDecode (result) {
      const elems = result.toString().split('&')
      console.log(elems)
      const t = elems[0]
      this.tm = t.substr(2, 4) + '-' + t.substr(6, 2) + '-' + t.substr(8, 5) + ':' + t.substr(13, 2)
      this.sum = elems[1].substr(2)
      this.fn = elems[2].substr(3)
      this.i = elems[3].substr(2)
      this.fp = elems[4].substr(3)

      this.$emit('checkStatus', this.uploadReceiptManual({
        t: this.tm,
        fn: this.fn,
        fp: this.fp,
        i: this.i,
        s: this.sum
      }))
      this.disable()
    },

    async onInit (promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.error = 'ERROR: you need to grant camera access permission'
          this.$toasted.error('Необходимо предоставить доступ к камере в настройках приватности')
        } else if (error.name === 'NotFoundError') {
          this.error = 'ERROR: no camera on this device'
        } else if (error.name === 'NotSupportedError') {
          this.error = 'ERROR: secure context required (HTTPS, localhost)'
        } else if (error.name === 'NotReadableError') {
          this.error = 'ERROR: is the camera already in use?'
        } else if (error.name === 'OverconstrainedError') {
          this.error = 'ERROR: installed cameras are not suitable'
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = 'ERROR: Stream API is not supported in this browser'
        } else if (error.name === 'InsecureContextError') {
          this.error = 'ERROR: Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.'
        } else {
          this.error = `ERROR: Camera error (${error.name})`
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.qr__wrapper {
  font-family: Zen Kaku Gothic New;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 130%;
  text-align: center;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .camera__wrapper {
    width: 194px;
    height: 194px;
    border: 2px solid #FFFFFF;;
    box-sizing: border-box;
    margin-top: 10px;
  }
}
</style>
