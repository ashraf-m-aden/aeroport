<template>
  <div id="app">
    <Header></Header>
    <div class="container-fluid">
      <router-view />
    </div>
        <Footer />

        <OffCanvasMobileMenu />

        <!-- back to top start -->
        <back-to-top class="scroll-top" bottom="60px">
            <i class="ion-android-arrow-up"></i>
        </back-to-top>
        <!-- back to top end -->  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu.vue'
export default {
  components: {
    Header,
    Footer,
    OffCanvasMobileMenu
  }
}
</script>

<style lang="scss">
@import "./assets/sass/main.scss";
@font-face {
  font-family: "quick";
  src: url("./fonts/Quicksand-VariableFont_wght.ttf") format("truetype");
}
.container-fluid {
  padding: 0 !important;
}
</style>
