export default {
  state: {
    cart: []
  },
  mutations: {
    ADD_PRODUCT(state, payload) {
      state.cart.push(payload)
    }
  }
}