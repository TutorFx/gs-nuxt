<template>
  <div class="main-isometric third">
    <div class="isometric">
      <isometric-grid></isometric-grid>
    </div>
    <div class="resume">
      <v-container>
        <v-row>
          <v-col cols="12" lg="5" md="5">
            <div style="font-size: 30px" class="mb-6">
              {{ $t("greet1") }}
              <span class="font-weight-bold border-bottom">Gabriel Serejo</span>
            </div>
            <div>
              {{ $t("introduce2") }}
            </div>
          </v-col>
          <v-col cols="auto"> </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.resume {
  min-height: 400px;
  display: flex;
  align-items: center;
}
.border-bottom {
  border-color: var(--v-cta-base);
  border-width: 0px;
  border-bottom-width: 3px;
  border-style: solid;
}
.main-isometric {
  overflow: hidden;
  @include bp("md") {
    position: relative;
    height: 75vh;
    min-height: 25rem;
    width: 100%;
  }
  .isometric {
    min-width: 920px;
    margin-bottom: 4rem;
    @include bp("md") {
      position: absolute;
      top: 59%;
      left: 90%;
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
      z-index: 0;
      transform: translateX(-50%) translateY(-50%);
      margin-bottom: 0;
    }
    @include bp("lg"){
        top: 59%;
        left: 77%;
    }
  }
  .resume {
    position: relative;
    z-index: 0;
    height: 100%;
    pointer-events: none;
  }
}
</style>