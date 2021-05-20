<template>
  <v-main>
    <v-form @submit.prevent="onSubmit" ref="signInForm">
      <v-text-field type="email" label="Email" v-model="email"></v-text-field>
      <v-text-field
        type="password"
        label="Password"
        v-model="password"
      ></v-text-field>

      <v-btn
        class="pr-6 pl-6 mt-5"
        outlined
        color="indigo darken-4"
        type="submit"
        >Sign In</v-btn
      >
    </v-form>
    <div class="d-flex mt-6">
      <p>Don't have account?</p>
      <router-link to="/signup" class="pl-1">Sign Up</router-link>
    </div>
  </v-main>
</template>

<script>
export default {
  name: "SignInForm",
  data: () => ({
    email: "",
    password: "",
  }),

  methods: {
    async onSubmit() {
      const formData = {
        email: this.email,
        password: this.password,
      };

      try {
        await this.$store.dispatch("login", formData);
        this.$router.push("/");
      } catch (e) {
        this.$refs.signInForm.reset();
      }
    },
  },
};
</script>
