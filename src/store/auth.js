import firebase from "firebase/app";

export default {
  actions: {
    async login({ commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
    async signUp({ dispatch, commit }, { email, password, name }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = await dispatch("getUserId");
        await firebase.database().ref(`/users/${uid}/info`).set({
          name,
        });
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
    async getUserId() {
      return await firebase.auth().currentUser?.uid;
    },
  },
};
