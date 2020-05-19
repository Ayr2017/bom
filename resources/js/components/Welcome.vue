<template>
  <v-card height="100%" style="border-radius:0" class="d-flex pa-0">
    <v-img :src="mayak" :aspect-ratio="16/5">
      <!-- <v-img src="https://picsum.photos/1510/1300?random" aspect-ratio="1.7"> -->
      <template>
        <v-row class="fill-height ma-0" align="stretch" justify="center">
          <v-layout key="1" justify-center align-center>
            <v-col align="stretch" justify="center">
              <p
                class="font-weight-thin display-4 indigo--text text--lighten-5 text-center"
                style="text-shadow:2px 2px 2px #aaaaaa66"
              >Test service every day</p>
              <v-row justify="center">
                <v-flex xs12 sm4 md4 lg4 class="ma-5">
                  <router-link to="/login" tag="span">
                    <v-btn block color="#2196F3" class="white--text">Войти</v-btn>
                  </router-link>
                </v-flex>
                <v-flex xs12 sm4 md4 lg4 class="ma-5">
                  <router-link to="/registration" tag="span">
                  <v-btn
                    block
                    color="#03A9F4"
                    class="white--text"
                  >Зарегистрироваться</v-btn>
                  </router-link>
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
  computed: {
    mayak() {
      return require("./../../../assets/pictures/mayak.jpg");
    }
  },
  mounted() {
    console.log("Component Welcome mounted.");
  },
  methods:{
    registration(){
      axios.post('/post').then(response=> console.log(response))
    }
  }
};
</script>
