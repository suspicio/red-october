<template>
  <div :class="{red__background: isBgRed}" class="the__header">
    <nav>
      <div class="burger" @click="showMenu">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div :style="{display: visible ? 'flex' : 'none'}" class="small__menu">
        <a href="/#winners">Победители</a>
<!--        <a href="/#gallery">Галерея</a>-->
        <a href="/#faq">FAQ</a>
      </div>
      <router-link class="red_october" to="/">
        <img v-if="!tiny" src="/images/logo.png">
        <img v-else src="/images/logo.png">
      </router-link>
      <img v-if="!tiny" class="ms magnit" src="../assets/magnit.svg">
      <img v-else class="magnit ms" src="../assets/small_magnit.svg">
      <div :class="{extra__margin: isBgRed}" class="links">
        <a href="/#winners">Победители</a>
<!--        <a href="/#gallery">Галерея</a>-->
        <a href="/#faq">FAQ</a>
      </div>
      <TheButton
        v-if="!user"
        :bg-color="'#F8E577'"
        :event="disable"
        :is-big="!tiny"
        :is-rounded="false"
        :is-mobile="small"
        :is-bold="true"
        :text="'ВОЙТИ'"
      >
      </TheButton>
      <div v-else class="profile__picture-wrapper" @click="toggle">
        <div :style="{transform: !toggled ? 'rotate(180deg)' : 'rotate(0deg)'}" class="arrow" >
          <img src="@/assets/arrow.png">
        </div>
        <div v-if="toggled" class="menu__profile">
          <router-link to="/profile">Чеки</router-link>
<!--          <router-link to="/profile">Личный кабинет</router-link>-->
          <a class="exit" @click="logout">Выйти</a>
        </div>
        <div
          class="g-profile__picture"
        >
          {{user.firstName.toString().toUpperCase().substr(0, 1)}}{{user.lastName.toString().toUpperCase().substr(0, 1)}}
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import TheButton from '@/components/TheButton'
import { mapActions, mapState } from 'vuex'
import router from '@/router'

export default {
  name: 'Header',

  components: { TheButton },

  props: {
    isBgRed: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      small: false,
      tiny: false,
      visible: false,
      toggled: false
    }
  },

  mounted () {
    window.addEventListener('resize', this.onResize, true)
    this.small = window.innerWidth <= 768
    this.tiny = window.innerWidth <= 500
  },

  computed: {
    ...mapState({
      user: state => state.user
    })
  },

  methods: {
    ...mapActions(['logOut']),

    disable () {
      this.$emit('activate')
    },

    onResize () {
      this.small = window.innerWidth <= 768
      this.tiny = window.innerWidth <= 500
    },

    showMenu () {
      this.visible = !this.visible
    },

    logout () {
      this.logOut()
      router.push('/').catch(() => {})
    },

    toggle () {
      this.toggled = !this.toggled
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize, true)
  }
}
</script>

<style lang="scss" scoped>
.g-profile__picture {
  font-size: 18px !important;
}

.red_october {
  filter: none;
  -webkit-filter: blur(0px);
  -moz-filter: blur(0px);
  -ms-filter: blur(0px);
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  image-rendering: smooth;
  -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
  img {
    width: 112px;
    filter: none;
    -webkit-filter: blur(0px);
    -moz-filter: blur(0px);
    -ms-filter: blur(0px);
    filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius='0');
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    image-rendering: -moz-crisp-edges; /* Firefox */
    image-rendering: -o-crisp-edges; /* Opera */
    image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
  }
}

.profile__picture-wrapper {
  position: relative;

  .arrow {
    position: absolute;
    left: -30px;
    top: 20px;
  }

  .menu__profile {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    z-index: 100;
    width: 150px;
    height: fit-content + 10px;
    background-color: #D12E27;
    border-radius: 0 0 20px 20px;
    top: 67px;
    left: -40px;

    a {
      font-family: Zen Kaku Gothic New;
      font-style: normal;
      font-weight: 500;
      font-size: 16.2px;
      line-height: 23px;
      color: #FFFFFF;
      text-decoration: none;
      padding: 8px;
      cursor: pointer;
    }

    .exit {
      text-decoration: underline 1px;
      font-weight: bold;
    }
  }
}

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
    align-items: center;

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
  nav {
    width: 90%;
    justify-content: space-between;
  }

  .profile__picture-wrapper {
    cursor: pointer;

    .arrow {
      position: absolute;
      left: -3px;
      top: 10px;
    }

    .menu__profile {
      width: 100px;
      background-color: #D12E27;
      border-radius: 0px 0px 20px 20px;
      top: 47px;
      left: -20px;

      a {
        font-size: 14px;
        line-height: 20px;
      }
    }
  }

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
    top: 10px;
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
    img {
      width: 64px !important;
    }
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
