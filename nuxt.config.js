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
        locales: ["en-US", "pt-BR"],
        defaultLocale: "en-US",
        vueI18n: {
          fallbackLocale: "en-US",
          messages: {
            "en-US": {
              portfolioCta: "Know my job",
              contactCta: "Contact me",
              contact: "Contact",
              greet1: `Hello, I'm `,
              greet2: "Gabriel Serejo, ",
              greet3: "welcome.",
              introduce1: "My experience",
              introduce2: `I worked as a freelancer "Motion Designer" for many years and
              I developed websites for large and small companies, I learned
              a lot, including valuing the little things and respecting
              Law Suit. Today I have achieved fruitful results with the
              hard work and dedication between the various projects, I have
              sought to expand my scope of work and improve my
              work process, today I'm sure to say I'm good
              in that. `,
              "testibreeze": `“Talented and dedicated professional! Executes projects with agility, always aiming for quality and good results. Also, he works very well as a team. Success, Gabriel!” (Translated)`,
              "testijessica": `“I had the opportunity to work with Gabriel, an excellent professional! Super dedicated and competent. Always looking for qualification and personal growth. A few words sum up Gabriel well: Dedication, commitment and competence. I wish you much success. You will go far.” (Translated)`,
              "testigui": `“Gabriel is a very dedicated, considerate professional and is always committed to exceeding expectations. He has a lot of technical ability and is very creative, in addition to being interested and learning a lot from the feedback he receives. It was a joy to work in the same team as Gabriel, he is the type of professional who makes a difference in the market.” (Translated)`,
              "testi1": "TESTIMONIAL",
              "testi2": "What has been said about my work out there",
              "portfolio1": "MY PORTFOLIO",
              "portfolio2": "See now on Behance some of my projects",
              "contato1": "LET'S TALK",
              "contato2": "Leave your message and I'll get back to you!",
              "contato3": "Just identify yourself, I'm available to talk every day of the week. Would you like to make a quote?",
              "contatoSubmit": "SUBMIT MESSAGE",
            },
            "pt-BR": {
              "portfolioCta": "Conheça meu trampo",
              "contactCta": "Entre em contato",
              "contact": "Contato",
              "greet1": `Olá, sou `,
              "greet2": "Gabriel Serejo, ",
              "greet3": "seja bem-vindo.",
              "introduce1": "A minha experiência",
              "introduce2": `Trabalhei como freelancer "Motion Designer" por muitos anos e
              desenvolvi websites para grandes e pequenas empresas, aprendi
              muito, inclusive valorizando as pequenas coisas e respeitando
              processos. Hoje tenho conseguido resultados frutíferos com o
              trabalho árduo e a dedicação entre os vários projetos, tenho
              procurado expandir o meu âmbito de trabalho e melhorar o meu
              processo de trabalho, hoje tenho segurança em dizer que sou bom
              nisso.`,
              "testibreeze": `“Profissional talentoso e dedicado! Executa os projetos com agilidade sempre visando qualidade e bons resultados. Além disso, trabalha muito bem em equipe. Sucesso, Gabriel!”`,
              "testijessica": `“Tive a oportunidade de trabalhar com o Gabriel um excelente profissional! Super dedicado e competente. Sempre em busca de qualificação e crescimento pessoal. Algumas palavras resumem bem o Gabriel: Dedicação, comprometimento e competência. Te desejo muito sucesso. Você vai longe.”`,
              "testigui": `“O Gabriel é um profissional muito dedicado, atencioso e está sempre comprometido em superar as expectativas. Possui muita habilidade técnica e é muito criativo, além de se interessar e aprender muito com os feedbacks que recebe. Foi uma alegria trabalhar na mesma equipe que o Gabriel, ele é o tipo de profissional que faz a diferença no mercado.”`,
              "testi1": "PROVA SOCIAL",
              "testi2": "O que tem-se falado sobre o meu trabalho por aí",
              "portfolio1": "MEU PORTFÓLIO",
              "portfolio2": "Veja agora no Behance alguns de meus projetos",
              "contato1": "VAMOS TROCAR UMA IDEIA",
              "contato2": "Deixe sua mensagem que eu te respondo!",
              "contato3": "É só se identificar, eu estou disponível para conversar todos os dias da semana. gostaria de fazer um orçamento?",
              "contatoSubmit": "ENVIAR MENSAGEM",
            }
          }
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
    hostname: 'https://www.gabrielserejo.com/',
    gzip: true,
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
