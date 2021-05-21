<template>
  <v-app>
    <v-app-bar
      color="cyan lighten-4"
      app
      prominent
      shrink-on-scroll
      src="https://img.brandshop.ru/cache/products/m/main-air-jordan-1-retro-high-og-bloodline-pryzhok-v-nebo-z_1128x634.jpg"
      fade-img-on-scroll
      scroll-target
      scroll-threshold="300"
      height="150"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(0,255,222,0.45451684091605393), rgba(0,255,192,0.2248249641653537)"
          position="center top 65%"
        ></v-img>
      </template>
      <v-toolbar-title class="align-self-center">SHOP</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items style="height: 100%">
        <v-btn text> Home </v-btn>
        <v-divider vertical class="white"></v-divider>
        <v-btn text> Catalog </v-btn>
        <v-divider vertical class="white"></v-divider>
        <v-btn @click="logoutAndChangeRoute" text>Logout</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main app>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["logout"]),
    logoutAndChangeRoute() {
      this.logout();
      this.$router.push("/signin");
    },
  },
};
</script>
