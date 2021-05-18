<template>
  <div class="col-12">
    <Carousel
      class=" carousel"
      ref="carousel"
      :navigationEnabled="navigationEnabled"
      :autoplay="autoPlay"
      :autoplayTimeout="timeout"
      :loop="loop"
      :perPage="perPage"
      :paginationSize="paginationSize"
      :paginationEnabled="paginationEnabled"
      :paginationPosition="paginationPosition"
      @page-change="handlePageChange"
    >
      <Slide class="slide" v-for="(img, index) in imgSource" :key="index">
        <div class="slide-img" :style="{ backgroundImage: `url('${img}')` }">
        </div>
      </Slide>
      <div class="custom-pagination"></div>
    </Carousel>
  </div>
</template>
<script>
import { Carousel, Slide } from '@jambonn/vue-concise-carousel'
import '@jambonn/vue-concise-carousel/dist/vue-concise-carousel.css'

export default {
  components: {
    Carousel,
    Slide
  },
  data () {
    return {
      currentPage: 0,
      isEnableForward: true,
      autoPlay: true,
      timeout: 10000,
      loop: true,
      perPage: 1,
      navigationEnabled: false,
      paginationSize: 8,
      paginationPosition: 'top-overlay',
      paginationEnabled: false,
      imgSource: [
        require('@/assets/aeroport/airport2.jpg'),
        require('@/assets/aeroport/airport3.jpg'),
        require('@/assets/aeroport/airport4.jpg')
      ]
    }
  },
  methods: {
    handlePageChange (currentPage) {
      this.currentPage = currentPage
      this.isEnableForward = this.$refs.carousel.canAdvanceForward
    },
    onChangePagination (index) {
      this.$refs.carousel.goToPage(index, 'pagination')
    },
    onChangeNavigation (direction) {
      this.$refs.carousel.handleNavigation(direction)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/sass/main.scss";

.carousel {
  width: 100% !important;
  .slide {
    position: relative;
    &-img {
      width: 100%;
      height: 70vh;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      @include respond(tablet-land) {
        height: 50vh;
      }
      @include respond(tablet) {
        height: 60vh;
      }
    }
    &-title {
      z-index: 1;
      position: absolute;
      @include centerElement;
      font-size: 7rem;
      font-weight: 1000;
      max-width: 100%;
      width: 60%;
      text-align: center;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      color: white;

      @include respond(phone) {
        font-size: 5rem;
        width: 100%;
      }
    }
  }
}
.col-12 {
  padding: 0 !important;
}
</style>
