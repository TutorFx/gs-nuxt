<template>
  <v-dialog :value="$store.state.contato" persistent max-width="600px">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-card class="pa-5">
        <v-card-text>
            <h5 class="mb-3 primary--text">{{ $t('contato1') }}</h5>
            <h2 class="mb-3">{{ $t('contato2') }}</h2>
            <p class="mb-10">
                {{ $t('contato3') }}
            </p>
          <v-row>
            <v-col cols="12" md="6" class="py-0 my-0">
              <v-text-field
                filled
                dense
                name="name"
                label="Nome"
                color="dark primary"
                v-model="name"
                :rules="nameRules"
                required
                class="my-0 py-0"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" class="py-0 my-0">
              <v-text-field
                filled
                dense
                name="email"
                label="Email"
                color="dark primary"
                :v-model="email"
                :rules="emailRules"
                required
                class="my-0 py-0"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-textarea
            filled
            name="message"
            label="Mensagem"
            color="dark primary"
            :v-model="mensagem"
            required
            class="pt-4"
          ></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary darken-1"
            text
            :small="$vuetify.breakpoint.mobile ? true:undefined"
            @click="$store.commit('contatoToggle')"
          >
            {{$t('close')}}
          </v-btn>
          <v-btn
            depressed
            :small="$vuetify.breakpoint.mobile ? true:undefined"
            color="dark primary"
            type="submit"
            @click="$store.commit('contatoToggle')"
          >
            <v-icon left>mdi-send</v-icon> {{ $t("contatoSubmit") }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 40 || "Name must be less than 40 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    mensagem: "",
  }),
  head() {
    return {
      script: [
        {
          hid: "hs-script-loader",
          src: "//js.hs-scripts.com/7236089.js",
          defer: true,
          async: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>