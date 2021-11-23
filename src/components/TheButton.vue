<template>
  <button :class="{ round__corners: isRounded, long: isLong, big: isBig, small: !isBig }" :style="{ 'background-color': bgColor, 'color': color }" class="the__button"
          @click="event">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'TheButton',
  props: {
    text: {
      type: String,
      default: ''
    },
    event: {
      type: Function,
      default: () => {
      }
    },
    isRounded: {
      type: Boolean,
      default: true
    },
    bgColor: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'black'
    },
    isLong: {
      type: Boolean,
      default: false
    },
    isBig: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.the__button {
  background-color: #F8E577;
  border: 0px;
  margin: 0px;
  padding: 0px;
  font-family: 'Zen Kaku Gothic New', sans-serif;
  color: black;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
}

.big {
  height: 50px;
  width: 207px;
}

.small {
  width: 111px;
  height: 39px;
}

.round__corners {
  border-radius: 100px;
}

.long {
  width: 100%;
}
</style>
