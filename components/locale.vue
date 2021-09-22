<template>
  <v-select :items="langs" color="primary" filled v-model="locale" style="max-width: 110px; max-height: 40px" dense></v-select>
</template>

<script>
export default {
  data () {
    return { langs: ['pt-BR', 'en-US'], locale: this.$i18n.locale }
  },
  watch:{
    'locale': function() {
        console.log('locale changed:', this.locale)
        this.$i18n.setLocale(this.locale)
    }   
  }
}
</script>

<style>

</style>