import Vue from "vue";
import Vuex from "vuex";
import productCard from "./modules/productCard";
import auth from "./auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    errorMessage: "",
  },
  getters: {
    errorMessage: (s) => s.errorMessage,
  },
  mutations: {
    setError(state, { message }) {
      state.errorMessage = message;
      setTimeout(() => {
        state.errorMessage = "";
      }, 3000);
    },
  },
  modules: { auth, productCard },
});
