import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyCsF-rvK0taJnTfDJqapdqcH-Pm47XuTZQ",
  authDomain: "vue-shop-53e79.firebaseapp.com",
  projectId: "vue-shop-53e79",
  storageBucket: "vue-shop-53e79.appspot.com",
  messagingSenderId: "623592438034",
  appId: "1:623592438034:web:c3bf3c2f3609e9483ddbcb",
  measurementId: "G-KMGNMNX0TB",
});
let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
