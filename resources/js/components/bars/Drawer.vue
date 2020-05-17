<template>
  <v-navigation-drawer v-model="drawerModel"  absolute temporary style="position:fixed; top:0; left:0; overflow-y:auto; ">
    <v-list-item>
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>John Leider</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "Drawer",
  data: () => ({
    items: [
      { title: "Home", icon: "mdi-home" },
      { title: "About", icon: "mdi-information" }
    ]
  }),
  computed: {
    ...mapGetters(["getDrawerState"]),
    ...mapState(['drawerState']),
    drawerModel: {
      get() {
        return this.getDrawerState;
      },
      set(newState) {
        newState?this.showDrawer():this.hideDrawer();

      }
    }
  },
  methods: {
    ...mapActions(["showDrawer", "hideDrawer"])
  },
  mounted() {
    console.log("Component Drawer mounted");
  }
};
</script>