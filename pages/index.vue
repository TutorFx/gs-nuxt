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
  mounted(){},
  watch:{
    $route (to, from){
      if (this.$router.currentRoute.query.scroll != undefined){
      console.log(this.$router.currentRoute.query.scroll)
      this.$vuetify.goTo('#' + this.$router.currentRoute.query.scroll)
    }
    }
} 
}
</script>