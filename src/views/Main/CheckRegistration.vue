<template>
  <div class="check__registration">
    <img v-if="!small" class="left__image" src="../../assets/main_left_side.png">
    <img v-if="!small" class="right__image" src="../../assets/main_right_side.png">
    <img v-if="small" class="right__image" src="../../assets/phone_main.png">
    <div class="text__block">
      <p class="inspire">Вдохновляйся</p>
      <p class="traditions">
        традициями<br>
        советской эпохи<br>
        и выигрывай<br>
        ретро призы!
      </p>
      <TheButton
        :event="activate"
        :is-rounded="false"
        :is-long="small"
        :is-big="!small"
        :is-reg="true"
        :text="'ЗАРЕГИСТРИРОВАТЬ ЧЕК'"
        class="register"
      ></TheButton>
    </div>
  </div>
</template>

<script>
import TheButton from '@/components/TheButton'

export default {
  name: 'CheckRegistration',
  components: { TheButton },
  mounted () {
    window.addEventListener('resize', this.onResize, true)
    this.small = window.innerWidth <= 768
  },
  data () {
    return {
      small: false
    }
  },
  methods: {
    activate () {
      this.$emit('activateOptions')
    },

    onResize () {
      this.small = window.innerWidth <= 768
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize, true)
  }
}
</script>

<style scoped lang="scss">
.check__registration {
  height: 810px;
  background-color: #D12E27;
  position: relative;
}

.text__block {
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 126px;
  padding-left: 13vw;
}

.inspire {
  color: #FDE894;
  font-size: 90px;
  font-family: Poiret One;
  font-style: normal;
  font-weight: normal;
  text-transform: uppercase
}

.traditions {
  color: white;
  padding-left: 5%;
  font-size: 72px;
  font-style: normal;
  font-weight: normal;
  font-family: Poiret One;
  line-height: 88%;
}

.register {
  margin-top: 2%;
  margin-left: 5%;
}

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

@media (max-width: 1250px) {
  .inspire {
    font-size: 70px;
  }

  .traditions {
    font-size: 52px;
  }
}

@media (max-width: 1100px) {
  .left__image {
    display: none;
  }

  .text__block {
    padding-left: 5vw;
  }
}

@media (max-width: 950px) {
  .left__image {
    display: block;
  }

  .right__image {
    display: none;
  }

  .text__block {
    margin-left: 20vw;
  }
}

@media (max-width: 768px) {
  .check__registration {
    height: 568px;
  }

  .text__block {
    padding-top: 126px;
  }

  .inspire {
    font-size: 60px;
  }

  .traditions {
    font-size: 42px;
  }
}

@media (max-width: 768px) {
  .left__image {
    display: none;
  }

  .text__block {
    margin-left: 10vw;
  }

  .right__image {
    display: block;
    max-width: 320px !important;
    width: 100% !important;
  }

  .inspire {
    font-size: 38px;
    margin-left: 0;
    padding-left: 0 !important;
  }

  .traditions {
    font-size: 31px;
    margin-left: 0;
    padding-left: 0;
  }

  .text__block {
    margin-left: 0 !important;
    padding-left: 10px !important;
    padding-right: 10px !important;
  }

  .register {
    margin-top: 21px;
    margin-left: 0;
  }
}
</style>
