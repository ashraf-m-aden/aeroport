<template>
  <!--====================  brand logo area ====================-->
  <div
    class="brand-logo-slider-area section-space--inner--60"
    :class="addClass"
  >
    <div class="container">
      <!-- brand logo slider -->
      <div class="brand-logo-slider__container-area">
        <div class="swiper-container brand-logo-slider__container">
          <div class="swiper-wrapper brand-logo-slider__wrapper">
            <swiper :options="swiperOption">
              <div
                class="swiper-slide brand-logo-slider__single"
                v-for="item in logos"
                :key="item.id"
              >
                <div class="image text-center">
                    <img
                      :src="item.brandlogo"
                      class="brand"
                      alt="brand logo"
                    />
                </div>
              </div>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--====================  End of brand logo area  ====================-->
</template>

<script>
import data from '../data/brandlogo.json'
export default {
  props: ['addClass'],
  data () {
    return {
      data,
      swiperOption: {
        loop: true,
        speed: 1000,
        watchSlidesVisibility: true,
        spaceBetween: 30,
        autoplay: {
          delay: 3000
        },
        // Responsive breakpoints
        breakpoints: {
          1499: {
            slidesPerView: 4
          },

          768: {
            slidesPerView: 3
          },

          480: {
            slidesPerView: 2
          }
        }
      },
      logos: [
        {
          brandlogo: require('../assets/img/brands/aac.png')
        },
        {
          brandlogo: require('../assets/img/brands/air djibouti.png')
        },
        {
          brandlogo: require('../assets/img/brands/transport.jpg')
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/style.scss';
@import '../assets/sass/main.scss';

.image{
  height: 10rem;
.brand{
  max-height: 100% !important;
  max-width: 100%;
}
}
</style>
