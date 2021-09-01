<template>
  <div>
    <div class="wrapper">
      <h1>Thanks for testing!</h1>
    </div>
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

<style lang="sass" scoped>
.wrapper
  min-height: 200vh !important
  display: flex
  justify-content: center
  > h1
    margin-top: 50px
</style>
