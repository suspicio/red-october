<template>
  <div class="production__action">
    <div class="g-container">
      <centralized-heading
        class="size"
        :text="'Продукция, участвующая в акции'"
      ></centralized-heading>
      <div class="slider__wrapper">
        <div v-swiper:mySwiper="swiperOption" class="slider">
          <div class="swiper-wrapper">
            <div v-for="(slide, index) in slides" :key="index" class="swiper-slide">
              <div class="image__wrapper">
                <img :src="slide.img">
              </div>
              <p>{{ slide.desc }}</p>
            </div>
          </div>
        </div>
        <div class="red__button left swiper-button-prev">
          <svg fill="none" height="13" viewBox="0 0 8 13" width="8" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.14827 13.0001C6.01382 13.0005 5.88097 12.9708 5.75949 12.9132C5.638 12.8556 5.53098 12.7715 5.44627 12.6671L1.09927 7.26706C0.966897 7.10602 0.894531 6.90402 0.894531 6.69555C0.894531 6.48709 0.966897 6.28509 1.09927 6.12405L5.59927 0.724053C5.75204 0.540258 5.97156 0.424676 6.20954 0.402734C6.44752 0.380792 6.68448 0.454288 6.86827 0.607053C7.05207 0.759818 7.16765 0.979338 7.18959 1.21732C7.21153 1.45531 7.13804 1.69226 6.98527 1.87605L2.96227 6.70006L6.85027 11.5241C6.96033 11.6562 7.03024 11.817 7.05173 11.9876C7.07322 12.1582 7.04539 12.3314 6.97154 12.4867C6.89769 12.6419 6.78091 12.7728 6.63501 12.8638C6.48911 12.9548 6.3202 13.0021 6.14827 13.0001Z"
              fill="white"/>
          </svg>
        </div>

        <div class="red__button right swiper-button-next">
          <svg fill="none" height="13" viewBox="0 0 8 13" width="8" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.8488 13.0001C1.98325 13.0006 2.1161 12.9709 2.23758 12.9133C2.35907 12.8556 2.46609 12.7715 2.5508 12.6671L6.8978 7.26712C7.03017 7.10608 7.10254 6.90408 7.10254 6.69562C7.10254 6.48715 7.03017 6.28516 6.8978 6.12412L2.3978 0.724114C2.24503 0.540319 2.02551 0.424737 1.78753 0.402795C1.54955 0.380853 1.31259 0.454349 1.1288 0.607114C0.945004 0.759879 0.829422 0.979399 0.80748 1.21738C0.785538 1.45537 0.859034 1.69232 1.0118 1.87611L5.0348 6.70012L1.1468 11.5241C1.03674 11.6562 0.966835 11.8171 0.945343 11.9877C0.923851 12.1583 0.951677 12.3315 1.02553 12.4867C1.09938 12.642 1.21616 12.7729 1.36206 12.8639C1.50796 12.9548 1.67687 13.0021 1.8488 13.0001Z"
              fill="white"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CentralizedHeading from '@/components/CentralizedHeading'

export default {
  name: 'ProductionInAction',
  components: { CentralizedHeading },
  data () {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 27,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      slides: require('@/content/ProductionInAction.json')
    }
  },
  created () {
    if (window.innerWidth < 768) {
      this.swiperOption.slidesPerView = 2
    }
  }
}
</script>

<style lang="scss" scoped>
.production__action {
  background-color: #F3E6DA;
  position: relative;
  overflow: hidden;
  padding-bottom: 100px;

  .g-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .slider__wrapper {
      position: relative;
      overflow: visible;

      .slider {
        overflow: hidden;
        margin: 54px auto 0;
        width: 100%;
        max-width: 70vw;

        .swiper-slide {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .image__wrapper {
            display: flex;
            align-items: center;
            min-height: 300px;
          }

          p {
            margin: 0 auto;
            text-align: center;
            max-width: 180px;

            font-family: 'Zen Kaku Gothic New', sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 14.4px;
            line-height: 21px;
          }
        }
      }
    }
  }
}

.red__button {
  position: absolute;
  width: 45px;
  height: 45px;
  z-index: 1;
  background-color: #D12E27;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
}

.left {
  left: -70px;
}

.right {
  right: -50px;
}

.swiper-button-next {
  &:after {
    display: none;
  }
}

.swiper-button-prev {
  &:after {
    display: none;
  }
}

@media (max-width: 768px) {
  .image__wrapper {
    min-height: 180px !important;

    img {
      max-width: 130px !important;
      max-height: 150px !important;
    }
  }

  .swiper-slide {
    p {
      font-size: 12px !important;
    }
  }

  .size {
    font-size: 22px !important;
  }

  .red__button {
    display: none;
  }
}
</style>
