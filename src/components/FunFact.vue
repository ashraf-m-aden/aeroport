<template>
  <!--====================  fun fact area ====================-->
  <div
    class="funfact-section section-space--inner--100"
    :style="{ backgroundImage: `url(${data.bgImg})` }"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="fun-fact-wrapper">
            <div class="row">
              <div
                class="single-fact col-md-3 col-6 section-space--bottom--30"
                v-for="item in funFacts"
                :key="item.id"
              >
                <img :src="item.icon" class="counter-img" alt="icon" />
                <h1 class="counter">
                  <ICountUp :endVal="item.counter" />
                </h1>
                <h4>{{ item.title }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--====================  End of fun fact area  ====================-->
</template>

<script>
import data from '../data/funfact.json'

import ICountUp from 'vue-countup-v2'
export default {
  components: {
    ICountUp
  },
  data () {
    return {
      data,
      delay: 300,
      funFacts: [
        {
          icon: require('../assets/img/icon/airplane.png'),
          counter: 598,
          title: 'Voyages'
        },
        {
          icon: require('../assets/img/icon/passenger.png'),
          counter: 128,
          title: 'Voyageurs'
        },
        {
          icon: require('../assets/img/icon/airplane.png'),
          counter: 598,
          title: 'Voyages'
        },
        {
          icon: require('../assets/img/icon/passenger.png'),
          counter: 128,
          title: 'Voyageurs'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/sass/main.scss";
@import "../assets/scss/style.scss";

.counter-img {
  width: 10rem !important;
}
</style>
