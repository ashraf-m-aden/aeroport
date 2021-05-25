<template>
  <!--====================  service grid slider area ====================-->
  <div class="service-grid-slider-area section-space--inner--120">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title-area text-center">
            <h2 class="section-title section-space--bottom--50">
              {{ data.serviceOne.sectionTitle }}<span class="title-icon"></span>
            </h2>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="service-slider">
            <div class="swiper-container service-slider__container">
              <div class="swiper-wrapper service-slider__wrapper">
                <swiper :options="swiperOption">
                  <div
                    class="swiper-slide"
                    v-for="service in serviceList"
                    :key="service.id"
                  >
                    <ServiceItem :service="service" />
                  </div>
                </swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--====================  End of service grid slider area  ====================-->
</template>

<script>
import ServiceItem from '@/components/ServiceItem.vue'
import data from '../../data/service.json'
export default {
  components: {
    ServiceItem
  },
  data () {
    return {
      data,
      swiperOption: {
        loop: true,
        speed: 1000,
        watchSlidesVisibility: true,
        spaceBetween: 30,
        // Responsive breakpoints
        breakpoints: {
          2000: {
            slidesPerView: 3
          },
          1200: {
            slidesPerView: 3
          },

          768: {
            slidesPerView: 2
          },

          575: {
            slidesPerView: 1
          }
        }
      },
      serviceList: [
        {
          image: require('../../assets/img/services/hotel.jpg'),
          icon: 'hotel',
          title: 'Hotels',
          desc:
            'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor'
        },
        {
          image: require('../../assets/img/services/food.jpg'),
          icon: 'hamburger',
          title: 'Les delices de Djibouti',
          desc:
            'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor'
        },
        {
          image: require('../../assets/img/services/tourisme.jpg'),
          icon: 'suitcase',
          title: 'Voyagez, revez...',
          desc:
            'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor'
        }
      ]
    }
  }
}
</script>
