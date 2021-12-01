<template>
  <div class="the__footer">
    <img v-if="!small" class="left__image" src="../assets/footer_left_side.png">
    <img v-if="!small" class="right__image" src="../assets/footer_right_side.png">
    <img v-if="small" class="left__image" src="../assets/small_left_footer.png">
    <img v-if="small" class="right__image" src="../assets/small_right_footer.png">
    <img class="red__october" src="../assets/logo.png">
    <div class="text__block">
      <a href="https://magnit.krasniy-oktyabr.ru/api/policy.pdf" target="_blank" download>Политика конфиденциальности</a>
      <a href="https://magnit.krasniy-oktyabr.ru/api/rules.pdf" target="_blank" download="rules.pdf">Правила акции</a>
      <p>© ООО «Объединенные кондитеры»</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheFooter',
  mounted () {
    window.addEventListener('resize', this.onResize, true)
    this.small = window.innerWidth <= 1000
  },
  data () {
    return {
      small: false
    }
  },
  methods: {
    onResize () {
      this.small = window.innerWidth <= 1000
    }
  }
}
</script>

<style lang="scss" scoped>
.red__october {
  width: 142px;
}

.the__footer {
  position: relative;
  min-height: 309px;
  background-color: #D02E26;

  .left__image {
    position: absolute;
    left: 0;
    bottom: 0;
  }

  .right__image {
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .red__october {
    position: absolute;
    top: 45px;
    left: 50%;
    transform: translateX(-50%);
    filter: none;
    -webkit-filter: blur(0px);
    -moz-filter: blur(0px);
    -ms-filter: blur(0px);
    filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius='0');
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
  }

  .text__block {
    position: absolute;
    top: 162px;
    width: 240px;
    left: calc(50% - 120px);
    display: flex;
    flex-direction: column;
    font-family: 'Zen Kaku Gothic New', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14.4px;
    line-height: 21px;
    text-align: center;
    color: white;

    p {
      margin-bottom: 18px;
    }
    a {
      margin-bottom: 18px;
      text-decoration: none;
      flex-direction: column;
      font-family: 'Zen Kaku Gothic New', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14.4px;
      line-height: 21px;
      text-align: center;
      color: white;
    }

    &:nth-child(3) {
      font-family: Montserrat;
    }
  }
}

@media (max-width: 768px) {
  .red__october {
    width: 120px;
  }
}
</style>
