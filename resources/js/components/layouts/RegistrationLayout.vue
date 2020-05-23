<template>
  <div style="min-height:100vh; display:flex; flex-direction:column">
    <div style>
      <v-app-bar dark color="#0091EA" class="flex-grow-0">
        <router-link to="/" tag="span">
          <v-btn class="ma-2 mb-3" tile large color="white" icon>
            <v-icon large>mdi-home</v-icon>
          </v-btn>
        </router-link>
        <h1 class="mb-0">Регистрация</h1>
      </v-app-bar>
    </div>

    <router-view />
  </div>
</template>
<script>
export default {};
</script>