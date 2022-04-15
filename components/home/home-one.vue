<template>
  <div>
    <v-container class="mt-5 pb-0">
      <v-card elevation="0" class="pa-10 empresas" color="third" style="
      background: linear-gradient(110deg, var(--v-third-base) 0%, var(--v-secondary-base) 100%); 
      border-color: var(--v-primary-base)!important;">
        <v-row>
          <v-col cols="12" lg="4">
            <v-card-title
              style="color:var(--v-primary-base); font-weight: bold; word-break: break-word;"
              class="pa-0 titulo-empresas"
            >
              {{$t('empresas')}}
            </v-card-title>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" lg="8">
            <v-row class="empresas-name">
              <v-col cols="12" lg="4">LedWave - Motion Designs, Web-Dev</v-col>
              <v-col cols="12" lg="4">Uber - Motion Designs</v-col>
              <v-col cols="12" lg="4">Dinâmica Eng - Marketing</v-col>
              <v-col cols="12" lg="4">ITH Pós Graduação - Web-Dev</v-col>
              <v-col cols="12" lg="4">CiaJob - Motion Designs, Web-Dev</v-col>
              <v-col cols="12" lg="4">Banco BRB - Motion Designs</v-col>
              <v-col cols="12" lg="4">Casateto - Motion Designs, Web-Dev <v-btn text color="primary" target="_blank" href="https://casateto.com.br/" small>Website</v-btn></v-col>
              <v-col cols="12" lg="4">Agência Industrial - Motion Designs, Web-Dev <v-btn text color="primary" target="_blank" href="https://www.agenciaindustrial.com.br/" small>Website</v-btn></v-col>
              <v-col cols="12" lg="4">LenoFx - Motion Designs, Python Tools <v-btn text color="primary" target="_blank" href="https://lenofx.com/" small>Website</v-btn></v-col>
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

<style lang="scss">
  .empresas{
    @include bp("sm"){
     border-radius: '15px';
     border-style: none;
    }
    @include bp("md"){
     border-radius: '15px 15px 0 0';
     border-style: solid; border-width: 1px 1px 0px 1px;
    }
  }  
  .titulo-empresas{
    @include bp("xs"){
      text-align: center;
    }
  }
</style>