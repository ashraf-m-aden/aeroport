<template>
  <div>
    <HeroOne :sliderData="data.heroOne"></HeroOne>
    <div class="row">
      <Notice />
      <ServiceSlider />

      <FunFact />

      <div class="col-12">
        <div class="covid-banner">
          <div class="covid-banner-text">
            Mesures Preventives COVID 19
          </div>
        </div>
      </div>
      <BrandCarousel />
    </div>
  </div>
</template>

<script>
import HeroOne from '@/components/sections/HeroOne.vue'
import Notice from '@/components/Notice.vue'
import BrandCarousel from '@/components/BrandCarousel.vue'
import FunFact from '@/components/FunFact.vue'
import ServiceSlider from '@/components/sections/ServiceSlider.vue'
import data from '@/data/slider.json'
export default {
  data () {
    return {
      data
    }
  },
  components: {
    HeroOne,
    FunFact,
    BrandCarousel,
    ServiceSlider,
    Notice
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/sass/main.scss";

.covid-banner {
  width: 80%;
  height: 30rem;
  margin-top: 5rem;
  margin-left: auto;
  margin-right: auto;
  background-image: linear-gradient(
      to right bottom,
      rgba($color-primary, 0.8),
      rgba($color-secondary, 0.8)
    ),
    url("../assets/img/banner/covid.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  cursor: pointer;
  @include respond(phone) {
    width: 100%;
    height: 20rem;
  }

  &-text {
    font-size: 6rem;
    color: white;
    text-align: center;
    position: absolute;
    font-family: quick;
    @include centerElement;
    width: 100%;
    text-decoration: underline #620615;
    text-underline-offset: 1rem;

    @include respond(tablet) {
      font-size: 4rem;
    }
    @include respond(phone) {
      font-size: 3rem;
    }
  }
}
</style>
