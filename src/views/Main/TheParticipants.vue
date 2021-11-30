<template>
  <div class="the__participants">
    <div class="g-container">
      <centralized-heading
        :text="'Участники конкурса'"
        class="size"
      >
        <span class="the__participants-hash">#РетроЧелленджМагнит</span>
      </centralized-heading>
      <div v-swiper:mySwiper="swiperOption" class="slider">
        <div class="swiper-wrapper">
          <div v-for="(slide, index) in slides" :key="index" class="swiper-slide">
            <div class="slide__box"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CentralizedHeading from '@/components/CentralizedHeading'

export default {
  name: 'TheParticipants',
  components: { CentralizedHeading },
  data () {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 98
      },
      slides: require('@/content/WinPrizeSiled.json')
    }
  }
}
</script>

<style lang="scss" scoped>
.the__participants {
  background-color: white;
  position: relative;
  overflow: hidden;

  &-hash {
    font-weight: bold;
    font-size: 24px;
    font-family: 'Zen Kaku Gothic New', sans-serif;
    text-decoration: underline;
  }

  .slider {
    display: block;
    overflow: visible;
    margin-top: 54px;
    min-height: 350px;
    margin-left: 150px;

    .swiper-wrapper {
      max-height: 248px;
      min-height: 248px;

      .swiper-slide {
        max-width: 248px;
        max-height: 248px;
        min-height: 248px;
        width: 100%;
        height: 100%;

        .slide__box {
          max-width: 248px;
          max-height: 248px;
          min-height: 248px;
          width: 100%;
          height: 100%;
          background-color: #F8E577;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .slider {
    margin-top: 22px !important;
    min-height: 170px !important;
    margin-left: 10px !important;

    .swiper-wrapper {
      max-height: 140px !important;
      min-height: 140px !important;
      width: fit-content !important;

      .swiper-slide {
        max-width: 140px !important;
        max-height: 140px !important;
        min-height: 140px !important;
        margin-right: 50px !important;

        .slide__box {
          max-width: 140px !important;
          max-height: 140px !important;
          min-height: 140px !important;
        }
      }
    }
  }
  .size {
    font-size: 22px;
  }
}
</style>
