<template>
  <v-main>
    <div v-for="(card, index) in getCards" :key="index" class="wrapper">
      <img :src="card.imgURL" />
      <p>{{ card.model }}</p>
      <p>{{ card.price }}$</p>
    </div>
  </v-main>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ProductCard",
  computed: {
    ...mapGetters(["getCards"]),
  },
};
</script>
<style scoped>
.wrapper {
  width: 10%;
  cursor: pointer;
}
.wrapper img {
  max-width: 100%;
}
</style>
