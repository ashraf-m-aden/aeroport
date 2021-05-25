<template>
  <div class="col-12 col-md-10 text-center notice">
    <swiper :options="swiperOption">
      <div
        class="swiper-slide"
        v-for="(n, index) in 7"
        :key="index"
        @click="check"
      >
        <div class="notice-div">
          <div class="notice-div-img">
            <font-awesome-icon class="icon " icon="info" />
          </div>
          <div class="notice-div-content">
            <div class="notice-div-date">
              Juin 05 2021
            </div>
            <div class="notice-div-title">
              Cooperation in the distribution of test kits for early detection
              of signs of the spread of new coronavirus infection
            </div>
          </div>
        </div>
      </div>
    </swiper>
                <router-link to="/notice?id=2">
                  <font-awesome-icon class="eye " icon="eye" />
                </router-link>

  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        loop: true,
        speed: 1000,
        watchSlidesVisibility: false,
        spaceBetween: 30,
        // Responsive breakpoints
        breakpoints: {
          3000: {
            slidesPerView: 1
          }
        }
      }
    }
  },
  methods: {
    check () {
      this.$router.push({ path: '/notice', query: { id: 2 } })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/sass/main.scss";
@import "../assets/scss/style.scss";

.notice {
  text-align: center;
  border: solid 1px black;
  margin-top: 2rem;
  padding: 2rem 1rem;
  background: rgba($color: $theme-color--secondary, $alpha: .1);
  margin-right: auto;
  margin-left: auto;
  position: relative;

 &-div{
   display: flex;
    &-img {
      display: flex;
      align-items: center;
      justify-content: center;
      background: $theme-color--default;
      color: white;
      font-size: 5rem;
      width: 10rem;
  }
  &-content {
    text-align: left;
    padding: 2rem 1rem 2rem 1rem;
    cursor: pointer;
    &-date,
    &-title {
      font-size: $default-font-size;
    }
    &-title {
      margin-top: 1rem;
      &::before {
        content: ">";
        color: $color-primary;
        font-size: 1.5rem;
        font-weight: 800 !important;
      }
    }

    &:hover {
      .notice-div-content-title {
        text-decoration: underline;
        transition: all 1s;
        &::before {
          content: ">";
          color: $color-primary;
          font: bolder;
        }
      }
    }
  }
 }

 .eye{
position: absolute;
top: 0;
right: 0;
margin-right: 1rem;
cursor: pointer;
color: $theme-color--default;
 }
}

// .table-striped>tbody>tr:nth-child(odd)>td,
// .table-striped>tbody>tr:nth-child(odd)>th {
//    background-color: rgba($color: $color-secondary, $alpha: .001); // Choose your own color here
//  }
</style>
