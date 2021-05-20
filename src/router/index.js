import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase/app";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { layout: "main", auth: true },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    meta: { layout: "main", auth: true },
  },
  {
    path: "/signup",
    name: "SignUpForm",
    component: () => import("../views/SignUpForm.vue"),
    meta: { layout: "form" },
  },
  {
    path: "/signin",
    name: "SignInForm",
    component: () => import("../views/SignInForm.vue"),
    meta: { layout: "form" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, _, next) => {
  const currentUser = firebase.auth().currentUser;
  if (to.meta.auth && !currentUser) {
    next("/signin");
  } else {
    next();
  }
});

export default router;
