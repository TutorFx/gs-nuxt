<template>
  <!-- Go to top button -->
  <div class="fixed-toolbar" :style="$vuetify.breakpoint.mobile ? 'bottom: 70px;':'bottom: 0px;'" v-scroll="onScroll">
    <v-container>
      <div class="d-flex fill-width">
          <v-scale-transition>
        <v-btn
        fab
        v-show="fab"
        color="third"
        @click="$store.commit('contatoToggle')"
        >
            <v-icon class="cta--text">mdi-email-outline</v-icon>
        </v-btn>
        </v-scale-transition>
        <v-spacer></v-spacer>
        <v-scale-transition>
            <v-btn
            v-show="fab"
            fab
            color="third"
            @click="toTop"
            >
                <v-icon class="cta--text">mdi-chevron-up</v-icon>
            </v-btn>
        </v-scale-transition>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    fab: false,
  }),
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>

<style lang="scss">
.fixed-toolbar {
  position: fixed;
  width: 100%;
  z-index: 1;
}
</style>