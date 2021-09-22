<template>
  <div :style="$vuetify.theme.dark ? 'background-image: url(/bgs/1.svg);':'background-image: url(/bgs/2.svg);'" class="portfolio third" id="work">
    <div :class="$vuetify.breakpoint.mobile ? undefined : 'py-16'">
      <v-container>
        <h4 class="light2--text">{{ $t('portfolio1') }}</h4>
        <h2 class="mb-5">{{ $t('portfolio2') }}</h2>
      </v-container>
      <home-portfolio />
    </div>
    <div class="prova-social">
      <v-container>
        <v-row>
          <v-col cols="12" lg="4" :class="$vuetify.breakpoint.mobile ? undefined : 'my-16'">
            <h4 class="light2--text">{{ $t('testi1') }}</h4>
            <h2 class="mb-5">{{ $t('testi2') }}</h2>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" style="max-width: 570px;" lg="6" class="fill-height align-center">
            <home-provasocial />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.portfolio {
  background-repeat: no-repeat;
  background-position: 25% 61%;
  background-size: 100%;
  transition: all 2s;

}
.prova-social {
  background-color: #00000004;
}
</style>
