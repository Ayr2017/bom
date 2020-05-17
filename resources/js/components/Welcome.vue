<template>
  <v-card height="100%" style="border-radius:0" class="d-flex pa-0">
    <v-img :src='mayak' aspect-ratio="1.7">
    <!-- <v-img src="https://picsum.photos/1510/1300?random" aspect-ratio="1.7"> -->
      <template>
        <v-row class="fill-height ma-0" align="stretch" justify="center">
          <v-layout key="1" justify-center align-center>
            <v-col align="stretch" justify="center">
              <p
                class="font-weight-thin display-4 indigo--text text--lighten-5 text-center"
                style="text-shadow:2px 2px 2px #aaaaaa66"
              >Best service every day</p>
              <v-row justify="center">
              <v-flex xs12 md4 lg4 class="ma-5">
                 <v-btn block color="#2196F3" class="white--text"  @click="show = true">Войти</v-btn>
              </v-flex>
              <v-flex xs12 md4 lg4 class="ma-5">
                 <v-btn block color="#03A9F4" class="white--text"  @click="show = true">Зарегистрироваться</v-btn>
              </v-flex>
              </v-row>
            </v-col>
          </v-layout>
        </v-row>
      </template>
    </v-img>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    cards: [
      {
        title: "Pre-fab homes",
        src:
          "https://cdn.stocksnap.io/img-thumbs/960w/soccer-stadium_UBTHHULIFA.jpg",
        flex: 12
      }
    ]
  }),
  computed:{
    mayak(){
      return require("./../../../assets/pictures/mayak.jpg")
    }
  },
  mounted() {
    console.log("Component Welcome mounted.");
  }
};
</script>
