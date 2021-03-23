<template>
  <div 
    class="cart"
    :class="{ 'cart--active': stateCart }"
  >
    <div class="cart__inner d-flex">
      <div class="cart__top d-flex">
        <div 
          class="cart__back"
          @click="hiddenCart"
        >
          <img
            class="cart__img"
            src="@/assets/images/top-slider/left.svg"
            alt=""
          />
        </div>
        <p class="cart__title">
          корзина
          <span class="cart__num">(2)</span>
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
              src="/public/images/product/1.jpg"
              alt=""
            />
          </div>
          <div class="product-show__info d-flex">
            <button type="button" class="product-show__delete"></button>
            <h3 class="product-show__title">Трикотажные брюки джоггеры</h3>
            <div class="product-show__size-color d-flex">
              <div class="product-show__size">
                Размер: <span class="product-show__size-name">L</span>
              </div>
              <div class="product-show__color">
                Цвет: <span class="product-show__color-name">Фиолетовый</span>
              </div>
            </div>
            <div class="product-show__price">
              <span class="product-show__now-price">3 999 &#8372; </span>
              <span class="product-show__old-price"> 4500 &#8372; </span>
              <span class="product-show__sale">-10%</span>
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
          <span class="cart__total-price">7 998 &#8372;</span>
        </div>
        <a class="cart__link" href="#">оформить заказ</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    isCart: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      stateCart: this.isCart
    }
  },
  computed: mapState({
    cart: state => state.Cart.cart,
  }),
  watch: {
    isCart () {
      this.stateCart = this.isCart
    }
  },
  methods: {
    hiddenCart () {
      this.$emit('hiddenCart')
    }
  }
}
</script>

<style>

</style>