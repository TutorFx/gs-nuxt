<template>
  <client-only>
    <v-responsive :aspect-ratio="$vuetify.breakpoint.xl ? 2 : $vuetify.breakpoint.sm || $vuetify.breakpoint.xs ? 0.7:1" style="max-height: 500px" class="mb-3">
      <v-carousel hide-delimiter-background hide-delimiters :show-arrows-on-hover="!$vuetify.breakpoint.mobile" :style="`border:1px solid ${$vuetify.theme.currentTheme.primary}!important; height: 100%!important`" class="third rounded">
        <v-carousel-item v-for="(content, i) in testi" :key="i" class="fill-height">
          <div class="testi-wrapper" style="height: 100%!important">
            <div class="px-10">
              <p>
                {{ content.texto }}
              </p>
              <div class="text-center">

                <v-avatar class="img-testi mb-5" size="70">
                  <img :src="content.foto">
                </v-avatar>
                <h4 class="text-center">{{ content.nome }}</h4>
                <p>{{ content.cargo }}</p>
                <h6 class="text-cta mb-5" :style="`color:${$vuetify.theme.themes.dark.cta}; margin-bottom: 0px!important;`">{{ content.descricao }}</h6>
              </div>
            </div>
          </div>
        </v-carousel-item>
        <div class="swiper-pagination" slot="pagination"></div>
      </v-carousel>
    </v-responsive>
  </client-only>
</template>
<style lang="scss">
@import "~vuetify/src/styles/settings/_variables";

.testi-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;

  .img-testi {
  }
}

@media #{map-get($display-breakpoints, 'sm-and-down')} {
  // mobile
}
</style>
<script>
export default {
  name: "carrousel",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: true,
      },
      testi: [
        {
          nome: "Breeze Mendes",
          foto: "./fotos/breeze.webp",
          descricao: "COLEGA DE TRABALHO",
          cargo: "Ilustradora, IRRA Studio",
          texto: this.$t('testibreeze'),
        },
        {
          nome: "Guilherme Rosa Pedroso",
          foto: "./fotos/gui.webp",
          descricao: "SUPERVISOR",
          cargo: "Analista de Marketing, Ledwave",
          texto: this.$t('testigui'),
        },
        {
          nome: "Jéssica Silvestre de Souza",
          foto: "./fotos/jessica.webp",
          descricao: "SUPERVISORA",
          cargo: "Gerente de Marketing, Ledwave",
          texto: this.$t('testijessica'),
        },
      ],
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    //console.log("Current Swiper instance object", this.swiper);
    //this.swiper.slideTo(0, 1000, false);
  },
};
</script> 