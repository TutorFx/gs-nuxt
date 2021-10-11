<template>
  <div class="home-portfolio">
    <client-only>
      <v-container v-if="!['xs', 'sm'].includes($vuetify.breakpoint.name)">
        <v-row>
          <v-col cols="6" lg="4" xl="4" v-for="(item, i) in portfolio" :key="i">
            <a :href="item.link">
              <v-hover>
                <template v-slot:default="{ hover }">
                  <div
                    :class="`elevation-${hover ? 17 : 0}`"
                    class="mx-auto transition-swing"
                  >
                    <v-responsive :aspect-ratio="16/9">
                      <v-img :src="item.capa" class="rounded"> </v-img>
                    </v-responsive>
                  </div>
                </template>
              </v-hover>
            </a>
          </v-col>
        </v-row>
      </v-container>
      <v-carousel height="auto" hide-delimiters cycle v-else>
        <v-carousel-item v-for="(item, i) in portfolio" :key="i">
          <v-container>
            <a :href="item.link">
              <v-responsive :aspect-ratio="16/9">
                <v-img :src="item.capa" v-intersect="intersectPortifa" style="width: 100%;" class="rounded"/>
              </v-responsive>
            </a>
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
      portfolio: [
        {
          nome: "bh",
          tag: "",
          link: "https://www.behance.net/gallery/88042209/Motion-Design-para-Ledwave-Promocao-Belo-Horizonte",
          capa: "https://mir-s3-cdn-cf.behance.net/projects/max_808/10a04388042209.Y3JvcCw4MDgsNjMyLDAsMA.png",
        },
        {
          nome: "ciajob",
          tag: "",
          link: "https://www.behance.net/gallery/94159179/CIAJOB-INSTITUTIONAL",
          capa: "https://mir-s3-cdn-cf.behance.net/projects/max_808/27d93a94159179.Y3JvcCw4MDgsNjMyLDAsMA.png",
        },
        {
          nome: "trainees",
          tag: "",
          link: "https://www.behance.net/gallery/94107149/TRAINEES-CHARACTER-ANIMATION",
          capa: "https://mir-s3-cdn-cf.behance.net/projects/max_808/410cac94107149.Y3JvcCw4MDgsNjMyLDAsMA.png",
        },
        {
          nome: "logo",
          tag: "",
          link: "https://www.behance.net/gallery/84353731/Logo-Gabriel-Serejo",
          capa: "https://mir-s3-cdn-cf.behance.net/projects/max_808/46736c84353731.Y3JvcCw4NzMsNjgyLDAsNDE.png",
        },
        {
          nome: "motion",
          tag: "",
          link: "https://www.behance.net/gallery/84137677/Motion-Designs-10",
          capa: "https://mir-s3-cdn-cf.behance.net/projects/max_808/ae681c84137677.Y3JvcCwxMjAwLDkzOCwwLDU5.png",
        },
      ],
      vendoPortifa: false,
    };
  },
  methods: {
      intersectPortifa (entries, observer) {
        // More information about these options
        // is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
        this.vendoPortifa = entries[0].vendoPortifa
      },
  }
};
</script>

<style>

</style>