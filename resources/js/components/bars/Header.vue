<template>
  <v-app-bar dense dark app>
    <v-app-bar-nav-icon @click="showDrawer"></v-app-bar-nav-icon>

    <v-toolbar-title>Bombilas</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon @click="hideDrawer">
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon @click="()=>{}">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-menu left bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="n in 5" :key="n" @click="() => {}">
          <v-list-item-title>Option {{ n }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapState(["drawerState"])
  },
  methods: {
    ...mapActions(["showDrawer", "hideDrawer"]),
  },
  mounted() {
    console.log("Component Header mounted");
  }
};
</script>