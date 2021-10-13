<template>
  <v-container>
    <div class="mb-5">
      <div class="mb-1">{{  $store.state.portfolio }}</div>
      <v-btn @click="$store.commit('portfolioToggle')">Portfolio</v-btn>
    </div>
    <div>
      <div class="mb-1">{{  $store.state.contato }}</div>
      <v-btn @click="$store.commit('contatoToggle')">Contato</v-btn>
    </div>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>