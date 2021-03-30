<template>
  <header class="header">
    <ul class="header__run d-flex">
      <li class="header__run-item">Оригинальные вещи из испании</li>
      <li class="header__run-item">Доставка напрямую</li>
      <li class="header__run-item">Все бренды под рукой</li>
      <li class="header__run-item">мониторинг цен</li>
    </ul>
    <nav class="header__nav container">
      <div class="header__nav-main d-flex">
        <button class="header__menu-btn">
          <span class="header__menu-span">menu toggle</span>
        </button>
        <ul class="content-menu d-flex">
          <li class="content-menu__item">
            <router-link
              class="content-menu__link content-menu__link--active"
              :to="{ name: 'Main' }"
              >Женщинам</router-link
            >
          </li>
          <li class="content-menu__item">
            <router-link class="content-menu__link" :to="{ name: 'Main' }"
              >Мужчинам</router-link
            >
          </li>
          <li class="content-menu__item">
            <router-link class="content-menu__link" :to="{ name: 'Main' }"
              >Детям</router-link
            >
          </li>
        </ul>
        <router-link class="logo header__logo" :to="{ name: 'Main' }">
          <img src="@/assets/images/gidstuff-logo.svg" alt="Логотип gidstuff" />
        </router-link>
        <ul class="menu d-flex">
          <li class="menu__item d-flex">
            <select name="lang" class="header__langueg custom-select">
              <option value="РУС" selected>РУС</option>
              <option value="РУС">УКР</option>
              <option value="РУС">ENG</option>
            </select>
          </li>
          <li class="menu__item d-flex">
            помощь
            <svg class="down-icon">
              <use xlink:href="@/assets/images/all-svg.svg#down"></use>
            </svg>
            <ul class="menu__sub-list">
              <li class="menu__sub-item">
                <a class="menu__sub-link" href="#">О нас</a>
              </li>
              <li class="menu__sub-item">
                <a class="menu__sub-link" href="#">Доставка и оплата</a>
              </li>
              <li class="menu__sub-item">
                <a class="menu__sub-link" href="#">Гарантия и возврат</a>
              </li>
              <li class="menu__sub-item">
                <a class="menu__sub-link" href="#">Контакты</a>
              </li>
              <li class="menu__sub-item">
                <a class="menu__sub-link" href="#">Текстовая страница</a>
              </li>
              <li class="menu__sub-item">
                <a class="menu__sub-link" href="#">Текстовая страница</a>
              </li>
              <li class="menu__sub-item">
                <a class="menu__sub-link" href="#">Текстовая страница</a>
              </li>
            </ul>
          </li>
        </ul>
        <div class="header__btns-wrapper d-flex">
          <button class="header__btn header__btn--search" type="button">
            <svg class="search-icon-big">
              <use xlink:href="@/assets/images/all-svg.svg#search"></use>
            </svg>
          </button>
          <button 
            class="header__btn header__btn--cart" 
            type="button"
            @click="showCart"
          >
            <svg class="cart-icon">
              <use xlink:href="@/assets/images/all-svg.svg#cart"></use>
            </svg>
          </button>
          <span class="header__cart-num"><span v-show="cart.length">({{cart.length}})</span></span>
        </div>
      </div>
      <div class="header__nav-sub d-flex space-between">
        <ul class="content-menu content-menu--sub d-flex header__sub-menu">
          <li class="content-menu__item">
            <a class="content-menu__link" href="#">Новинки</a>
          </li>
          <li class="content-menu__item">
            <a class="content-menu__link" href="#">Одежда</a>
          </li>
          <li class="content-menu__item">
            <a class="content-menu__link" href="#">Обувь</a>
          </li>
          <li class="content-menu__item">
            <a class="content-menu__link" href="#">Аксессуары</a>
          </li>
          <li class="content-menu__item">
            <a class="content-menu__link" href="#">Сумки</a>
          </li>
          <li class="content-menu__item">
            <a class="content-menu__link" href="#">Спорт</a>
          </li>
          <li class="content-menu__item">
            <a class="content-menu__link" href="#">Бренды</a>
          </li>
        </ul>

        <div class="header__search-wrapper d-flex">
          <svg class="search-icon">
            <use xlink:href="@/assets/images/all-svg.svg#search"></use>
          </svg>
          <div class="custom-input header__search-wrapper d-flex">
            <input
              type="email"
              class="custom-input__input"
              id="search"
              placeholder=" "
              required
            />
            <label class="custom-input__placeholder" for="search"
              >Что вы ищете</label
            >
          </div>
        </div>
      </div>
    </nav>
    <TheCart 
      :isCart="isCart"
      @hiddenCart="hiddenCart" 
    />
  </header>
</template>

<script>
import TheCart from "@/components/TheCart";
import { mapState } from "vuex";

export default {
  data () {
    return {
      isCart: false
    }
  },
  components: {
    TheCart
  },
  computed: mapState({
    cart: (state) => state.Cart.cart,
  }),
  methods: {
    showCart () {
      this.isCart = true
    },
    hiddenCart () {
      this.isCart = false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/components/the-header.scss";
</style>
