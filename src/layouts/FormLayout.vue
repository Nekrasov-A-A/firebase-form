<template>
  <v-app>
    <v-main class="d-flex justify-center align-center">
      <div class="my-wrap">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

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
@media screen and (max-width: 1023px) {
  .my-wrap {
    height: 80vh;
    width: 80vw;
  }
}
</style>
