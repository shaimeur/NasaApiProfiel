import { createRouter, createWebHistory } from "vue-router";
import Test from "../views/Test.vue";

const routes = [
  {
    path: "/test",
    name: "Test",
    component: Test,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
