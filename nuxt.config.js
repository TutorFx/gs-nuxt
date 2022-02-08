import colors from "vuetify/es5/util/colors";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "server",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - Gabriel Serejo",
    title: "Home",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    "@nuxtjs/sitemap",
    [
      "@nuxtjs/i18n",
      {
        locales: [
          { code: "en-US", iso: "en-US", file: "en-US.js", domain: "en-us.gabrielserejo.com" },
          { code: "pt-BR", iso: "pt-BR", file: "pt-BR.js", domain: "pt-br.gabrielserejo.com" }
        ],
        defaultLocale: "en-US",
        langDir: "~/lang/",
        lazy: true,
        strategy: "no_prefix",
        differentDomains: (process.env.NODE_ENV === 'production'),
        vueI18n: {
          fallbackLocale: "en-US"
        }
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en"
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: "#28a745",
          accent: colors.grey.darken3,
          secondary: "#030",
          third: "#011e01",
          cta: "#ffd200",
          info: "#ffd200",
          light: "#F8F9FA",
          light2: "#16db65",
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: "#030",
          accent: colors.grey.darken3,
          secondary: "#f0f0f0",
          third: "#fff",
          cta: "#ffd200",
          info: "#ffd200",
          light: "#F8F9FA",
          light2: "#16db65",
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  sitemap: {
    // options
    hostname: "https://www.gabrielserejo.com/",
    path: "/sitemap",
    gzip: true,
    defaults: {
      changefreq: "daily",
      priority: 1
    },
    routes: []
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyElements: true
      }
    }
  }
};
