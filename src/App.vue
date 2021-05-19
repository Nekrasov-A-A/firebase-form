<template>
  <v-main :is="layout">
    <router-view />
  </v-main>
</template>

<script>
import FormLayout from "./layouts/FormLayout";
import MainLayout from "./layouts/MainLayout";
export default {
  name: "App",
  computed: {
    layout() {
      return `${this.$route.meta.layout}-layout`;
    },
  },
  components: {
    FormLayout,
    MainLayout,
  },
};
</script>
