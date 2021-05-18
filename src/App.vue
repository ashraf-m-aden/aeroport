<template>
  <div id="app">
    <Header class="header-wrapper"></Header>
    <div class="container-fluid">
      <router-view />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Header,
    Footer
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
