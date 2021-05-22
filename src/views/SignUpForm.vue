<template>
  <v-main>
    <v-form @submit.prevent="onSubmit" v-model="formValidity" ref="signUpForm">
      <v-text-field
        type="text"
        label="Username"
        v-model.trim="username"
        :rules="usernameRules"
      ></v-text-field>
      <v-text-field
        type="email"
        label="Email"
        v-model="email"
        :rules="emailRules"
      ></v-text-field>
      <v-text-field
        type="password"
        label="Password"
        v-model="password"
        :rules="passwordRules"
      ></v-text-field>
      <v-checkbox v-model.lazy="checkbox" :rules="checkboxRules">
        <template v-slot:label>
          <div>
            Accept cause
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <a
                  target="_blank"
                  href="https://ru.wiktionary.org/wiki/%D1%81%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D0%B8%D1%82%D1%8C%D1%81%D1%8F"
                  @click.stop
                  v-on="on"
                  class="pl-1"
                >
                  accept
                </a>
              </template>
              <span>Opens in new window</span>
            </v-tooltip>
          </div>
        </template>
      </v-checkbox>
      <v-btn
        class="pr-6 pl-6 ml-6 mt-5"
        outlined
        color="indigo darken-4"
        type="submit"
        :disabled="!formValidity"
        >submit</v-btn
      >
    </v-form>
  </v-main>
</template>

<script>
export default {
  name: "SignUpForm",
  data: () => ({
    username: "",
    email: "",
    password: "",
    usernameRules: [
      (value) => !!value || `Can't be empty`,
      (value) => value?.trim().length !== 0 || "Only space, right?",
      (value) => value?.trim().length < 15 || "Maximum 15 characters ",
    ],
    emailRules: [
      (value) => !!value || `Can't be empty`,
      (value) => !/[\s]/gi.test(value) || "Space in email? Stop kidding",
      (value) =>
        (value?.indexOf("@") !== 0 && value?.indexOf("@") !== -1) ||
        "Wrong email",
      (value) => value?.includes(".") || "Wrong email",
      (value) => value?.indexOf(".") <= value?.length - 2 || "Wrong email",
      (value) =>
        value?.lastIndexOf(".") - value?.indexOf("@") > 1 || "Wrong email",
    ],
    passwordRules: [
      (value) => !!value || `Can't be empty`,
      (value) => value?.length >= 6 || "min 6 symbols",
      (value) => !/[\s]/gi.test(value) || "Space in password? Stop kidding",
      (value) => /[0-9]/gi.test(value) || "Need any number in password",
    ],
    checkboxRules: [(value) => value],
    formValidity: false,
    checkbox: false,
  }),
  methods: {
    async onSubmit() {
      const formData = {
        email: this.email,
        password: this.password,
        name: this.username,
      };
      try {
        await this.$store.dispatch("signUp", formData);
        this.$router.push("/");
      } catch (e) {
        this.$refs.signUpForm.reset();
      }
    },
  },
};
</script>
