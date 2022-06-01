<template>
    <div
      id="subheader"
      class="third"
      :style="$store.state.header ? 'max-height: 1000px;' : 'max-height: 4rem;'"
    >
      <div ref="animacao" id="hero" />
      <v-container
        style="transform: translateY(0px); font-weight: bold; line-height: 1"
      >
        <v-row class="py-16" align="center" justify="center" dark>
          <v-col cols="12" md="6">
            <div
                class="py-16 text-md-left text-center text-hero-size"
            >
              <div class="font-weight-light" style="color: var(--v-light-base);">{{
                $t("greet1")
              }}</div>
              <div style="color:var(--v-cta-base);"><typer :words="['Gabriel', 'Developer', 'Designer']" /></div>
            </div>
          </v-col>

          <v-col
            cols="12"
            md="6"
            align="center"
            class="imagem-perfil justify-center justify-md-end d-flex"
            style="height: 100% !important"
          >
            <v-img
              src="/fotos/site/hero.webp"
              src-lazy="/fotos/site/hero@0.1x.webp"
              aspect-ratio="1"
              style="
                border-radius: 300px;
                max-width: 100%;
                max-height: 360px;
                max-width: 360px;
              "
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>

<script>
export default {
  mounted() {
    this.lottie = require("lottie-web")
    this.anim = this.lottie.loadAnimation({
      container: this.$refs.animacao, // the dom element that will contain the animation
      renderer: "svg",//debug
      name: "hero",
      loop: true,
      autoplay: true,
      path: "/json/1.json", // the path to the animation json
    });
  },
}
</script>

<style lang="scss">
.text-hero-size{
    font-size: 72px;
    @include bp("xs"){
        font-size: 50px;
    }
}

</style>