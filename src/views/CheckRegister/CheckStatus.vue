<template>
  <div class="modal__wrapper">
    <div class="modal__content">
      <div class="close" @click="disable">
      </div>
      <div class="centralized">
        <img v-if="isOk" src="@/assets/check_ok.png">
        <img v-else src="@/assets/check_fail.png">
        <h1>{{ headerText }}</h1>
        <p>{{ underText }}</p>
        <TheButton
          :is-long="true"
          :is-rounded="true"
          :text="buttonText"
          class="mgb"
        ></TheButton>
      </div>
    </div>
  </div>
</template>

<script>
import TheButton from '@/components/TheButton'

export default {
  name: 'CheckStatus',
  components: { TheButton },
  props: {
    buttonText: {
      type: String,
      default: ''
    },
    headerText: {
      type: String,
      default: ''
    },
    underText: {
      type: String,
      default: ''
    },
    isOk: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    disable () {
      this.$emit('activate')
    }
  }
}
</script>

<style lang="scss" scoped>
.centralized {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-family: Zen Kaku Gothic New;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 130%;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 32px;
  }

  h1 {
    margin-top: 10px;
  }
}
</style>
