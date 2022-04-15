<template>
  <v-app v-scroll="onScroll">
    <fixed />
    <lgpd />
    <dialogs />
    <v-navigation-drawer
      app
      v-model="menu"
      temporary
      class="text--light"
      color="secondary"
    >

      <v-divider></v-divider>

      <v-list dense nav class="mt-10">
        <v-list-item link href="https://deuonda.com.br/">
          <v-list-item-icon
            style="background-color: #1d4faa"
            class="rounded pa-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              :fill="$vuetify.theme.currentTheme.light"
              viewBox="0 0 80 80"
            >
              <path
                d="M79.5 49c.2 0 .5.2.5.4s-.1.4-.3.4c-5.4 2.6-21.9 10-29 9.5-7 0-13.3-4-16.2-10.4h45z"
              />
              <path
                d="M60.3 26.4c-8.3-5.3-19.4-2.9-24.7 5.4-3.3 5.2-3.7 11.7-1.2 17.2H0c0-.2 0-.3.1-.5s.2-.4.4-.5C8 43 15.1 37.4 22 31.7c6.3-5.2 12.3-10 20.7-11.3 1-.2 2.1-.2 3.1-.2 5.5 0 10.7 2.1 14.8 5.8.1.1.1.3 0 .4-.1 0-.2.1-.3 0z"
              />
            </svg>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Deuonda Digital</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link href="https://whatslnk.co/">
          <v-list-item-icon
            style="background-color: #25d366"
            class="rounded pa-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 418.9 420.9">
              <path
                d="M357.8 61.2C318.8 21.9 265.7-.1 210.3 0 95.3 0 1.8 93.6 1.8 208.5c0 36.6 9.6 72.6 27.8 104.3L0 420.9l110.6-29c30.6 16.7 64.8 25.4 99.7 25.4h.1c114.9 0 208.5-93.6 208.5-208.6.1-55.3-21.8-108.5-61.1-147.5zM210.3 382c-31.1 0-61.6-8.3-88.3-24.1l-6.3-3.8-65.6 17.2 17.5-64-4.1-6.6C46.2 273.1 37 241.1 37 208.5 37 113 114.8 35.2 210.4 35.2c95.7.1 173.3 77.7 173.3 173.5-.1 95.6-77.8 173.3-173.4 173.3z"
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="#fff"
              />
              <path
                d="M104.9 210.4c0-22.1 17.9-40 40-40h51.6v-24.5h-51.6c-35.6 0-64.5 28.9-64.5 64.5s28.9 64.5 64.5 64.5h51.6v-24.5h-51.6c-22 0-40-17.9-40-40zm52.9 12.9H261v-25.8H157.8v25.8zm116.1-77.4h-51.6v24.5h51.6c22.1 0 40 17.9 40 40s-17.9 40-40 40h-51.6v24.5h51.6c35.6 0 64.5-28.9 64.5-64.5s-28.9-64.5-64.5-64.5z"
                fill="#fff"
              />
            </svg>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>WhatsLnk</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
        
        <v-list-item link @click="$vuetify.goTo('#work')">
          <v-list-item-icon class="rounded pa-1 light">
            <v-responsive :aspect-ratio="1 / 1" class="d-flex align-center">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="laptop-house"
                class="svg-inline--fa fa-laptop-house fa-w-20"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path
                  :fill="$vuetify.theme.currentTheme.dark"
                  d="M272,288H208a16,16,0,0,1-16-16V208a16,16,0,0,1,16-16h64a16,16,0,0,1,16,16v37.12C299.11,232.24,315,224,332.8,224H469.74l6.65-7.53A16.51,16.51,0,0,0,480,207a16.31,16.31,0,0,0-4.75-10.61L416,144V48a16,16,0,0,0-16-16H368a16,16,0,0,0-16,16V87.3L263.5,8.92C258,4,247.45,0,240.05,0s-17.93,4-23.47,8.92L4.78,196.42A16.15,16.15,0,0,0,0,207a16.4,16.4,0,0,0,3.55,9.39L22.34,237.7A16.22,16.22,0,0,0,33,242.48,16.51,16.51,0,0,0,42.34,239L64,219.88V384a32,32,0,0,0,32,32H272ZM629.33,448H592V288c0-17.67-12.89-32-28.8-32H332.8c-15.91,0-28.8,14.33-28.8,32V448H266.67A10.67,10.67,0,0,0,256,458.67v10.66A42.82,42.82,0,0,0,298.6,512H597.4A42.82,42.82,0,0,0,640,469.33V458.67A10.67,10.67,0,0,0,629.33,448ZM544,448H352V304H544Z"
                ></path>
              </svg>
            </v-responsive>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ $t("portfolioCta") }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link @click="$store.commit('contatoToggle')">
          <v-list-item-icon class="rounded pa-1 light">
            <v-responsive :aspect-ratio="1 / 1" class="d-flex align-center">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="id-card"
                class="svg-inline--fa fa-id-card fa-w-18"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  :fill="$vuetify.theme.currentTheme.dark"
                  d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H303.2c.9-4.5.8 3.6.8-22.4 0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6 0 26-.2 17.9.8 22.4H48V144h480v288zm-168-80h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm-168 96c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64z"
                ></path>
              </svg>
            </v-responsive>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ $t("contactCta") }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-6 mb-10 d-flex align-center justify-space-between">
          <darktoggle />
          <locale />
        </div>
      </template>
    </v-navigation-drawer>

    <hero-lottie></hero-lottie>

    <div
      v-if="!$vuetify.breakpoint.mobile"
      class="navbar-home"
      style="border-top: 1px solid var(--v-primary-base)!important; background-color: var(--v-third-base)"
    >
      <v-container class="navbar-container align-center">
        <logo :color="$vuetify.theme.currentTheme.primary" class="mr-5" />
        <v-btn text @click="$vuetify.goTo('#work')">{{
          $t("portfolioCta")
        }}</v-btn>
        <v-btn text @click="$store.commit('contatoToggle')">{{
          $t("contactCta")
        }}</v-btn>
        <v-spacer />
        <!-- <darkmode style="max-width: 80px" class="d-flex align-center" /> -->
        <darktoggle />
        <locale />
        <v-btn @click="menu = !menu" color="info" fab icon>
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <!-- -->
      </v-container>
    </div>
    <div v-if="!$vuetify.breakpoint.mobile" class="secondary" style="height: 34px"></div>
    <!-- Sizes your content based upon application components -->
    <v-main style="z-index: 0" class="secondary pb-0">
      <!-- If using vue-router -->
      <Nuxt />
    </v-main>
    <navigation-end class="mb-lg-0 mb-12" />
    <v-bottom-navigation
        app
        grow
        dark
        background-color="primary"
        v-if="$vuetify.breakpoint.mobile"
      >
        <v-btn to="/" value="home">
          <span>Home</span>
          <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn @click="menu = !menu" value="menu">
          <span>Menu</span>
          <v-icon>mdi-menu</v-icon>
        </v-btn>

        <v-btn @click="$store.commit('contatoToggle')" value="top">
          <span>{{ $t("contact") }}</span>
          <v-icon>mdi-message-text</v-icon>
        </v-btn>

        <v-btn
          href="https://www.behance.net/GabrielTF"
          target="_blank"
          value="code"
        >
          <span>Portfolio</span>
          <v-icon>mdi-firework</v-icon>
        </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>
