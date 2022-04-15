<template>
  <v-dialog
    v-model="lgpd"
    persistent
    :hide-overlay="
      $route.path.includes('/page/politica-de-privacidade') ||
      $route.path.includes('/page/politica-de-cookies') ||
      $route.path.includes('/page/cookie-policy') ||
      $route.path.includes('/page/privacity-policy')
    "
    max-width="800"
    origin="bottom center"
    content-class="lgpd-dialog"
  >
    <v-card class="pa-4">
      <div
        :class="!$vuetify.breakpoint.mobile ? 'd-flex' : ''"
        class="align-center overflow-hidden"
      >
        <div class="my-3">
          {{ $i18n.t("lgpd[0]") }}
          <N-Link :to="$i18n.t('lgpd[5]')">{{ $i18n.t("lgpd[1]") }}</N-Link>
          {{ $i18n.t("lgpd[2]") }}
          <N-Link :to="$i18n.t('lgpd[6]')">{{ $i18n.t("lgpd[3]") }}</N-Link>
          {{ $i18n.t("lgpd[4]") }}
        </div>
        <v-btn color="primary" @click="lgpd = false" depressed> Aceitar </v-btn>
      </div>
      <v-card-actions v-if="false">
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="lgpd = 'proxima'"> Não </v-btn>
        <v-btn color="primary" @click="lgpd = false" depressed>
          Pode usar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  methods: {},
  data() {
    return {
      lgpd: false,
    };
  },
  watch: {
    lgpd: function () {
      window.localStorage.setItem("lgpd", this.lgpd);
      if (window.localStorage.getItem("lgpd") == "proxima") {
        this.lgpd = false;
      }
    },
  },
  mounted() {
    const cookie = window.localStorage.getItem("lgpd");
    if (cookie == "proxima") {
      this.lgpd = false;
    } else if (cookie == "true") {
      this.lgpd = true;
    } else if (cookie == "false") {
      this.lgpd = false;
    } else if (cookie == null) {
      this.lgpd = true;
      window.localStorage.setItem("lgpd", this.lgpd);
    }
  },
};
</script>

<style>
@media screen and (min-width: 767px) {
  .lgpd-dialog {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
</style>