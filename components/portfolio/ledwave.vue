<template>
  <div>
    <h2 class="pa-5">Ledwave - Animações</h2>
    <div
      style="background-color: #001601"
      class="d-flex justify-center py-3 px-3"
    >
      <v-row>
        <v-col cols="12" md="6">
          <div style="width: 100%">
            <v-responsive max-width="100%" :aspect-ratio="1 / 1"
              ><iframe
                src="https://player.vimeo.com/video/372472715?h=97267ad20e"
                width="100%"
                height="100%"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe
            ></v-responsive>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div style="width: 100%">
            <v-responsive max-width="100%" :aspect-ratio="1 / 1"
              ><iframe
                src="https://player.vimeo.com/video/372882552?h=6a05d701f7"
                width="100%"
                height="100%"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe
            ></v-responsive>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>