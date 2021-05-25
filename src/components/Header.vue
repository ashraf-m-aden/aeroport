<template>
  <!--====================  header area ====================-->
  <div class="header-area">
    <div class="header-area__desktop header-area__desktop--default">
      <!--=======  header info area  =======-->
      <div class="header-info-area">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-12">
              <div class="header-info-wrapper align-items-center">
                <!-- logo -->
              <router-link to="/">
                <img
                  src="../assets/logo.png"
                  class="logo"
                  alt="Aeroport International de Djibouti"
                /></router-link>
                <div class="name">
                  Aeroport International de Djibouti
                </div>
                <!-- mobile menu -->
                <div
                  class="mobile-navigation-icon"
                  id="mobile-menu-trigger"
                  @click="mobiletoggleClass('addClass', 'active')"
                >
                  <i></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--=======  End of header info area =======-->

      <!--=======  header navigation area  =======-->
      <fixed-header>
        <div class="header-navigation-area default-bg">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <!-- header navigation -->
                <div
                  class="header-navigation header-navigation--header-default position-relative"
                >
                  <div class="header-navigation__nav position-static">
                    <nav>
                      <ul>
                        <li
                          class="has-children has-children--multilevel-submenu"
                        >
                          <router-link to="/">VOLS</router-link>
                          <ul class="submenu">
                            <li>
                              <router-link to="/"
                                >Covid-19: Informations</router-link
                              >
                            </li>
                            <li>
                              <router-link to="/">Départs</router-link>
                            </li>
                            <li>
                              <router-link to="/"
                                >Arrivées</router-link
                              >
                            </li>
                          </ul>
                        </li>

                        <li
                          class="has-children has-children--multilevel-submenu"
                        >
                          <router-link to="/">VOTRE VOYAGE</router-link>
                          <ul class="submenu">
                            <li>
                              <router-link to="/service">Documents</router-link>
                            </li>
                            <li>
                              <router-link to="/"
                                >Bagages</router-link
                              >
                            </li>
                            <li>
                              <router-link to="/"
                                >Assistance</router-link
                              >
                            </li>
                            <li>
                              <router-link to="/"
                                >Douanes et controles</router-link
                              >
                            </li>
                          </ul>
                        </li>
                        <li
                          class="has-children has-children--multilevel-submenu"
                        >
                          <router-link to="/">SERVICES</router-link>
                          <ul class="submenu">
                            <li>
                              <router-link to="/"
                                >Boutiques et Duty free</router-link
                              >
                            </li>
                            <li>
                              <router-link to="/"
                                >Bagages perdus</router-link
                              >
                            </li>
                            <li>
                              <router-link to="/"
                                >Service bagages et voitures</router-link
                              >
                            </li>
                          </ul>
                        </li>
                        <li
                          class="has-children has-children--multilevel-submenu"
                        >
                          <router-link to="/">VOLS</router-link>
                          <ul class="submenu">
                            <li>
                              <router-link to="/"
                                >Covid-19: Informations</router-link
                              >
                            </li>
                            <li>
                              <router-link to="/">Départs</router-link>
                            </li>
                            <li>
                              <router-link to="/"
                                >Arrivées</router-link
                              >
                            </li>
                          </ul>
                        </li>

                        <li
                          class="has-children has-children--multilevel-submenu"
                        >
                          <router-link to="/">VOTRE VOYAGE</router-link>
                          <ul class="submenu">
                            <li>
                              <router-link to="/">Documents</router-link>
                            </li>
                            <li>
                              <router-link to="/"
                                >Bagages</router-link
                              >
                            </li>
                            <li>
                              <router-link to="/"
                                >Assistance</router-link
                              >
                            </li>
                            <li>
                              <router-link to="/"
                                >Douanes et controles</router-link
                              >
                            </li>
                          </ul>
                        </li>
                        <li
                          class="has-children has-children--multilevel-submenu"
                        >
                          <router-link to="/">SERVICES</router-link>
                          <ul class="submenu">
                            <li>
                              <router-link to="/"
                                >Boutiques et Duty free</router-link
                              >
                            </li>
                            <li>
                              <router-link to="/"
                                >Bagages perdus</router-link
                              >
                            </li>
                            <li>
                              <router-link to="/"
                                >Service bagages et voitures</router-link
                              >
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </fixed-header>
      <!--=======  End of header navigation area =======-->
    </div>
  </div>
  <!--====================  End of header area  ====================-->
</template>

<script>
import FixedHeader from 'vue-fixed-header'
export default {
  components: {
    FixedHeader
  },
  methods: {
    // offcanvas mobilemenu
    mobiletoggleClass (addRemoveClass, className) {
      const el = document.querySelector('#offcanvas-menu')
      if (addRemoveClass === 'addClass') {
        el.classList.add(className)
      } else {
        el.classList.remove(className)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/sass/main.scss";
@import "../assets/scss/style.scss";

.vue-fixed-header--isFixed {
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 999;
  position: fixed;
  box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.2);
  animation: 900ms cubic-bezier(0.2, 1, 0.22, 1) 0s normal none 1 running
    fadeInDown;
}

.logo {
  width: 15rem;
}
.name {
  font-family: quick;
  font-size: 3rem;
  font-weight: 800;
  color: $theme-color--default;
  @include respond(tablet) {
    font-size: 1.5rem;
  }
}

.has-children {
  font-family: quick;
}
</style>
