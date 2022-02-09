<template>
  <div>
    <home-one />
    <home-two />
    <home-three :portfolio="postFolio" />
    <home-four />
  </div>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const postFolio = await $content("portfolio").only(['thumbnail', 'path']).fetch();

    return {  
      postFolio,
    };
  },
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
          content: 'Veja agora meu site pessoal e conheça meus trabalhos em: UX/Motion, Designer, Web Developer. Sou Gabriel Serejo, Precisa de uma ajuda? Vamos trabalhar juntos!'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'UX, Motion, Designer, Web Developer, Web designer, Animador Gráfico, Programador, Web, Programador Frontend, Frontend'
        }
      ],
  }
};
</script>