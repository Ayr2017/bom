<template>
  <v-col class="pa-0" style="min-height:90vh; justify-content:center">
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

      <v-card-text >
        <v-col cols="12" sm="12" md="12" class="px-auto pr-8">
          <v-row align="center">
          <v-btn block  class="ma-2" outlined color="white"><span> как водитель</span></v-btn>
          </v-row>
            
        </v-col>
        <v-col cols="12" sm="12" md="12" class="px-auto pr-8">
          <v-row align="center">
          <v-btn block  class="ma-2" outlined color="white"><span> как клиент</span></v-btn>
          </v-row>
        </v-col>
      </v-card-text>
      
      
    </v-card>
  </v-col>
</template>
<script>
export default {
  computed: {
    height() {
      console.log(this.$vuetify.breakpoint);
      return this.$vuetify.breakpoint.xs ? "100vh" : "40vh";
    }
  }
};
</script>