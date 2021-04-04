import productsData from '../mock/test_products_ru.json'

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