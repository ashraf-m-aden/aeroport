<template>
  <div class="header" id="header">
    <!-- search popup start-->
    <div class="popup-div">
      <div
        class="body-overlay border"
        id="body-overlay"
        v-show="isSearching"
      ></div>
      <div class="td-search-popup" id="td-search-popup" v-show="isSearching">
        <form action="index.html" class="search-form">
          <div class="form-group">
            <input
              type="text"
              id="search_input"
              class="form-control"
              placeholder="Rechercher"
            />
          </div>
          <button type="submit" class="submit-btn">
            <font-awesome-icon class="icon icon-popup" icon="search" />
          </button>
        </form>
      </div>
    </div>
    <!-- search popup end-->

    <!-- navbar start -->
    <nav
      v-if="!isScrolled && dashboard"
      class="navbar navbar-expand-lg d-flex flex-column "
    >
      <div class="container nav-container nav-container bgcolor">
        <img
          src="../../assets/img/airport.jpg"
          alt="img"
          class="logo navbar-brand"
          @click="menu"
        />
        <div class="nav-right-part nav-right-part-mobile  ">
          <ul class="nav-right-part-list">
            <li class="nav-right-part-list-item">
              <font-awesome-icon class="icon" icon="search" @click="search" />
            </li>
          </ul>
        </div>
        <input
          type="checkbox"
          name="togglerIcon"
          id="togglerIcon"
          class="container-checkbox"
          v-show="false"
          v-model="checked"
        />
        <label
          class="container-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#nav-collapse"
          aria-controls="nav-collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
          for="togglerIcon"
          @click="toggle"
        >
          <span class="icon"></span>
        </label>
        <ul class="menu-desktop text-center">
          <li class=" menu-item">
            <a href="#" class=" menu-item-title">Vols</a>
            <ul class="sub-menu">
              <li class="sub-menu-item">
                <a class="sub-menu-item-title" href="#"
                  >Covid-19: Informations</a
                >
              </li>
              <li class="sub-menu-item">
                <a class="sub-menu-item-title" href="#">Départs</a>
              </li>
              <li class="sub-menu-item">
                <a class="sub-menu-item-title" href="#">Arrivées</a>
              </li>
            </ul>
          </li>
          <li class=" menu-item">
            <a href="#" class="menu-item-title">Votre voyage</a>
            <ul class="sub-menu">
              <li class="sub-menu-item">
                <a class="sub-menu-item-title" href="#"
                  >Documents</a
                >
              </li>
              <li class="sub-menu-item">
                <a class="sub-menu-item-title" href="#"
                  >Bagages</a
                >
              </li>
              <li class="sub-menu-item">
                <a class="sub-menu-item-title" href="#"
                  >Assistance</a
                >
              </li>
              <li class="sub-menu-item">
                <a class="sub-menu-item-title" href="#"
                  >Douanes et controles</a
                >
              </li>
            </ul>
          </li>
          <li class=" menu-item">
            <a href="#" class="menu-item-title">Services</a>
            <ul class="sub-menu">
              <li class="sub-menu-item">
                <a class="sub-menu-item-title" href="#"
                  >Boutiques et Duty free</a
                >
              </li>
              <li class="sub-menu-item">
                <a class="sub-menu-item-title" href="#"
                  >Bagages perdus</a
                >
              </li>
              <li class="sub-menu-item">
                <a class="sub-menu-item-title" href="#"
                  >Service bages et voitures</a
                >
              </li>
            </ul>
          </li>
        </ul>
        <!-- Right aligned nav items -->

        <div class="nav-right-part nav-right-part-desktop">
          <ul class="nav-right-part-list">
            <li class="nav-right-part-list-item-desktop">
              <font-awesome-icon class="icon" icon="search" @click="search" />
            </li>
          </ul>
        </div>
      </div>
      <div class="container nav-container nav-container-mobile bgcolor">
        <ul class="navbar-nav menu-mobile text-center " id="menu-mobile">
          <li class=" menu-item menu-item-mobile">
            <a href="#" class="  menu-item-mobile-title">Home</a>
            <ul class="sub-menu sub-menu-mobile">
              <li class="sub-menu-item">
                <a
                  class="sub-menu-item-title menu-item-mobile-title"
                  href="#"
                  >Home 01</a
                >
              </li>
              <li class="sub-menu-item">
                <a
                  class="sub-menu-item-title menu-item-mobile-title"
                  href="#"
                  >Home 02</a
                >
              </li>
              <li class="sub-menu-item">
                <a
                  class="sub-menu-item-title menu-item-mobile-title"
                  href="#"
                  >Home 03</a
                >
              </li>
              <li class="sub-menu-item">
                <a class="sub-menu-item-title " href="#">Home 04</a>
              </li>
            </ul>
          </li>
          <li class=" menu-item menu-item-mobile">
            <a href="#" class=" menu-item-mobile-title">Property</a>
            <ul class="sub-menu sub-menu-mobile">
              <li class="sub-menu-item">
                <a class="sub-menu-item-title" href="#">Property</a>
              </li>
              <li class="sub-menu-item">
                <a class="sub-menu-item-title" href="#"
                  >Property Grid</a
                >
              </li>
              <li class="sub-menu-item">
                <a class="sub-menu-item-title" href="#"
                  >Left Sidebar</a
                >
              </li>
              <li class="sub-menu-item">
                <a class="sub-menu-item-title" href="#"
                  >Property Details</a
                >
              </li>
            </ul>
          </li>
          <li class=" menu-item menu-item-mobile">
            <a href="#" class=" menu-item-mobile-title">Pages</a>
            <ul class="sub-menu sub-menu-mobile">
              <li class="sub-menu-item">
                <a class="sub-menu-item-title" href="#">About</a>
              </li>
              <li class="sub-menu-item">
                <a class="sub-menu-item-title" href="#">Team</a>
              </li>
              <li class="sub-menu-item">
                <a class="sub-menu-item-title" href="#">Sign In</a>
              </li>
              <li class="sub-menu-item">
                <a class="sub-menu-item-title" href="#">Sign Up</a>
              </li>
              <li class="sub-menu-item">
                <a class="sub-menu-item-title" href="#"
                  >Add Property</a
                >
              </li>
            </ul>
          </li>

        </ul>
      </div>
    </nav>
    <nav
      class="navbar navbar-expand-lg d-flex flex-column"
      v-if="!isScrolled && !dashboard"
    >
      <div class="container nav-container nav-container bgcolor2">
        <img
          src="../../assets/img/airport.jpg"
          alt="aeroport de djibouti"
          id="logo"
          class="logo-scrolled navbar-brand"
          @click="menu"
        />
        <div class="nav-right-part nav-right-part-mobile  ">
          <ul class="nav-right-part-list-scroll">
            <li class="nav-right-part-list-scroll-item" @click="search">
              <font-awesome-icon class="icon-scroll" icon="search" />
            </li>
          </ul>
        </div>
        <input
          type="checkbox"
          name="togglerIcon"
          id="togglerIcon"
          class="container-checkbox"
          v-show="false"
          v-model="checked"
        />
        <label
          class="container-toggler-scroll"
          type="button"
          data-toggle="collapse"
          data-target="#nav-collapse"
          aria-controls="nav-collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
          for="togglerIcon"
          @click="toggle"
        >
          <span class="icon"></span>
        </label>
        <ul class="menu-desktop text-center">
          <li class="menu-item-scroll">
            <a href="#" class=" menu-item-scroll-title">Vols</a>
            <ul class="sub-menu-scroll">
              <li class="sub-menu-scroll-item">
                <a class="sub-menu-scroll-item-title" href="#"
                  >Covid-19: Informations</a
                >
              </li>
              <li class="sub-menu-scroll-item">
                <a class="sub-menu-scroll-item-title" href="#"
                  >Départs</a
                >
              </li>
              <li class="sub-menu-scroll-item">
                <a class="sub-menu-scroll-item-title" href="#"
                  >Arrivées</a
                >
              </li>
            </ul>
          </li>
          <li class="menu-item-scroll">
            <a href="#" class="menu-item-scroll-title">Votre voyage</a>
            <ul class="sub-menu-scroll">
              <li class="sub-menu-scroll-item">
                <a class="sub-menu-scroll-item-title" href="#"
                  >Documents</a
                >
              </li>
              <li class="sub-menu-scroll-item">
                <a class="sub-menu-scroll-item-title" href="#"
                  >Bagages</a
                >
              </li>
              <li class="sub-menu-scroll-item">
                <a
                  class="sub-menu-scroll-item-title"
                  href="#"
                  >Assistance</a
                >
              </li>
              <li class="sub-menu-scroll-item">
                <a
                  class="sub-menu-scroll-item-title"
                  href="#"
                  >Douanes et controles</a
                >
              </li>
            </ul>
          </li>
          <li class="menu-item-scroll">
            <a href="#" class="menu-item-scroll-title">Services</a>
            <ul class="sub-menu-scroll">
              <li class="sub-menu-scroll-item">
                <a class="sub-menu-scroll-item-title" href="#"
                  >Boutiques et Duty free</a
                >
              </li>
              <li class="sub-menu-scroll-item">
                <a class="sub-menu-scroll-item-title" href="#"
                  >Bagages perdus</a
                >
              </li>
              <li class="sub-menu-scroll-item">
                <a class="sub-menu-scroll-item-title" href="#"
                  >Service bages et voitures</a
                >
              </li>
            </ul>
          </li>
        </ul>
        <!-- Right aligned nav items -->

        <div class="nav-right-part nav-right-part-desktop">
          <ul class="nav-right-part-list-scroll">
            <li class="nav-right-part-list-scroll-item-desktop" @click="search">
              <font-awesome-icon class="icon-scroll" icon="search" />
            </li>
          </ul>
        </div>
      </div>
      <div
        class="container nav-container nav-container-mobile bgcolor headSelect"
      >
        <ul class="navbar-nav menu-mobile-scroll text-center " id="menu-mobile">
          <li class="menu-item-scroll menu-item-mobile-scroll">
            <a
              href="#"
              class=" menu-item-scroll-title menu-item-mobile-scroll-title"
              >Home</a
            >
            <ul class="sub-menu-mobile-scroll">
              <li class="sub-menu-scroll-item">
                <a
                  class="sub-menu-scroll-item-title menu-item-mobile-scroll-title"
                  href="#"
                  >Home 01</a
                >
              </li>
              <li class="sub-menu-scroll-item">
                <a
                  class="sub-menu-scroll-item-title menu-item-mobile-scroll-title"
                  href="#"
                  >Home 02</a
                >
              </li>
              <li class="sub-menu-scroll-item">
                <a
                  class="sub-menu-scroll-item-title menu-item-mobile-scroll-title"
                  href="#"
                  >Home 03</a
                >
              </li>
              <li class="sub-menu-scroll-item">
                <a class="sub-menu-scroll-item-title " href="#"
                  >Home 04</a
                >
              </li>
            </ul>
          </li>
          <li class="menu-item-scroll menu-item-mobile-scroll">
            <a
              href="#"
              class="menu-item-scroll-title menu-item-mobile-scroll-title"
              >Property</a
            >
            <ul class="sub-menu-mobile-scroll">
              <li class="sub-menu-scroll-item">
                <a class="sub-menu-scroll-item-title" href="#"
                  >Property</a
                >
              </li>
              <li class="sub-menu-scroll-item">
                <a class="sub-menu-scroll-item-title" href="#"
                  >Property Grid</a
                >
              </li>
              <li class="sub-menu-scroll-item">
                <a
                  class="sub-menu-scroll-item-title"
                  href="#"
                  >Left Sidebar</a
                >
              </li>
              <li class="sub-menu-scroll-item">
                <a
                  class="sub-menu-scroll-item-title"
                  href="#"
                  >Property Details</a
                >
              </li>
            </ul>
          </li>
          <li class="menu-item-scroll menu-item-mobile-scroll">
            <a
              href="#"
              class="menu-item-scroll-title menu-item-mobile-scroll-title"
              >Pages</a
            >
            <ul class="sub-menu-mobile-scroll">
              <li class="sub-menu-scroll-item">
                <a class="sub-menu-scroll-item-title" href="#"
                  >About</a
                >
              </li>
              <li class="sub-menu-scroll-item">
                <a class="sub-menu-scroll-item-title" href="#">Team</a>
              </li>
              <li class="sub-menu-scroll-item">
                <a class="sub-menu-scroll-item-title" href="#"
                  >Sign In</a
                >
              </li>
              <li class="sub-menu-scroll-item">
                <a class="sub-menu-scroll-item-title" href="#"
                  >Sign Up</a
                >
              </li>
              <li class="sub-menu-scroll-item">
                <a class="sub-menu-scroll-item-title" href="#"
                  >Add Property</a
                >
              </li>
            </ul>
          </li>

        </ul>
      </div>
    </nav>
    <nav class="navbar navbar-expand-lg d-flex flex-column" v-if="isScrolled">
      <div class="container nav-container nav-container bgcolor2">
        <img
          src="../../assets/img/airport.jpg"
          alt="aeroport de djibouti"
          id="logo"
          class="logo-scrolled navbar-brand"
          @click="menu"
        />
        <div class="nav-right-part nav-right-part-mobile  ">
          <ul class="nav-right-part-list-scroll">
            <li class="nav-right-part-list-scroll-item" @click="search">
              <font-awesome-icon class="icon-scroll" icon="search" />
            </li>
          </ul>
        </div>
        <input
          type="checkbox"
          name="togglerIcon"
          id="togglerIcon"
          class="container-checkbox"
          v-show="false"
          v-model="checked"
        />
        <label
          class="container-toggler-scroll"
          type="button"
          data-toggle="collapse"
          data-target="#nav-collapse"
          aria-controls="nav-collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
          for="togglerIcon"
          @click="toggle"
        >
          <span class="icon"></span>
        </label>
        <ul class="menu-desktop text-center">
          <li class="menu-item-scroll">
            <a href="#" class=" menu-item-scroll-title">Vols</a>
            <ul class="sub-menu-scroll">
              <li class="sub-menu-scroll-item">
                <a class="sub-menu-scroll-item-title" href="#"
                  >Covid-19: Informations</a
                >
              </li>
              <li class="sub-menu-scroll-item">
                <a class="sub-menu-scroll-item-title" href="#"
                  >Départs</a
                >
              </li>
              <li class="sub-menu-scroll-item">
                <a class="sub-menu-scroll-item-title" href="#"
                  >Arrivées</a
                >
              </li>
            </ul>
          </li>
          <li class="menu-item-scroll">
            <a href="#" class="menu-item-scroll-title">Votre voyage</a>
            <ul class="sub-menu-scroll">
              <li class="sub-menu-scroll-item">
                <a class="sub-menu-scroll-item-title" href="#"
                  >Documents</a
                >
              </li>
              <li class="sub-menu-scroll-item">
                <a class="sub-menu-scroll-item-title" href="#"
                  >Bagages</a
                >
              </li>
              <li class="sub-menu-scroll-item">
                <a
                  class="sub-menu-scroll-item-title"
                  href="#"
                  >Assistance</a
                >
              </li>
              <li class="sub-menu-scroll-item">
                <a
                  class="sub-menu-scroll-item-title"
                  href="#"
                  >Douanes et controles</a
                >
              </li>
            </ul>
          </li>
          <li class="menu-item-scroll">
            <a href="#" class="menu-item-scroll-title">Services</a>
            <ul class="sub-menu-scroll">
              <li class="sub-menu-scroll-item">
                <a class="sub-menu-scroll-item-title" href="#"
                  >Boutiques et Duty free</a
                >
              </li>
              <li class="sub-menu-scroll-item">
                <a class="sub-menu-scroll-item-title" href="#"
                  >Bagages perdus</a
                >
              </li>
              <li class="sub-menu-scroll-item">
                <a class="sub-menu-scroll-item-title" href="#"
                  >Service bages et voitures</a
                >
              </li>
            </ul>
          </li>
        </ul>
        <!-- Right aligned nav items -->

        <div class="nav-right-part nav-right-part-desktop">
          <ul class="nav-right-part-list-scroll">
            <li class="nav-right-part-list-scroll-item-desktop" @click="search">
              <font-awesome-icon class="icon-scroll" icon="search" />
            </li>
          </ul>
        </div>
      </div>
      <div
        class="container nav-container nav-container-mobile bgcolor headSelect"
      >
        <ul class="navbar-nav menu-mobile-scroll text-center " id="menu-mobile">
          <li class="menu-item-scroll menu-item-mobile-scroll">
            <a
              href="#"
              class=" menu-item-scroll-title menu-item-mobile-scroll-title"
              >Home</a
            >
            <ul class="sub-menu-mobile-scroll">
              <li class="sub-menu-scroll-item">
                <a
                  class="sub-menu-scroll-item-title menu-item-mobile-scroll-title"
                  href="#"
                  >Home 01</a
                >
              </li>
              <li class="sub-menu-scroll-item">
                <a
                  class="sub-menu-scroll-item-title menu-item-mobile-scroll-title"
                  href="#"
                  >Home 02</a
                >
              </li>
              <li class="sub-menu-scroll-item">
                <a
                  class="sub-menu-scroll-item-title menu-item-mobile-scroll-title"
                  href="#"
                  >Home 03</a
                >
              </li>
              <li class="sub-menu-scroll-item">
                <a class="sub-menu-scroll-item-title " href="#"
                  >Home 04</a
                >
              </li>
            </ul>
          </li>
          <li class="menu-item-scroll menu-item-mobile-scroll">
            <a
              href="#"
              class="menu-item-scroll-title menu-item-mobile-scroll-title"
              >Property</a
            >
            <ul class="sub-menu-mobile-scroll">
              <li class="sub-menu-scroll-item">
                <a class="sub-menu-scroll-item-title" href="#"
                  >Property</a
                >
              </li>
              <li class="sub-menu-scroll-item">
                <a class="sub-menu-scroll-item-title" href="#"
                  >Property Grid</a
                >
              </li>
              <li class="sub-menu-scroll-item">
                <a
                  class="sub-menu-scroll-item-title"
                  href="#"
                  >Left Sidebar</a
                >
              </li>
              <li class="sub-menu-scroll-item">
                <a
                  class="sub-menu-scroll-item-title"
                  href="#"
                  >Property Details</a
                >
              </li>
            </ul>
          </li>
          <li class="menu-item-scroll menu-item-mobile-scroll">
            <a
              href="#"
              class="menu-item-scroll-title menu-item-mobile-scroll-title"
              >Pages</a
            >
            <ul class="sub-menu-mobile-scroll">
              <li class="sub-menu-scroll-item">
                <a class="sub-menu-scroll-item-title" href="#"
                  >About</a
                >
              </li>
              <li class="sub-menu-scroll-item">
                <a class="sub-menu-scroll-item-title" href="#">Team</a>
              </li>
              <li class="sub-menu-scroll-item">
                <a class="sub-menu-scroll-item-title" href="#"
                  >Sign In</a
                >
              </li>
              <li class="sub-menu-scroll-item">
                <a class="sub-menu-scroll-item-title" href="#"
                  >Sign Up</a
                >
              </li>
              <li class="sub-menu-scroll-item">
                <a class="sub-menu-scroll-item-title" href="#"
                  >Add Property</a
                >
              </li>
            </ul>
          </li>

        </ul>
      </div>
    </nav>
    <!-- navbar end -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      checked: false,
      isSearching: false,
      isScrolled: false,
      dashboard: false
    }
  },
  methods: {
    toggle () {
      const menu = document.getElementById('menu-mobile')
      if (this.checked) {
        menu.style.visibility = 'collapse'
      } else {
        menu.style.visibility = 'inherit'
      }
    },
    search () {
      this.isSearching = true
      const inputSearch = document.getElementById('search_input')
      inputSearch.value = ''
    },
    changeBgColor (x) {
      const navs = document.getElementsByClassName('headSelect')
      if (window.pageYOffset > x) {
        for (const nav of navs) {
          nav.classList.add('bgcolor2')
          nav.classList.remove('bgcolor')
        }
      } else {
        for (const nav of navs) {
          nav.classList.add('bgcolor')
          nav.classList.remove('bgcolor2')
        }
      }
    },
    menu () {
      this.$router.push({ path: '/' })
    }
  },
  mounted () {
    const header = document.getElementById('header')
    if (this.$router.history.current.name === 'Dashboard') {
      this.dashboard = true
      if (window.pageYOffset > header.scrollHeight - 50) {
        this.isScrolled = true
        header.style.position = 'fixed'
      } else {
        this.isScrolled = false
        header.style.position = 'fixed'
      }
    } else {
      this.dashboard = false
      this.isScrolled = true
      header.style.position = 'static'
    }
    const overlay = document.getElementById('body-overlay')
    overlay.addEventListener('click', () => {
      this.isSearching = false
    })
    document.addEventListener('scroll', () => {
      if (this.$router.history.current.name === 'Dashboard') {
        this.dashboard = true
        if (window.pageYOffset > header.scrollHeight - 50) {
          this.isScrolled = true
          header.style.position = 'fixed'
        } else {
          this.isScrolled = false
          header.style.position = 'fixed'
        }
      } else {
        this.dashboard = false
        this.isScrolled = true
        header.style.position = 'static'
      }
    })
  },
  destroyed () {
    const overlay = document.getElementById('body-overlay')
    overlay.removeEventListener('click', () => {
      this.isSearching = false
    })
  }
}
</script>

