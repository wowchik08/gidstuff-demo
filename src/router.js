import Vue from "vue";
import VueRouter from "vue-router";

import Main from "./view/Main.vue";
import Product from "./view/Product.vue";
import Order from "./view/Order.vue";
import OrderSuccess from "./view/OrderSuccess.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/main",
    name: "Main",
    component: Main,
  },
  {
    path: "/product/:id",
    name: "Product",
    component: Product,
    props: true
  },
  {
    path: "/order",
    name: "Order",
    component: Order,
  },
  {
    path: "/order-success",
    name: "OrderSuccess",
    component: OrderSuccess,
  },
  {
    path: "*",
    redirect: {
      name: "Main",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
