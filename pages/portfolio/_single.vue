<template>
  <v-container>
    <client-only placeholder="Loading...">
      <nuxt-content :document="postFolio" />
    </client-only>
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
};
</script>

<style>
</style>