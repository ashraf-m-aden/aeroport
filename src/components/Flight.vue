<template>
  <div class="row">
    <div class="col-12 col-md-8">
      <div class="row">
        <div class="col-12">
          <div class="search-flight">
            <div class="d-flex">
              <div
                class="flights-type"
                id="departureS"
                @click="underlineS('departureS')"
              >
                <img
                  class="img"
                  src="../assets/img/icon/departures.png"
                  alt=""
                />
                <span class="title">Départs</span>
              </div>
              <div
                class="flights-type"
                id="arrivalS"
                @click="underlineS('arrivalS')"
              >
                <img class="img" src="../assets/img/icon/arrivals.png" alt="" />
                <span class="title">Arrivés</span>
              </div>
            </div>
            <div class="search-flight-data">
              <input type="text" placeholder="Vols/" class="data-input" />
              <button id="text" class="data-button">Rechercher</button>
              <button id="icon" class="data-button">
                <font-awesome-icon class="icon " icon="search" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 d-flex">
          <div
            class="flights-type"
            id="departure"
            @click="underline('departure')"
          >
            <img class="img" src="../assets/img/icon/departures.png" alt="" />
            <span class="title">Départs</span>
          </div>
          <div class="flights-type" id="arrival" @click="underline('arrival')">
            <img class="img" src="../assets/img/icon/arrivals.png" alt="" />
            <span class="title">Arrivés</span>
          </div>
          <div class="all ml-auto">
            <span class="title">Tous les vols</span>
          </div>
        </div>
        <div class="col-12 table-desktop">
          <table class="table" id="table-departure">
            <thead>
              <tr class="font-weight-bold">
                <td>Date</td>
                <td>Heure</td>
                <td>Airline</td>
                <td>Vol</td>
                <td>Provenance</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span class="flight-data">20.05.2021</span>
                </td>
                <td><span class="flight-data">9:00</span></td>
                <td>
                  <img
                    src="../assets/img/airlines/ethiopian.png"
                    class="airlines flight-data"
                    alt="ethiopian airlines"
                  />
                </td>
                <td><span class="flight-data">ETH958</span></td>
                <td><span class="flight-data">Addis-Abeba</span></td>
              </tr>
              <tr>
                <td>
                  <span class="flight-data">20.05.2021</span>
                </td>
                <td><span class="flight-data">9:00</span></td>
                <td>
                  <img
                    src="../assets/img/airlines/ethiopian.png"
                    class="airlines flight-data"
                    alt="ethiopian airlines"
                  />
                </td>
                <td><span class="flight-data">ETH958</span></td>
                <td><span class="flight-data">Addis-Abeba</span></td>
              </tr>
              <tr>
                <td>
                  <span class="flight-data">20.05.2021</span>
                </td>
                <td><span class="flight-data">9:00</span></td>
                <td>
                  <img
                    src="../assets/img/airlines/ethiopian.png"
                    class="airlines flight-data"
                    alt="ethiopian airlines"
                  />
                </td>
                <td><span class="flight-data">ETH958</span></td>
                <td><span class="flight-data">Addis-Abeba</span></td>
              </tr>
              <tr>
                <td>
                  <span class="flight-data">20.05.2021</span>
                </td>
                <td><span class="flight-data">9:00</span></td>
                <td>
                  <img
                    src="../assets/img/airlines/ethiopian.png"
                    class="airlines flight-data"
                    alt="ethiopian airlines"
                  />
                </td>
                <td><span class="flight-data">ETH958</span></td>
                <td><span class="flight-data">Addis-Abeba</span></td>
              </tr>
              <tr>
                <td>
                  <span class="flight-data">20.05.2021</span>
                </td>
                <td><span class="flight-data">9:00</span></td>
                <td>
                  <img
                    src="../assets/img/airlines/ethiopian.png"
                    class="airlines flight-data"
                    alt="ethiopian airlines"
                  />
                </td>
                <td><span class="flight-data">ETH958</span></td>
                <td><span class="flight-data">Addis-Abeba</span></td>
              </tr>
              <tr>
                <td>
                  <span class="flight-data">20.05.2021</span>
                </td>
                <td><span class="flight-data">9:00</span></td>
                <td>
                  <img
                    src="../assets/img/airlines/ethiopian.png"
                    class="airlines flight-data"
                    alt="ethiopian airlines"
                  />
                </td>
                <td><span class="flight-data">ETH958</span></td>
                <td><span class="flight-data">Addis-Abeba</span></td>
              </tr>
              <tr>
                <td>
                  <span class="flight-data">20.05.2021</span>
                </td>
                <td><span class="flight-data">9:00</span></td>
                <td>
                  <img
                    src="../assets/img/airlines/ethiopian.png"
                    class="airlines flight-data"
                    alt="ethiopian airlines"
                  />
                </td>
                <td><span class="flight-data">ETH958</span></td>
                <td><span class="flight-data">Addis-Abeba</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <Notice></Notice>
  </div>
