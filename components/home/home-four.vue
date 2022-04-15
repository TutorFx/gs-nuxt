<template>
  <v-container class="py-16">
    <div>
      <div class="text-center mb-3">
        <h3>{{ $t("needadesigner") }}</h3>
      </div>
      <div
        @click="$store.commit('contatoToggle')"
        class="justify-center text-center container-cta-lets primary--text"
      >
        <div class="d-flex justify-center text-cta-lets">
          <h1 class="large mr-5">{{ $t("letswork") }}</h1>
          <v-icon color="primary" size="4vw">mdi-arrow-right</v-icon>
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
        border-bottom: 3px solid var(--v-primary-base);
      }
    }
    .large {
      font-size: 3vw;
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
        font-size: 6vw;
      }
      div {
      }
    }
  }
}
</style>