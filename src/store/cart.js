export default {
  state: {
    cart: []
  },
  getters: {
    TOTAL_PRICE(state) {
      return state.cart.reduce((sum, current) => sum + current.uah_price, 0)
    }
  },
  mutations: {
    ADD_PRODUCT(state, payload) {
      state.cart.push(payload)
    },
    DELETE_PRODUCT(state, payload) {
      const index = state.cart.findIndex(product => product.id === payload)
      state.cart.splice(index, 1)
    }
  }
}