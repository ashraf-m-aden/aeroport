<template>
    <div class="footer-intro-wrapper">
        <div class="footer-logo">
            <router-link to="/">
                <img src="../assets/airport.jpg" class="logo" alt="logo">
            </router-link>
        </div>
        <div class="footer-desc">
            {{ desc }}
        </div>
    </div>
</template>

<script>
export default {
  props: ['logo', 'desc']
}
</script>

<style lang="scss">
@import "../assets/sass/main.scss";
@import "../assets/scss/style.scss";

.footer-desc{
  color: white !important;
  font-family: quick !important;
}
.logo{
  border-radius: 2rem;
}
</style>
