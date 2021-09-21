<template>
  <v-main>
    <v-app>
      <v-navigation-drawer
        app
        v-model="menu"
        temporary
        class="text--light"
        color="secondary"
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6"> Application </v-list-item-title>
            <v-list-item-subtitle> subtext </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item v-for="item in items" :key="item.title" link>
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
          <v-row class="py-16" align="center" dark>
            <v-col cols="12" md="6">
              <div
                :style="`font-size: ${$vuetify.breakpoint.mobile ? 50 : 72}px;`"
                :class="$vuetify.breakpoint.mobile ? undefined : 'py-16'"
              >
                <span :style="`color:${$vuetify.theme.themes.dark.light}`"
                  >{{ $t('greet1') }}</span
                >
                <span :style="`color:${$vuetify.theme.themes.dark.primary}`"
                  >{{ $t('greet2') }}</span
                ><span :style="`color:${$vuetify.theme.themes.dark.light}`"
                  >{{ $t('greet3') }}</span
                >
              </div>
            </v-col>
            <v-col cols="12" md="6" align="center" class="imagem-perfil" style="height: 100%!important">
              <img src="/img/me.jpg" style="border-radius: 300px; max-width: 100%">
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div
        v-if="!$vuetify.breakpoint.mobile"
        class="navbar-home"
        :style="`border-top: 1px solid ${$vuetify.theme.currentTheme.primary}!important; background-color: ${$vuetify.theme.currentTheme.third}`"
      >
        <v-container class="navbar-container" >
          <logo :color="$vuetify.theme.currentTheme.primary" class="mr-5" />
          <v-btn text @click="$vuetify.goTo('#work')">{{ $t('portfolioCta') }}</v-btn>
          <v-btn text>{{ $t('contactCta') }}</v-btn>
          <v-spacer />
          <!-- <darkmode style="max-width: 80px" class="d-flex align-center" /> -->
          <v-switch
            @click="$vuetify.theme.dark = !$vuetify.theme.dark"
          ></v-switch>
          <!-- -->
        </v-container>
      </div>

      <!-- Sizes your content based upon application components -->
      <v-main height="100%" app class="secondary">
        <!-- Provides the application the proper gutter -->
        <div>
          <!-- If using vue-router -->
          <Nuxt />
        </div>
      </v-main>

      <v-footer color="secondary">
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
            <span>{{ $t('contact')}}</span>
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
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" },
      ],
      right: null,
      menu: false,
    };
  },
  mounted() {
    this.anim = lottie.loadAnimation({
      container: document.getElementById("hero"), // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/json/1.json", // the path to the animation json
    });
  },
  created() {
    if (process.client){
      console.log(navigator.language)
      this.$i18n.setLocale(navigator.language)
    }
  }
};
</script>

<style lang="scss">
@import '~vuetify/src/styles/settings/_variables';

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

// fix bug on vuetify glitch mobile navigator
.v-bottom-navigation--fixed {position: fixed !important;}

.v-item-group.v-bottom-navigation .v-btn {height: inherit !important;}
</style>


