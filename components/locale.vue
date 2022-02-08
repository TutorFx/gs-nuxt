<template>
  <div>
    <v-menu offset-y bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          nuxt
          v-bind="attrs"
          v-on="on"
          fab
          icon
        >
          <v-icon>mdi mdi-translate</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="locale in $i18n.locales" :key="locale.code">
          <v-list-item-title>
            <v-btn
              text
              block
              @click="production ? undefined : $i18n.setLocale(locale.code)"
              :href="production ? switchLocalePath(locale.code) : undefined"
            >
              {{ locale.code }}
            </v-btn>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data(){
    return {
      production: (process.env.NODE_ENV === 'production')
    }
  }
};
</script>

<style>
</style>