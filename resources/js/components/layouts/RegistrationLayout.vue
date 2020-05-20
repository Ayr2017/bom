<template>

<v-container fluid class="pa-0 align-stretch fill-height-md" >
  <v-row class="pa-0 ma-0 fill-height" align-content-md="stretch">
      <v-col class="ma-0 pa-0">
    <v-app-bar
      dark
      color="#0091EA"
    >
    <h1>Registration layout</h1>
    </v-app-bar>
    <v-row  class="fill-height align-md-center align-xs-stretch align-sm-center" no-gutters>
    <router-view />
    </v-row>
      </v-col>
    </v-row>
    </v-container>
</template>
<script>
export default {};
</script>