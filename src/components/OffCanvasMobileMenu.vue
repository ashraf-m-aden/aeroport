<template>
    <div class="offcanvas-menu" id="offcanvas-menu">
        <div class="offcanvas-menu__inner">
            <div class="offcanvas-menu__header">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-md-6 col-8">
                            <div class="logo">
                                <router-link to="/">
                                    <img src="../assets/logo.png" class="logo" alt="logo">
                                </router-link>
                            </div>
                        </div>
                        <div class="col-md-6 col-4">
                            <div class="text-right">
                                <span class="mobile-navigation-close-icon" @click="mobiletoggleClass('removeClass', 'active')"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MobileNavMenu />
        </div>
    </div>
</template>

<script>

import MobileNavMenu from '@/components/MobileNavMenu.vue'

export default {
  components: {
    MobileNavMenu
  },
  methods: {
    // offcanvas searchbox
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

<style lang="scss">
    @import '../assets/scss/0-base/_variables.scss';

    .offcanvas-menu {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        transition: 0.4s;
        z-index: 99999;
        background: rgba(0, 0, 0, 0.7);
        // cursor: url('../../public/assets/img/icons/light-close.png') 16 16, pointer;
        visibility: hidden;
        opacity: 0;

        &__inner {
            transform: translateX(-100%);
            width: 400px;
            height: 100%;
            cursor: default;
            background-color: $theme-color--default;
            transition: 0.4s;
            overflow-y: auto;

            @media #{$large-mobile}{
                width: 100%;
            }
        }

        &.active{
            .offcanvas-menu__inner {
                transform: translateX(0);
            }
            visibility: visible;
            opacity: 1;
        }

        &__header {
            background-color: $white;
            padding: 15px 0;
            .mobile-navigation-close-icon{
                position: relative;
                cursor: pointer;
                height: 40px;
                width: 40px;
                line-height: 40px;
                display: inline-block;
                &:before{
                    position: absolute;
                    top: 23px;
                    left: 8px;
                    content: '';
                    width: 24px;
                    height: 3px;
                    background: $theme-color--black;
                    transform-origin: 50% 50%;
                    transform: rotate(45deg);
                    transition: 0.4s;
                }
                &:after {
                    position: absolute;
                    top: 23px;
                    left: 8px;
                    content: '';
                    width: 24px;
                    height: 3px;
                    background: $theme-color--black;
                    transform-origin: 50% 50%;
                    transform: rotate(-45deg);
                    transition: 0.4s;
                }
                &:hover{
                    color: $theme-color--default;
                    &:before, &:after{
                        transform: none;
                    }
                }
            }
        }
    }
</style>

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
  width: 10rem;
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
