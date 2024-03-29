import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Error from "../views/Error.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
   path: "/inventario",
   name: "Inventario",
    component: () =>
      import("../views/Inventario.vue"),  
  },
  {
   path: "/carrito",
   name: "Carrito",
    component: () =>
      import("../views/Carrito.vue"),  
  },
  {
   path: "/ventas",
   name: "Ventas",
    component: () =>
      import("../views/Ventas.vue"),  
  },
  {
    path: "/*",
    name: "Error 404",
    component: Error
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
