<template>
  <v-app>
    <div class="my-2">
      <v-btn text small>Normal</v-btn>
    </div>
    <div class="my-2">
      <v-btn color="error" small>Success</v-btn>
    </div>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    console.log("Component Users mounted.");
  }
};
</script>
