<template>
  <v-container><nuxt-content :document="articles" /></v-container>
</template>

<script>
export default {
  async asyncData({ $content, params, redirect, app }) {
    try {
      const articles = await $content(app.i18n.locale+"/page", params.single).fetch();
      const [prev, next] = await $content(app.i18n.locale+"/page")
        .only(["title", "slug"])
        .sortBy("updatedAt", "desc")
        .surround(params.single)
        .fetch();

      return {
        articles,
        prev,
        next,
      };
    } catch (error) {
      return redirect(301, "/404");
    }
  },
};
</script>

<style>
</style>