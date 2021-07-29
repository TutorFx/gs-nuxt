<template>
  <div @click="toggleDarkTheme()" id="darkmode" />
</template>
<script>
import darkmode from "lottie-web";
export default {
  mounted() {
    this.another = darkmode.loadAnimation({
      container: document.getElementById("darkmode"), // the dom element that will contain the animation
      name: "darkmode",
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "/json/darkmode.json", // the path to the animation json
    });
  },
  methods: {
    toggleDarkTheme() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    on(){
        this.another.setDirection(1)
        this.another.play()
    },
    off(){
        this.another.setDirection(-1)
        this.another.play()
    }
  },
  watch: {
    '$vuetify.theme.dark': function(){
        this.$vuetify.theme.dark ? this.off() : this.on();
    }
  },
};
</script>