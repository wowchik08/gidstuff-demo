import productsData from '../mock/products'

export default {
  state: {
      products: null
  },
  mutations: {
    SET_PRODUCTS(state, payload) {
      state.products = payload
    }
  },
  actions: {
    async LOAD_PRODUCTS({ commit }) {
       const products = productsData
       commit("SET_PRODUCTS", products);
    }
  }
}