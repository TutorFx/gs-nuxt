<template>
  <div>
      <nuxt-link :to="to" v-if="type == 'nuxt'" :prefetch="true"><slot></slot></nuxt-link>
      <a :href="to" v-else-if="type == 'link'" target="_blank"><slot></slot></a>
  </div>
</template>

<script>
export default {
    props: ["to", "type"]
}
</script>

<style>

</style>