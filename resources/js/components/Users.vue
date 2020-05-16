<template>
  <v-app>
    <v-form ref="form" lazy-validation>
      <v-text-field :counter="10" label="Name" required></v-text-field>

      <v-text-field  label="E-mail" required></v-text-field>

      <v-btn color="default" @click="console.log(1)">Reset Validation</v-btn>
    </v-form>

    <v-card class="mx-auto" max-width="344" outlined v-for="post in allPosts" :key="post.id">
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">OVERLINE</div>
          <v-list-item-title class="headline mb-1">{{post.title}}</v-list-item-title>
          <v-list-item-subtitle>{{post.body}}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn text>Button</v-btn>
        <v-btn text>Button</v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
import axios from "axios";
import {mapGetters, mapActions} from 'vuex';
export default {
  data: () => ({}),
  computed: mapGetters(['allPosts']),
  async mounted() {
    console.log("Component Users mounted.");
    this.fetchPosts(10);
  },
  
  methods: {
    ...mapActions(['fetchPosts'])
  }
};
</script>

