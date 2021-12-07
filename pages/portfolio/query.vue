<template>
  <v-container>
    <v-row>
      <v-col v-for="(article, i) in articles" :key="i" cols="4">
        <NuxtLink :to="article.path"> link </NuxtLink>
        {{ article }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content("portfolio").fetch();

    return {
      articles,
    };
  },
};
</script>

<style>
</style>