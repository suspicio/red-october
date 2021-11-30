<template>
  <button :class="{
    round__corners: isRounded,
    long: isLong,
    big: isBig,
    small: !isBig,
    smallText: isMobile,
    biggerBtn: isReg,
    bold: isBold,
    notBold: !isBold
  }"
          :style="{ 'background-color': bgColor, 'color': color }" class="the__button"
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
    isReg: {
      type: Boolean,
      default: false
    },
    isMobile: {
      type: Boolean,
      default: false
    },
    isBig: {
      type: Boolean,
      default: true
    },
    isBold: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.the__button {
  background-color: #F8E577;
  border: 0;
  margin: 0;
  padding: 0;
  font-family: 'Zen Kaku Gothic New', sans-serif;
  color: black;
  font-style: normal;
  font-size: 18px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #c7b564 !important;
  }
}

.bold {
  font-weight: bold;
}

.notBold {
  font-weight: normal;
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
  width: 100% !important;
}

.smallText {
  font-size: 14px;
}

.biggerBtn {
  width: 250px;
}
</style>
