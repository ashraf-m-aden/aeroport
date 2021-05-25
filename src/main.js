import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueFeather from 'vue-feather'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import BackToTop from 'vue-backtotop'
import VueConciseCarousel from '@jambonn/vue-concise-carousel'

import { BootstrapVue, IconsPlugin, DropdownPlugin } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@jambonn/vue-concise-carousel/dist/vue-concise-carousel.css'

import './assets/sass/main.scss'
import './assets/scss/style.scss'
import '../src/assets/css/font-awesome.min.css'
import '../src/assets/css/material-design-iconic-font.min.css'
import '../src/assets/css/ionicons.min.css'
import '../src/assets/css/flaticon.min.css'
import 'swiper/swiper-bundle.css'

Vue.component('carousel', VueConciseCarousel.Carousel)
Vue.component('slide', VueConciseCarousel.Slide)
Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faUserSecret, faSearch, faFacebookF, faTwitter, faYoutube)

Vue.use(BackToTop)
Vue.use(VueAwesomeSwiper)
Vue.use(DropdownPlugin)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueFeather)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
