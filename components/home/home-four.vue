<template>
  <div class="secondary">
    <v-container class="pt-15">
      <v-row>
        <v-col cols="12" md="3">
          <h5 class="mb-3 primary--text">{{ $t('contato1') }}</h5>
          <h2 class="mb-3">{{ $t('contato2') }}</h2>
          <p>
            {{ $t('contato3') }}
          </p>
        </v-col>
        <v-col cols="12" md="9">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-row>
              <v-col>
                <v-text-field
                  filled
                  name="name"
                  label="Nome"
                  color="dark primary"
                  v-model="name"
                  :rules="nameRules"
                  required
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  filled
                  name="email"
                  label="Email"
                  color="dark primary"
                  :v-model="email"
                  :rules="emailRules"
                  required
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
            ></v-textarea>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
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
};
</script>

<style>
</style>