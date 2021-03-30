<template>
  <div class="cart" :class="{ 'cart--active': stateCart }">
    <div class="cart__inner d-flex">
      <div class="cart__top d-flex">
        <div class="cart__back" @click="hiddenCart">
          <img
            class="cart__img"
            src="@/assets/images/top-slider/left.svg"
            alt=""
          />
        </div>
        <p class="cart__title">
          корзина
          <span class="cart__num">({{cart.length}})</span>
        </p>
      </div>
      <div class="cart__content">
        <div
          class="product-show d-flex"
          v-for="product in cart"
          :key="product.id"
        >
          <div class="product-show__inner">
            <img
              class="product-show__img"
              :src="product.images[0]"
              alt=""
            />
          </div>
          <div class="product-show__info d-flex">
            <button @click="deleteProduct(product.id)" type="button" class="product-show__delete"></button>
            <h3 class="product-show__title">{{ product.name }}</h3>
            <div class="product-show__size-color d-flex">
              <div class="product-show__size">
                Размер: <span class="product-show__size-name">L</span>
              </div>
              <div class="product-show__color">
                Цвет: <span class="product-show__color-name">Фиолетовый</span>
              </div>
            </div>
            <div class="product-show__price">
              <span class="product-show__now-price">{{ product.uah_price }} &#8372; </span>
              <!-- <span class="product-show__old-price"> 4500 &#8372; </span>
              <span class="product-show__sale">-10%</span> -->
            </div>
            <div class="product-show__delivery">
              <span class="product-show__delivery-timing">7-10 дней</span>
            </div>
            <div class="product-show__amount">
              <input
                class="product-show__amount-control"
                type="number"
                value="1"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="cart__footer d-flex">
        <div class="cart__total">
          итого:
          <span class="cart__total-price">{{ TOTAL_PRICE }} &#8372;</span>
        </div>
        <a class="cart__link" @click="makeOrder"
          >оформить заказ</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex'

export default {
  props: {
    isCart: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      stateCart: this.isCart,
    };
  },
  computed: {
    ...mapState({
      cart: (state) => state.Cart.cart,
    }),
    ...mapGetters([
      'TOTAL_PRICE'
    ])
  },
  watch: {
    isCart() {
      this.stateCart = this.isCart;
    },
  },
  methods: {
    ...mapMutations([
      'DELETE_PRODUCT'
    ]),
    hiddenCart() {
      this.$emit("hiddenCart");
    },
    makeOrder() {
      this.hiddenCart();
      if(this.cart.length) {
        this.$router.push({ name: "Order" });
      }
    },
    deleteProduct(id) {
      this.DELETE_PRODUCT(id)
    }
  },
};
</script>

<style>
</style>