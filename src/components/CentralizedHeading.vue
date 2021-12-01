<template>
  <div class="centrilized__heading" :style="{color: textColor}">
    <span v-html="text"></span>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'CentralizedHeading',
  props: {
    text: {
      type: String,
      default: ''
    },
    textColor: {
      type: String,
      default: 'black'
    }
  }
}
</script>

<style scoped>
.centrilized__heading {
  position: relative;
  font-family: Poiret One;
  font-style: normal;
  font-weight: normal;
  font-size: 45px;
  text-align: center;
  color: #333333;
  padding-top: 50px;
}
</style>
