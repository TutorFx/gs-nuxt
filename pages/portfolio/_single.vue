<template>
  <v-container class="py-0">
    <div :class="$vuetify.theme.dark ? 'third':'light'">
    <nuxt-content :document="postFolio" />
    </div>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $content, params, redirect }) {
    try {
      const postFolio = await $content("portfolio", params.single).fetch();

      return {
        postFolio,
      };
    } catch (error) {
      return redirect(301, "/404");
    }
  },
  head() {
    return {
      title: this.postFolio.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.postFolio.description,
        },
      ],
    };
  },
  mounted() {
    this.$store.commit("setHeader", false);
  },
};
</script>

<style>
</style>