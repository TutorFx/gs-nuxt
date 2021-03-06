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
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~components/',
    '~components/home/',
    '~components/portfolio/',
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
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
          { code: "pt-BR", iso: "pt-BR", file: "pt-BR.js", domain: "pt-br.gabrielserejo.com" },
          { code: "en-US", iso: "en-US", file: "en-US.js", domain: "en-us.gabrielserejo.com" }
        ],
        defaultLocale: 'pt-BR',
        langDir: "~/lang/",
        lazy: true,
        strategy: (process.env.NODE_ENV === 'production') ? "prefix" : "no_prefix",
        differentDomains: (process.env.NODE_ENV === 'production'),
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
      options: {
        customProperties: true,
      },
      themes: {
        dark: {
          primary: "#00ff00",
          accent: colors.grey.darken3,
          secondary: "#030",
          third: "#011e01",
          cta: "#ffd200",
          info: "#ffd200",
          light: "#F8F9FA",
          light2: "#00ff00",
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          matrix: "#000000",
        },
        light: {
          primary: "#00ff00",
          accent: colors.grey.darken3,
          secondary: "#f0f0f0",
          third: "#fff",
          cta: "#ffd200",
          info: "#ffd200",
          light: "#F8F9FA",
          light2: "#00ff00",
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          matrix: "#ffffff",
        }
      }
    }
  },

  sitemap: {
    // options
    hostname: process.env.VERCEL_URL,
    path: "/sitemap",
    gzip: true,
    defaults: {
      changefreq: "daily",
      priority: 1
    },
    routes: async () => {
      // thanks for https://jackwhiting.co.uk/posts/generating-sitemap-entries-for-nuxt-content/
      const { $content } = require("@nuxt/content");
      let page = []
      let portfolio = []
      
      page.push(...await $content("pt-BR/page").fetch());
      page.push(...await $content("en-US/page").fetch());
      portfolio.push(...await $content("portfolio").fetch());
    
      //console.log('page')

      // Setup an empty array we will push to.
      const routes = [];

      // Add an entry for the item including lastmod and priorty

      page.forEach((a) =>
        routes.push({
          url: 'page/'+a.slug,
          priority: 0.8,
          lastmod: a.updatedAt,
        })
      );
      portfolio.forEach((a) =>
        routes.push({
          url: 'portfolio/'+a.slug,
          priority: 0.8,
          lastmod: a.updatedAt,
        })
      );

      // return all routes
      return routes;
    },
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
      },
    },
  }
};
