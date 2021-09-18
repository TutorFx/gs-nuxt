<template>
  <div class="portfolio third pt-10">
    <div class="container">
      <h4 class="primary--text">MEU PORTFÓLIO</h4>
      <h2 class="mb-5">Veja agora no Behance alguns de meus projetos</h2>
      <home-portfolio />
    </div>
    <div class="prova-social pb-10">
      <v-container>
        <home-provasocial />
      </v-container>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.portfolio {
  background-image: url(/bgs/1.svg);
  background-repeat: no-repeat;
  background-position: 25% 61%;
  background-size: 100%;
  transition: all 2s;
}
.prova-social {
  background-color: rgba(22,219,101,.07);
}
</style>
