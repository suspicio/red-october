import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Swiper as SwiperClass, Navigation, Autoplay, Mousewheel } from 'swiper/js/swiper.esm'
import axios from 'axios'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
import Toasted from 'vue-toasted'
import 'swiper/css/swiper.css'
import './assets/styles/app.scss'
import './assets/styles/close-pop-app.scss'
import './assets/styles/modals.scss'

Vue.config.productionTip = false
axios.defaults.baseURL = process.env.VUE_APP_API_URL || ''

Vue.use(Toasted, {
  duration: 5000,
  position: 'bottom-center'
})

SwiperClass.use([Navigation, Autoplay, Mousewheel])
Vue.use(getAwesomeSwiper(SwiperClass))
Vue.component('fade-loader', require('vue-spinner/src/FadeLoader.vue'))
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
