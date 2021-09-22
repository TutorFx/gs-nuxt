<template>
  <div>
    <v-container class="mt-5 pb-0">
      <v-card elevation="0" class="pa-10" color="third" :style="`border-radius: ${$vuetify.breakpoint.mobile ? '15px' : '15px 15px 0 0'}; background: linear-gradient(110deg, ${$vuetify.theme.currentTheme.third} 0%, ${$vuetify.theme.currentTheme.secondary} 100%);`">
        <v-row>
          <v-col cols="12" lg="4">
            <v-card-title
              :style="`color:${$vuetify.theme.currentTheme.primary}; font-weight: bold; word-break: break-word;`"
              class="pa-0"
            >
              {{$t('empresas')}}
            </v-card-title>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" lg="8">
            <v-row>
              <v-col cols="12" lg="4">LedWave - Motion Designs, Web-Dev</v-col>
              <v-col cols="12" lg="4">Uber - Motion Designs</v-col>
              <v-col cols="12" lg="4">Dinâmica Eng - Marketing</v-col>
              <v-col cols="12" lg="4">ITH Pós Graduação - Web-Dev</v-col>
              <v-col cols="12" lg="4">CiaJob - Motion Designs, Web-Dev</v-col>
              <v-col cols="12" lg="4">Banco BRB - Motion Designs</v-col>
              <v-col cols="12" lg="4">Young Comunicação Digital - Motion Designs</v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>