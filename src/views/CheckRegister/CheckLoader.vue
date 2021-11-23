<template>
  <div class="modal__wrapper">
    <div class="modal__content">
      <div class="close" @click="disable">
      </div>
      <div class="loader">
        <fade-loader :loading="isLoading" :color="'#F8E577'" :height="'20px'" :width="'8px'"></fade-loader>
      </div>
      <div class="content">
        <h1>ПРОВЕРКА ЧЕКА</h1>
        <p>Подождите несколько секунд…</p>
      </div>
    </div>
  </div>
</template>

<script>
import { FadeLoader } from 'vue-spinner/dist/vue-spinner.min.js'
export default {
  name: 'CheckLoader',
  components: { FadeLoader },
  props: {
    isLoading: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    disable () {
      this.$emit('activate')
    }
  }
}
</script>

<style scoped lang="scss">
.loader {
  width: 100%;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
}

.content {
  text-align: center;
  h1 {
    font-family: Zen Kaku Gothic New;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 130%;
    text-transform: uppercase;
    color: #FFFFFF;
  }

  p {
    font-family: Zen Kaku Gothic New;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 130%;
    text-align: center;
    color: #FFFFFF;
  }
}
</style>
