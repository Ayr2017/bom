<template>
  <v-app>
    <!-- <Header v-if="currentPage" />
    <Drawer v-if="currentPage" />-->

    <!-- <v-navigation-drawer v-if="drawerState" app></v-navigation-drawer> -->

    <!-- <v-app-bar app >
    </v-app-bar>-->

    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- Provides the application the proper gutter -->
      <!-- If using vue-router -->
      <component :is="layout">
        <router-view></router-view>
      </component>
    </v-content>

    <!-- <v-footer v-if="currentPage">
      <span>&copy; {{currentYear}}</span>
    </v-footer>-->
  </v-app>
</template>

<script>
import Header from "./bars/Header.vue";
import Drawer from "./bars/Drawer.vue";
import EmptyLayout from "./layouts/EmptyLayout";
import MainLayout from "./layouts/MainLayout";
import RegistrationLayout from "./layouts/RegistrationLayout";

import { mapState, mapGetters, mapActions } from "vuex";
export default {
  components: { Header, Drawer, EmptyLayout, MainLayout, RegistrationLayout },
  data: () => ({
    currentYear: new Date().getFullYear()
  }),
  mounted() {
    console.log("Component App mounted.");
  },
  computed: {
    currentPage() {
      if (this.$route.path != "/") return true;
    },
    layout() {
      let layout = this.$route.meta.layout;
      console.log(layout);
      return layout ? `${layout}-layout` : "empty-layout";
    }
  },
  methods: {}
};
</script>
