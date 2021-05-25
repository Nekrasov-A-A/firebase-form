<template>
  <v-app>
    <v-app-bar
      color="cyan lighten-4"
      app
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

        <v-menu open-on-hover bottom offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" text>
              {{ getCurrentUserName }} <v-icon>mdi-menu-down</v-icon>
            </v-btn>
          </template>
          <v-list class="d-flex align-center" style="flex-direction: column">
            <v-list-item>
              <v-btn text>Settings</v-btn>
            </v-list-item>
            <v-list-item
              ><v-btn @click="logoutAndChangeRoute" text
                >Logout</v-btn
              ></v-list-item
            >
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-app-bar>

    <v-main app>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getCurrentUserName"]),
  },
  methods: {
    ...mapActions(["logout", "getUserId", "fetchCurrentUser"]),
    logoutAndChangeRoute() {
      this.logout();
      this.$router.push("/signin");
    },
  },
  mounted: async function () {
    if (!this.getCurrentUserName) {
      const user = await this.getUserId();
      this.fetchCurrentUser(user);
    }
  },
};
</script>
