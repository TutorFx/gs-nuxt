<template>
  <client-only>
    <div v-if="!$vuetify.breakpoint.mobile" class="anim-institucional">
      <video style="max-width: 100%" playsinline="true" muted autoplay loop>
        <source src="/video/mini-reel.mp4" type="video/mp4" />
      </video>
      <div class="container">
        <v-row class="fill-height rounded-xl" align="center">
          <v-spacer></v-spacer>
          <v-col cols="4" xl="3">
            <v-card elevation="10" class="pa-7" style="border-radius: 15px" color="secondary">
              <h2 class="mb-4">{{ $t('introduce1') }}</h2>
              <p>
                  {{ $t('introduce2') }}
              </p>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
    <div v-else>
      <v-container>
        <v-card elevation="0" class="py-7" style="border-radius: 15px;" color="secondary">
            <h2 class="mb-4">{{ $t('introduce1') }}</h2>
            <p style="text-align: justify;">
                {{ $t('introduce2') }}
            </p>
        </v-card>
      </v-container>
    </div>
  </client-only>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.anim-institucional {
  position: relative;
  background-color: #000;
  height: 75vh;
  min-height: 25rem;
  width: 100%;
  overflow: hidden;
  video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: 0;
    transform: translateX(-50%) translateY(-50%);
  }
  .container {
    position: relative;
    z-index: 0;
    height: 100%;
  }
}
</style>