<template>
  <v-container>
    <nuxt-content :document="postFolio" />
  </v-container>
</template>

<script>
import { VRow, VCol } from 'vuetify/lib/components/VGrid'
import { VResponsive } from 'vuetify/lib/components/VResponsive'
import { VImg } from 'vuetify/lib/components/VImg'
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
  components: {
    VRow,
    VCol,
    VResponsive,
    VImg
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