<template>
  <v-main>
    <v-app>

      <v-navigation-drawer app v-model="menu" class="text--light" color="secondary">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Application
            </v-list-item-title>
            <v-list-item-subtitle>
              subtext
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list
          dense
          nav
        >
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <div
        id="subheader"
        class="third"
        style="transition: max-height 300ms ease"
      >
        <div id="hero" />
        <v-container
          style="transform: translateY(0px); font-weight: bold; line-height: 1"
        >
          <v-row class="py-16" dark>
            <v-col cols="12" md="6">
              <div
                :style="`font-size: ${$vuetify.breakpoint.mobile ? 50 : 72}px;`"
              >
                <span :style="`color:${$vuetify.theme.themes.dark.light}`"
                  >Olá, sou</span
                >
                <span :style="`color:${$vuetify.theme.themes.dark.primary}`"
                  >Gabriel Serejo</span
                ><span :style="`color:${$vuetify.theme.themes.dark.light}`"
                  >, seja bem-vindo.</span
                >
              </div>
            </v-col>
            <v-col cols="12" md="6"> </v-col>
          </v-row>
        </v-container>
      </div>
      <div
        class="navbar-home"
        :style="`border-top: 1px solid ${$vuetify.theme.currentTheme.primary}!important; background-color: ${$vuetify.theme.currentTheme.third}`"
      >
        <v-container class="navbar-container">
          <logo :color="$vuetify.theme.currentTheme.primary" class="mr-5" />
          <v-spacer />
          <darkmode style="max-width: 80px" class="d-flex align-center" />
          <!-- -->
        </v-container>
      </div>

      <!-- Sizes your content based upon application components -->
      <v-main height="100%" app class="secondary">
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
          <!-- If using vue-router -->
          <Nuxt />
        </v-container>
      </v-main>

      <v-footer background="secondary">
        <!-- -->
        <v-bottom-navigation
          app
          fixed
          grow
          color="primary"
          v-if="$vuetify.breakpoint.mobile"
        >
          <v-btn @click="menu = !menu" value="favorites">
            <span>Menu</span>
            <v-icon>mdi-menu</v-icon>
          </v-btn>

          <v-btn value="top">
            <span>Contato</span>
            <v-icon>mdi-message-text</v-icon>
          </v-btn>

          <v-btn value="code">
            <span>Portfolio</span>
            <v-icon>mdi-firework</v-icon>
          </v-btn>

        </v-bottom-navigation>
      </v-footer>
    </v-app>
  </v-main>
</template>
<script>
import lottie from "lottie-web";

export default {
  data() {
      return {
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
        ],
        right: null,
        menu: false,
      }
  },
  mounted() {
  },
};
</script>
<style lang="scss">
#header {
  position: relative;
  top: 0px;
  z-index: 1;
}
#subheader {
  position: relative;
  width: 100%;
  overflow: hidden;
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
</style>

