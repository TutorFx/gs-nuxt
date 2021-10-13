<template>
  <v-container class="py-16">
    <div>
      <div class="text-center">
        <span>{{ $t("needadesigner") }}</span>
      </div>
      <div
        @click="$store.commit('contatoToggle')"
        class="justify-center text-center container-cta-lets"
      >
        <div class="d-flex justify-center text-cta-lets">
          <h1 class="large mr-5">{{ $t("letswork") }}</h1>
          <v-icon size="4vw">mdi-arrow-right</v-icon>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
</script>

<style lang="scss">
@import "~vuetify/src/styles/settings/_variables";

.container-cta-lets {
  .text-cta-lets {
    h1 {
      border-bottom: 3px solid rgba(255, 255, 255, 0);
      transition: 400ms;
      cursor: grab;
      &:hover {
        border-bottom: 3px solid white;
      }
    }
    .large {
      font-size: 4vw;
    }
    div {
      height: 10px;
      width: 100%;
    }
  }
}

@media #{map-get($display-breakpoints, 'sm-and-down')} {
  .container-cta-lets {
    .text-cta-lets {
      h1 {
        &:hover {
        }
      }
      .large {
        font-size: 7vw;
      }
      div {
      }
    }
  }
}
</style>