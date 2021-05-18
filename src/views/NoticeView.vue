<template>
  <div class="wrapper">
    <div class="row">
      <div class="col-12 col-md-9 info">
        <div class="info-head">
          Juin 05 2021
        </div>
        <div class="info-content">
          <div class="info-content-title">
            Cooperation in the distribution of test kits for early detection of
            signs of the spread of new coronavirus infection
          </div>
          <div class="info-content-text">
            <component :is="current" class="mt-5" />
          </div>
        </div>
      </div>
      <div class="col-md-3 years">
        <span class="years-title">
          Liste des années
        </span>
        <ul class="list-group">
          <li class="list-group-item" v-for="(n, index) in 7" :key="index">
            2021
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="footer">
          <span class="footer-link">Acceuil</span>
          <span class="footer-arrow">></span>
          <span class="footer-link">Informations</span>
          <span class="footer-arrow">></span>
          <span class="footer-link">2021</span>
          <span class="footer-arrow">></span>
          <span class="footer-arrow">
            Cooperation in the distribution of test kits for early detection of
            signs of the spread of new coronavirus infection</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      componentToDisplay: null
    }
  },
  computed: {
    current () {
      if (this.componentToDisplay) {
        return () => import('@/components/notices/' + this.componentToDisplay)
      }
      return () => import('@/components/notices/LoadingNotice.vue')
    }
  },
  mounted () {
    this.componentToDisplay = 'Notice' + this.$route.query.id + '.vue'
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/sass/main.scss";

.info {
  padding-top: 5rem;

  &-head {
    font-size: $default-font-size;
    padding-bottom: 2rem;
    border-bottom: solid 1px $color-secondary;
  }
  &-content {
    &-title {
      padding-top: 5rem;
      font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
      font-size: 4rem;
    }
  }
}
.years{
  padding-top: 5rem;

  &-title{
    font-family: quick;
    font-size: 3rem;
  }
}

.list-group{
  margin-top: 5rem;

  &-item{
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid $color-secondary !important;
    font-size: 1.5rem;
    cursor: pointer;
    &:not(:last-child){
      margin-bottom: 2rem;
    }
    &:hover{
      font-weight: 800;
    }
  }
}
.footer {
  padding: 3rem 0 3rem 0;
  border-top: 1px solid $color-secondary;
  display: flex;

  &-link,
  &-arrow {
    margin-right: 1rem;
    font-size: 1.2rem;
  }
  &-link {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      font-weight: 800;
    }
  }
}
</style>
