<template>
  <div class="win__prize">
    <div class="g-container">
      <centralized-heading
        :text="'Выигрывай призы'"
      ></centralized-heading>
      <div v-swiper:mySwiper="swiperOption" class="slider">
        <div class="swiper-wrapper">
          <div v-for="(slide, index) in slides" :key="index" class="swiper-slide">
            <img :src="slide.img">
            <ul>
              <li v-for="(item, index) in slide.desc" :key="index">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CentralizedHeading from '@/components/CentralizedHeading'

export default {
  name: 'WinThePrize',
  components: {
    CentralizedHeading
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 27
      },

      slides: require('@/content/WinPrizeSiled.json')
    }
  }
}
</script>

<style lang="scss" scoped>
.win__prize {
  background-color: white;
  position: relative;
  overflow: hidden;
  padding-bottom: 50px;

  .slider {
    overflow: visible;
    margin-top: 54px;
    margin-left: 150px;

    .swiper-slide {
      max-width: 360px;
      width: 100%;

      ul {
        display: flex;
        flex-direction: column;
        justify-content: center;

        li {
          list-style-type: none;
          display: flex;
          position: relative;
          margin-top: 9px;
          line-height: 140%;
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 14.4px;
          color: #333333;

          &:before {
            margin-top: 7px;
            margin-right: 9px;
            min-width: 9px;
            width: 9px;
            min-height: 9px;
            height: 9px;
            border-radius: 50%;
            background-color: #BE400B;
            content: '';
            display: block;
          }
        }
      }
    }
  }

  a {
    display: block;
    width: fit-content;
    margin: 0 auto;
    padding-top: 70px;
    padding-bottom: 20px;
    text-align: center;
    font-family: Zen Kaku Gothic New;
    font-style: normal;
    font-weight: normal;
    font-size: 14.4px;
    text-decoration: none;
    color: #333333;
  }
}

@media (max-width: 600px) {
  .slider {
    margin-left: 21px !important;
  }

  .swiper-slide {
    max-width: 190px !important;
    margin-top: -100px;

    img {
      transform: scale(0.5) translateX(-50%);
    }

    ul {
      margin-top: -70px;
      li {
        font-size: 12px !important;
      }

      &:before {
        margin-top: 3.5px !important;
        margin-right: 3px !important;
        min-width: 3px !important;
        width: 3px !important;
        min-height: 3px !important;
        height: 3px !important;
      }
    }
  }
}
</style>
