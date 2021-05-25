<template>
  <div>
    <div class="test">HELLO</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapGetters(["getCards"]),
  },
};
</script>

<style scoped>
.test {
  height: 200vh !important;
}
.hello {
  background-color: red;
}
</style>
