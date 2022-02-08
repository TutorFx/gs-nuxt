<template>
    <div @click="$vuetify.theme.dark = !$vuetify.theme.dark" class="dark-toggle">
        <v-btn fab icon>
            <v-icon v-if="$vuetify.theme.dark ">mdi mdi-weather-night</v-icon>
            <v-icon v-else>mdi mdi-white-balance-sunny</v-icon>
        </v-btn>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.dark-toggle{
    svg{
        height: 30px;
        width: 30px;
    }
}
</style>