<script>
import navigationEnd from "../components/navigation-end.vue";
import Lgpd from "../components/lgpd.vue";
import heroLottie from "../components/layout/hero-lottie.vue";

export default {
  components: { navigationEnd, Lgpd, heroLottie },
  data() {
    return {
      items: [],
      right: null,
      menu: false,
      fab: false,
    };
  },
  head() {
    return {
      script: [],
    };
  },
  methods: {
    onScroll(e) {
      if (process.client) {
        if (!this.$vuetify.breakpoint.mobile) {
          if (typeof window === "undefined") return;
          const top = window.pageYOffset || e.target.scrollTop || 0;
          this.fab = top > 20;
        }
      }
    },
  },
  created() {
/*     if (process.client) {
      console.log("Locale detected:", navigator.language);
      this.$i18n.setLocale(navigator.language);
    }
    this.$store.commit("setHeader", false); */
  },
  watch: {},
};
</script>

<style lang="scss">
@import "~vuetify/src/styles/settings/_variables";

.imagem-perfil {
  text-align: right;
}
@media #{map-get($display-breakpoints, 'sm-and-down')} {
  .imagem-perfil {
    text-align: center;
  }
}
#header {
  position: relative;
  top: 0px;
  z-index: 1;
}
#subheader {
  position: relative;
  width: 100%;
  transition: max-height 1000ms ease;
  overflow: hidden;
  min-height: 600px;
  display: flex;
  align-items: center;
  @include bp("xs"){
    min-height: calc(100vh - 4rem);
  }
  #hero {
    position: absolute !important;
    top: 50% !important;
    left: 50% !important;
    min-width: 100% !important;
    min-height: 100% !important;
    height: auto !important;
    z-index: 0 !important;
    transform: translateX(-50%) translateY(-50%) !important;
    svg {
      width: auto !important;
      min-width: 100%;
      background-color: #001400;
    }
  }
}
.navbar-home {
  .navbar-container {
    display: flex;
    align-items: center;
  }
  position: sticky;
  z-index: 1;
  top: 0;
}
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;900&display=swap");

$body-font-family: "Montserrat";
$title-font: "Montserrat";

.v-application {
  font-family: $body-font-family, sans-serif !important;
  .title {
    // To pin point specific classes of some components
    font-family: $title-font, sans-serif !important;
  }
}

// fix bug on vuetify glitch mobile navigator
.v-bottom-navigation--fixed {
  position: fixed !important;
}

.v-item-group.v-bottom-navigation .v-btn {
  height: inherit !important;
}
</style>


