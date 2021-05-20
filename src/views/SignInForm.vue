<template>
  <v-main>
    <v-form @submit.prevent="onSubmit" ref="signUpForm">
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
    <div v-if="test">{{ testValue }}</div>
  </v-main>
</template>

<script>
export default {
  name: "SignInForm",
  data: () => ({
    test: false,
    testValue: "",
    email: "",
    password: "",
  }),

  methods: {
    onSubmit() {
      const formData = {
        password: this.password,
        email: this.email,
      };
      this.showTestCase(formData);
      this.$refs.signUpForm.reset();
    },
    showTestCase(value) {
      this.test = true;
      this.testValue = value;
    },
  },
};
</script>
