<template>
  <v-card
    class="mx-auto my-md-12 my-lg-12 my-sm-12"
    color="#26c6da"
    dark
    max-width="600"
    width="100%"
    :min-height="height"
  >
    <v-card-title align="center">
      <v-icon large left>mdi-twitter</v-icon>
      <span class="title font-weight-light">Logotype</span>
    </v-card-title>

    <v-card-text>
      <v-col cols="12" sm="12" md="12">
        <v-text-field label="E-mail" placeholder="email@domain.com" outlined></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <v-text-field label="Пароль" placeholder="X@as12$oT!" outlined></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <v-text-field label="Телефон" placeholder="+79012345678" outlined></v-text-field>
      </v-col>
      <v-card-actions class="justify-between">
        
        <v-slide-x-reverse-transition>
          <v-tooltip v-if="true" left>
            <template v-slot:activator="{ on }">
              <v-btn icon class="my-0" v-on="on">
                <v-icon>mdi-refresh</v-icon>
              </v-btn>
            </template>
            <span>Refresh form</span>
          </v-tooltip>
        </v-slide-x-reverse-transition>
        
      </v-card-actions>
      <v-card-actions class="justify-between">
        <v-btn outlined color="white">Отмена</v-btn>
        <v-spacer></v-spacer>
        <v-btn outlined color="white">Зарегистрироваться</v-btn>
      </v-card-actions>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "registration-client",
  mounted() {
    console.log("Registration client mounted");
  },
  computed: {
    height() {
      return this.$vuetify.breakpoint.xs ? "100vh" : "40vh";
    }
  }
};
</script>