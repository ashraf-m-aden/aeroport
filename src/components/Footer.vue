<template>
    <!--====================  footer area ====================-->
    <div class="footer-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="footer-content-wrapper section-space--inner--100">
                        <div class="row">
                            <div class="col-xl-3 col-lg-3 col-md-12">
                                <FooterAbout :logo="data.footerLogo" :desc="data.footerDesc" />
                            </div>
                            <div class="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                                <FooterLink :title="data.footerLinkTitleOne" :nav="data.navListOne" />
                            </div>
                            <div class="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                                <FooterLink :title="data.footerLinkTitleTwo" :nav="data.navListTwo" />
                            </div>
                            <div class="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                                <ContactWidget :contactWidgetData="data.footerContactWidget" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-copyright-wrapper">
            <div class="footer-copyright text-center">
                Copyright © 2020. All right reserved
            </div>
        </div>
    </div>
    <!--====================  End of footer area  ====================-->
</template>

<script>
import FooterAbout from '@/components/FooterAbout.vue'
import FooterLink from '@/components/FooterLink.vue'
import ContactWidget from '@/components/ContactWidget.vue'

import data from '../data/footer.json'
export default {
  components: {
    FooterAbout,
    FooterLink,
    ContactWidget
  },
  data () {
    return {
      data
    }
  }
}
</script>

<style lang="scss">
@import "../assets/sass/main.scss";
@import "../assets/scss/style.scss";

.footer-area{
  background: $theme-color--default;
  color: white;
}
</style>