</template>

<script>
import Notice from '@/components/Notice.vue'
export default {
  components: {
    Notice
  },
  data () {
    return {
    }
  },
  mounted () {
    const dpS = document.getElementById('departureS')
    const dp = document.getElementById('departure')
    dp.style.borderBottom = 'solid 5px #061539'
    dpS.style.borderBottom = 'solid 5px #061539'
  },
  methods: {
    underline (id) {
      const dp = document.getElementById('departure')
      const ar = document.getElementById('arrival')
      switch (id) {
        case 'departure':
          dp.style.borderBottom = 'solid 5px #061539'
          ar.style.borderBottom = 'none'
          break
        case 'arrival':
          ar.style.borderBottom = 'solid 5px #061539'
          dp.style.borderBottom = 'none'
          break
      }
    },
    underlineS (id) {
      const dp = document.getElementById('departureS')
      const ar = document.getElementById('arrivalS')
      switch (id) {
        case 'departureS':
          dp.style.borderBottom = 'solid 5px #061539'
          ar.style.borderBottom = 'none'
          break
        case 'arrivalS':
          ar.style.borderBottom = 'solid 5px #061539'
          dp.style.borderBottom = 'none'
          break
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/sass/main.scss";

.col-12,
.col-4 {
  margin-top: 2rem;
}
.airlines {
  width: 10rem;
  height: auto;
}

.flights-type,
.all {
  cursor: pointer;
  padding: 1rem;
  &:not(:last-child) {
    margin-right: 3rem;
  }
}
.img {
  height: 3rem;
}
.title {
  font-family: quick;
  font-size: 2rem;
  margin-left: 1rem;
}

///////////// search flight
.search-flight {
  width: 100%;
  background: #203f8841;
  height: 15rem;
  padding: 0 1rem 0 1rem;
  border-radius: 1rem;

  &-data {
    display: flex;
    justify-content: space-around;
    .data-input {
      height: 5rem;
      border: 0 0 1px 0;
      background: transparent;
      margin-top: 2rem;
      width: 70%;
      outline: none !important;
      border-top: none;
      border-right: none;
      border-left: none;
      font-size: 2rem;
      color: #061539;
      font-family: quick;
      &:active,
      &:hover,
      &:visited {
        outline: none;
      }
    }
    .data-button {
      height: 5rem;
      border: none !important;
      background: #203f88f5;
      &:hover {
        background: #4f72c4f5;
        transition: all 1s;
      }
      margin-top: 2rem;
      width: 15%;
      font-size: 1.5rem;
      color: white;
      font-family: quick;
    }
  }
  #text {
    @include respond(tablet) {
      display: none;
    }
  }
  #icon {
    @include respond(only-big-screen) {
      display: none;
    }
  }
}

////////////////// tableau flight
.table-desktop {
  margin-top: -0.1rem;
}
.table {
}
td {
  font-family: quick;
  font-size: 1.5rem;
  font-weight: 600;
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
  color: $color-secondary;
}
.flight-data {
  margin-top: 1rem;
  display: block;
}
#departure {
  border-bottom: 1px solid #061539;
}
.airlines {
  margin-top: 0rem;
  height: 4rem;
  width: auto;
  @include respond(tablet) {
    &:not(:last-child) {
      margin-right: 2rem !important;
    }
  }
}

</style>
