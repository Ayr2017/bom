<template>
  <v-card class="mx-auto fill-height" color="#26c6da" dark max-width="600" width="100%">
    <v-card-title>
      <v-icon large left>mdi-twitter</v-icon>
      <span class="title font-weight-light">Logotype</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      <v-col cols="12" sm="12" md="12">
        <v-text-field label="E-mail" placeholder="email@domain.com" outlined></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <v-text-field label="Пароль" placeholder="X@as12$oT!" outlined></v-text-field>
      </v-col>
    </v-card-text>
    <v-card-text class="headline font-weight-bold pt-0 pb-0">
      <v-container class="pt-0 pb-0 ">
      <v-checkbox
              v-model="ex4"
              label="Запомнить меня"
              color="white"
              value="error"
              hide-details
              dark
              class="mt-0"
            ></v-checkbox>
      </v-container>
    </v-card-text>
    <v-card-text class="headline font-weight-bold">
      <v-card-actions class="justify-between">
        <v-btn outlined color="white">Отмена</v-btn>
        <v-spacer></v-spacer>
        <v-slide-x-reverse-transition>
          <v-tooltip v-if="true" left>
            <template v-slot:activator="{ on }">
              <v-btn icon class="my-0" @click="resetForm" v-on="on">
                <v-icon>mdi-refresh</v-icon>
              </v-btn>
            </template>
            <span>Refresh form</span>
          </v-tooltip>
        </v-slide-x-reverse-transition>
        <v-btn outlined color="white" @click="submit">Войти</v-btn>
      </v-card-actions>
    </v-card-text>
  </v-card>
</template>
<script>
export default {};
</script>