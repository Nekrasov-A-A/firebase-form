import firebase from "firebase/app";

export default {
  state: {
    currentUserName: "",
  },
  actions: {
    async fetchCurrentUser({ commit }, id) {
      const currentInfo = (
        await firebase.database().ref(`/users/${id}/info`).once("value")
      ).val();
      commit("setCurrentUserName", currentInfo);
    },
    async logout({ commit }) {
      await firebase.auth().signOut();
      commit("setCurrentUserName", "");
    },
  },
  mutations: {
    setCurrentUserName(state, username) {
      state.currentUserName = username;
    },
  },
  getters: {
    getCurrentUserName: (state) => state.currentUserName.name,
  },
};
