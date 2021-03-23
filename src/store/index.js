import Vue from "vue";
import Vuex from "vuex";

import Products from "./products.js";
import Cart from "./cart.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Products,
    Cart
  }
});