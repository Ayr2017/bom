<template>
  <v-app>
    <Header v-if="currentPage" />
    <Drawer v-if="currentPage" />

    <!-- <v-navigation-drawer v-if="drawerState" app></v-navigation-drawer> -->

    <!-- <v-app-bar app >
    </v-app-bar>-->

    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- Provides the application the proper gutter -->
        <!-- If using vue-router -->
        <router-view></router-view>
    </v-content>

    <v-footer app>
      <span>&copy; {{currentYear}}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Header from "./bars/Header.vue";
import Drawer from "./bars/Drawer.vue";

import {mapState, mapGetters, mapActions } from 'vuex';
export default {
  components: { Header, Drawer },
  data: () => ({
    currentYear: new Date().getFullYear(),
  }),
  mounted() {
    console.log("Component App mounted.");
  },
  computed: {
    currentPage() {
      if (this.$route.path != "/") return true;
    },
  },
  methods: {
  }
};
</script>
