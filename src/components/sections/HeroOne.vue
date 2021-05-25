<template>
  <div class="hero-slider-area">
    <div class="hero-slider__container-area">
      <div class="swiper-container hero-slider__container">
        <div class="swiper-wrapper hero-slider__wrapper">
          <swiper :options="swiperOption">
            <!--=======  single slider item  =======-->
            <div
              class="swiper-slide hero-slider__single-item"
              :style="{ backgroundImage: `url(${item.image})` }"
              v-for="item in heroOne"
              :key="item.id"
            >
              <div class="hero-slider__content-wrapper">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-12">
                      <div
                        class="hero-slider__content"
                        :class="[item.addClass]"
                      >
                        <h2 class="hero-slider__title">{{ item.title }}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--=======  End of single slider item  =======-->
            <div
              class="ht-swiper-button-prev ht-swiper-button-prev-13 ht-swiper-button-nav d-none d-xl-block"
            >
              <i class="ion-ios-arrow-left"></i>
            </div>
            <div
              class="ht-swiper-button-next ht-swiper-button-next-13 ht-swiper-button-nav d-none d-xl-block"
            >
              <i class="ion-ios-arrow-forward"></i>
            </div>
          </swiper>
        </div>
      </div>
    </div>
      <div class="col-12 col-md-6 search">
        <div class="search-flight">
          <div class="d-flex">
            <div
              class="flights-type"
              id="departureS"
              @click="underlineS('departureS')"
            >
              <img
                class="img"
                src="../../assets/img/icon/departures.png"
                alt=""
              />
              <span class="title">Départs</span>
            </div>
            <div
              class="flights-type"
              id="arrivalS"
              @click="underlineS('arrivalS')"
            >
              <img
                class="img"
                src="../../assets/img/icon/arrivals.png"
                alt=""
              />
              <span class="title">Arrivés</span>
            </div>
          </div>
          <div class="search-flight-data">
            <input type="text" placeholder="Vols/" class="data-input" />
            <button id="text" class="data-button">Rechercher</button>
            <button id="icon" class="data-button">
              <font-awesome-icon class="icon " icon="search" />
            </button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ['sliderData'],
  data () {
    return {
      heroOne: [
        {
          title: 'Le Carrefour des trois continents',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incididunt ut labore et dolore.',
          image: require('@/assets/img/aeroport/airport1.jpg'),
          addClass: 'hero-slider__content--center'

        },
        {
          title: 'Le Carrefour des trois continents',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incididunt ut labore et dolore.',
          image: require('@/assets/img/aeroport/airport2.jpg'),
          addClass: 'hero-slider__content--center'
        },
        {
          title: 'Le Carrefour des trois continents',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incididunt ut labore et dolore.',
          image: require('@/assets/img/aeroport/airport3.jpg'),
          addClass: 'hero-slider__content--center'
        }
      ],
      swiperOption: {
        speed: 2000,
        loop: true,
        effect: 'fade',
        autoplay: true,
        spaceBetween: 30,
        navigation: {
          nextEl: '.ht-swiper-button-next',
          prevEl: '.ht-swiper-button-prev'
        }
      }
    }
  },
  mounted () {
    const dpS = document.getElementById('departureS')
    dpS.style.borderBottom = 'solid 2px #2d81f0'
  },
  methods: {
    underlineS (id) {
      const dp = document.getElementById('departureS')
      const ar = document.getElementById('arrivalS')
      switch (id) {
        case 'departureS':
          dp.style.borderBottom = 'solid 2px #2d81f0'
          ar.style.borderBottom = 'none'
          break
        case 'arrivalS':
          ar.style.borderBottom = 'solid 2px #2d81f0'
          dp.style.borderBottom = 'none'
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/sass/main.scss";
@import "../../assets/scss/style.scss";

.hero-slider-area{
position: relative;
}
.search{
    position: absolute;
    bottom: 0;
    margin-bottom: 2rem;
    z-index: 999;
}
.airlines {
  width: 10rem;
  height: auto;
}

.flights-type,
.all {
  cursor: pointer;
  padding: 1rem;
  &:not(:last-child) {
    margin-right: 3rem;
  }
}
.img {
  height: 2rem;
}
.title {
  font-family: quick;
  font-size: 1.2rem;
  margin-left: 1rem;
}

///////////// search flight
.search-flight {
  width: 100%;
  background: rgba($color: #ffffff, $alpha: .9);
  height: 10rem;
  padding: 0 1rem 0 1rem;

  &-data {
    display: flex;
    justify-content: space-around;
    .data-input {
      height: 4rem;
      border: 0 0 1px 0;
      background: transparent;
      width: 70%;
      outline: none !important;
      border-top: none;
      border-right: none;
      border-left: none;
      font-size: 1.5rem;
      color: $theme-color--default;
      font-family: quick;
      &:active,
      &:hover,
      &:visited {
        outline: none;
      }
    }
    .data-button {
      height: 4rem;
      border: none !important;
      background: $theme-color--default;
      &:hover {
        background: $theme-color--secondary;
        transition: all 1s;
      }
      width: 15%;
      font-size: 1.2rem;
      color: white;
      font-family: quick;
    }
  }
  #text {
    @include respond(tablet) {
      display: none;
    }
  }
  #icon {
    @include respond(only-big-screen) {
      display: none;
    }
  }
}

.swiper-slide{
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>
