<template>
  <v-app>
    <v-app-bar app>
      something
      <v-spacer></v-spacer>
      <v-btn @click="logout">Logout</v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: mapActions(["logout"]),
};
</script>
