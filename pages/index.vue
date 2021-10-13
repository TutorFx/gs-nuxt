<template>
  <div>
    <home-one />
    <home-two />
    <home-three />
    <home-four />
  </div>
</template>
<script>
export default {
  mounted() {},
  watch: {
    $route(to, from) {
      if (this.$router.currentRoute.query.scroll != undefined) {
        console.log(this.$router.currentRoute.query.scroll);
        this.$vuetify.goTo("#" + this.$router.currentRoute.query.scroll);
      }
    },
  },
    head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Veja agora o site pessoal do UX/Motion Designer Gabriel Serejo. Precisa de um design? Vamos trabalhar juntos!'
      }
    ],
  }
};
</script>