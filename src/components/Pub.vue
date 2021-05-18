<template>
    <div class="col-12 pubs">
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
      >
        <Slide class="pub" v-for="(n, index) in 7" :key="index">
          <img src="../assets/img/product/1.png" class="pub-img" alt="" />
          <div class="pub-title"></div>
        </Slide>
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
      timeout: 2000,
      loop: true,
      perPage: 5,
      navigationEnabled: false,
      paginationSize: 8,
      paginationEnabled: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';
//////// pub
.pub {
  text-align: center;
  &:not(:last-child) {
    margin-right: 2rem;
  }
  &-img {
    height: 10rem;

    @include respond(tablet-land) {
      height: 25rem;
    }
        @include respond(tablet) {
      height: 20rem;
    }
            @include respond(phone) {
      height: 15rem;
    }
  }
}
.pubs{
background: rgba($color: #c9c9c9, $alpha: .4) !important;
padding: 5rem 0 5rem 0;
margin-top: 1rem;
}

.carousel {
  width: 70%;
  margin-right: auto;
  margin-left: auto;
  @include respond(phone){
    width: 100%;
  }
}
</style>
