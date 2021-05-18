<template>
  <div class="col-12 col-md-4 notice">
    <span class="notice-title">
      Informations
    </span>
    <table class="table table-striped mt-5">
      <tbody>
        <tr v-for="(n, index) in 7" :key="index" @click="check">
          <td class="notice-div">
            <div class="notice-div-date">
              Juin 05 2021
            </div>
            <div class="notice-div-title">
              Cooperation in the distribution of test kits for early detection of signs of the spread of new coronavirus infection
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  methods: {
    check () {
      this.$router.push({ path: '/notice', query: { id: 2 } })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/sass/main.scss';

.notice{
text-align: center;
  &-title{
    font-family: quick;
    font-size: 3rem;
    font-weight: 800;
  }

  &-div{
    text-align: left;
    padding: 2rem 1rem 2rem 1rem;
    cursor: pointer;
    &-date, &-title{
      font-size: $default-font-size;
    }
    &-title{
      margin-top: 1rem;
      &::before{
        content: ">";
        color: $color-primary;
        font-size: 1.5rem;
        font-weight: 800 !important;

      }
    }

    &:hover{
      .notice-div-title{
        text-decoration: underline;
        transition: all 1s;
              &::before{
        content: ">";
        color: $color-primary;
        font: bolder;

      }
      }
    }
  }
}

// .table-striped>tbody>tr:nth-child(odd)>td,
// .table-striped>tbody>tr:nth-child(odd)>th {
//    background-color: rgba($color: $color-secondary, $alpha: .001); // Choose your own color here
//  }
</style>