<style lang="scss">
@import "./header.scss";

.header {
  position: static;
  z-index: 999;
  width: 100%;
  background: transparent;
}
.bgcolor {
  background: transparent;
}
.bgcolor2 {
  background: $color-secondary;
}

.navbar {
  width: 100%;
  margin: 0;
  transition: all 1s !important;
  padding-right: 0 !important;
  padding-left: 0 !important;
}
.nav-container {
  padding: 0 0 0 1rem !important;
  margin-top: 0;
  position: relative;
  width: 100% !important;

  &-mobile {
    position: relative;
  }
}

.nav-right-part {
  margin-top: -7rem;
  height: 100%;
  margin-right: 10rem;

  &-desktop {
    right: 0;
    @include respond(tablet) {
      display: none !important;
    }
  }
  &-mobile {
    display: none !important ;
    @include respond(tablet) {
      display: initial !important;
      margin-left: auto;
    }
  }
}

.menu-desktop {
  display: flex;
  @include respond(tablet) {
    display: none !important;
  }
}
.menu-mobile {
  visibility: collapse;
  z-index: 10000;
  @include respond(only-big-screen) {
    display: none !important;
  }
}
.menu-mobile-scroll {
  visibility: collapse;
  z-index: 10000;
  @include respond(only-big-screen) {
    display: none !important;
  }
}

.logo {
  height: 20vh;
  width: auto;

  @include respond(tablet-land) {
    height: 8vh;
  }

  &-scrolled {
    height: 8vh;
  }
}
</style>
