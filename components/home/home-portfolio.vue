<template>
  <div class="home-portfolio">
    <client-only>
      <v-container v-if="!['xs', 'sm'].includes($vuetify.breakpoint.name)">
        <v-row>
          <v-col cols="6" lg="4" xl="4" v-for="(item, i) in portfolio" :key="i">
            <nuxt-link :to="item.path">
              <v-hover>
                <template v-slot:default="{ hover }">
                  <div
                    :class="`elevation-${hover ? 17 : 0} card-grid-item`"
                    class="mx-auto transition-swing"
                  >
                    <v-responsive
                      :aspect-ratio="5 / 4"
                      class="overflow-hidden"
                      style="width: 100% !important; min-height: 280px"
                    >
                      <v-img
                        :src="item.thumbnail"
                        :aspect-ratio="5 / 4"
                        class="rounded fill-height fill-width"
                      >
                        <div v-if="hover && item.animation" class="video-hover-component rounded">
                          <video autoplay muted>
                            <source :src="item.animation" />
                          </video>
                        </div>
                      </v-img>
                    </v-responsive>
                  </div>
                </template>
              </v-hover>
            </nuxt-link>
          </v-col>
        </v-row>
      </v-container>
      <v-carousel height="auto" hide-delimiters cycle v-else>
        <v-carousel-item v-for="(item, i) in portfolio" :key="i">
          <v-container>
            <nuxt-link :to="item.path">
              <v-responsive
                :aspect-ratio="5 / 4"
                class="overflow-hidden"
                style=""
              >
                <v-img
                  :src="item.thumbnail"
                  :aspect-ratio="5 / 4"
                  cover
                  v-intersect="intersectPortifa"
                  style="width: 100%; height: 100%"
                  class="rounded"
                />
              </v-responsive>
            </nuxt-link>
          </v-container>
        </v-carousel-item>
      </v-carousel>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      portfolio: [],
      vendoPortifa: false,
    };
  },
  props: ["portfolioContent"],
  methods: {
    intersectPortifa(entries, observer) {
      // More information about these options
      // is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      this.vendoPortifa = entries[0].vendoPortifa;
    },
  },
  created() {
    this.portfolio.push(...this.portfolioContent);
  },
};
</script>

<style lang="scss">
.card-grid-item {
  z-index: 0;
  position: relative;
  &:hover {
    transform: scale(1.3);
    z-index: 5;
  }
}
.video-hover-component {
  overflow: hidden;
  border-radius: 10px !important;
  height: 100%;
  width: 100%;
  video {
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 100%;
    width: auto;
    height: auto;
    transform: translateX(-50%) translateY(-50%);
  }
}
</style>