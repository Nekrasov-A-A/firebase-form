<template>
  <v-app>
    <div v-if="error" class="error">{{ error }}</div>
    <v-main class="d-flex justify-center align-center">
      <div class="my-wrap">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  computed: {
    error() {
      return this.$store.getters.errorMessage;
    },
  },
};
</script>

<style scoped>
.my-wrap {
  height: 60vh;
  width: 50%;
  margin: 0 auto;
  padding: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.6);
}
.error {
  position: absolute;
  top: 5%;
  margin-top: 10px;
  padding: 5px;
  background-color: transparent;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 24px;
}
@media screen and (max-width: 1023px) {
  .my-wrap {
    height: 80vh;
    width: 80vw;
  }
  .error {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    font-size: 20px;
  }
}
</style>
