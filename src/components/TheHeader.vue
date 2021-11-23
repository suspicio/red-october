<template>
  <div :class="{red__background: isBgRed}" class="the__header">
    <nav>
      <div class="burger" @click="showMenu">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div :style="{display: visible ? 'flex' : 'none'}" class="small__menu">
        <a href="#">Личный кабинет</a>
        <a href="#">Победители</a>
        <a href="#">FAQ</a>
      </div>
      <router-link class="red_october"  to="/">
        <img v-if="!tiny" src="../assets/logo.png">
        <img v-else src="../assets/small_red_october.png">
      </router-link>
      <img v-if="!tiny" class="ms magnit" src="../assets/magnit.svg">
      <img v-else class="magnit ms" src="../assets/small_magnit.svg">
      <div :class="{extra__margin: isBgRed}" class="links">
        <a href="#">Личный кабинет</a>
        <a href="#">Победители</a>
        <a href="#">FAQ</a>
      </div>
      <TheButton
        v-if="!!!$store.user"
        :bg-color="'#F8E577'"
        :event="disable"
        :is-rounded="true"
        :text="'ВОЙТИ'"
        :is-big="!tiny"
      >
      </TheButton>
      <div
        v-else
        class="g-profile__picture"
      >
        <img src="../assets/man_profile_mock.png">
      </div>
    </nav>
  </div>
</template>

<script>
import TheButton from '@/components/TheButton'

export default {
  name: 'Header',
  components: { TheButton },
  props: {
    isBgRed: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    window.addEventListener('resize', this.onResize, true)
    this.small = window.innerWidth <= 768
    this.tiny = window.innerWidth <= 500
  },
  data () {
    return {
      small: false,
      tiny: false,
      visible: false
    }
  },
  methods: {
    disable () {
      this.$emit('activate')
    },

    onResize () {
      this.small = window.innerWidth <= 768
      this.tiny = window.innerWidth <= 500
    },

    showMenu () {
      this.visible = !this.visible
    }
  }
}
</script>

<style lang="scss" scoped>
.the__header {
  position: absolute;
  z-index: 90;
  display: flex;
  align-content: center;
  justify-content: center;
  width: 100%;
  padding-top: 18px;
  padding-bottom: 12px;

  nav {
    display: flex;

    .burger {
      display: none;
    }

    .links {
      display: flex;
      margin: 0 152px 0;

      a {
        margin: auto 10px;
        text-decoration: none;
        color: white;
        font-family: 'Zen Kaku Gothic New', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16.2px;
        line-height: 23px;
        text-align: center;
      }
    }

    .magnit {
      margin-left: 45px;
    }

    .extra__margin {
      margin-right: 220px;
    }
  }
}

.red__background {
  background-color: #D12E27;
}

@media (max-width: 1328px) {
  .links {
    margin: 0 40px 0 !important;
  }
}

@media (max-width: 768px) {
  .the__header {
    justify-content: space-around;
  }

  .burger {
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 10px;

    div {
      height: 4px;
      width: 50px;
      margin: 6px 30px;
      background-color: white;
    }
  }

  .small__menu {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: fit-content;
    background-color: #D12E27;
    margin-top: 60px;
    border-radius: 8px;

    a {
      text-decoration: none;
      font-family: Zen Kaku Gothic New;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: #FFFFFF;
      margin: 7px;
    }
  }

  .links {
    display: none !important;
  }

  .ms {
    margin-right: 45px;
  }

  .red_october {
    align-self: center !important;
  }
}

@media (max-width: 500px) {
  .burger {
    div {
      height: 2px;
      width: 30px;
      margin: 3px 5px;
      background-color: white;
    }
  }

  .ms {
    margin-right: 10px;
    margin-left: 10px !important;
  }
}
</style>
