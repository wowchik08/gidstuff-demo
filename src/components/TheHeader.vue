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
              :to="{ name: 'Main' }">Женщинам</router-link>
          </li>
          <li class="content-menu__item">
            <router-link class="content-menu__link" :to="{ name: 'Main' }">Мужчинам</router-link>
          </li>
          <li class="content-menu__item">
            <router-link class="content-menu__link" :to="{ name: 'Main' }">Детям</router-link>
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
          <button class="header__btn header__btn--cart" type="button">
            <svg class="cart-icon">
              <use xlink:href="@/assets/images/all-svg.svg#cart"></use>
            </svg>
          </button>
          <span class="header__cart-num">(2)</span>
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
    <div class="cart">
      <div class="cart__inner d-flex">
        <div class="cart__top d-flex">
          <div class="cart__back">
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
          <div class="product-show d-flex">
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
          <div class="product-show d-flex">
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
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  margin-bottom: 12px;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }

  &__run {
    justify-content: space-around;
    background-color: black;
    color: white;
    max-width: 100%;
    margin: 0 auto;
    padding: 14px 0 15px;

    @media (max-width: 768px) {
      padding: 3px 0;
    }
  }

  &__run-item {
    text-transform: uppercase;
    color: white;
    letter-spacing: 3px;
    font-weight: 600;
    font-style: normal;

    @media (max-width: 768px) {
      font-size: 8px;
      letter-spacing: 1px;
    }
  }

  &__nav-main {
    padding: 30px 0;
    align-items: center;

    @media (max-width: 768px) {
      padding: 0;
    }
  }

  &__menu-btn {
    display: none;

    @media (max-width: 768px) {
      background-color: black;
      color: white;
      display: block;
      position: relative;
      overflow: hidden;
      margin: 0 0 0 -15px;
      padding: 0;
      width: 50px;
      height: 50px;
      font-size: 0;
      text-indent: -9999px;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      box-shadow: none;
      border: none;
      border-radius: none;
      cursor: pointer;
      -webkit-transition: background 0.3s;
      transition: background 0.3s;
      top: 0;

      &:focus {
        outline: transparent;
      }
    }

    &.is-active .header__menu-span {
      background: none;

      &::before,
      &::after {
        background-color: white;
        transition-delay: 0s, 0.3s;
      }

      &::before {
        top: 0;
        transform: rotate(45deg);
      }

      &::after {
        bottom: 0;
        transform: rotate(-45deg);
      }
    }

    &.is-active {
      .content-menu {
        position: absolute;
        top: 80px;
        left: 0;
        background-color: white;
        z-index: 10;
        width: 100%;
        justify-content: center;
        padding: 12px 0;

        &--sub {
          top: 120px;
          justify-content: center;
          flex-wrap: wrap;
        }
      }
    }
  }

  &__menu-span {
    display: block;
    position: absolute;
    top: 22px;
    left: 5px;
    right: 5px;
    height: 3px;
    background: white;

    &::before,
    &::after {
      position: absolute;
      display: block;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: white;
      content: "";
      transition: 0.3s;
    }

    &::before {
      top: -9px;
      transition-property: top, transform;
    }

    &::after {
      bottom: -9px;
      transition-property: bottom, transform;
    }
  }

  &__logo {
    display: block;
    margin-left: auto;
    flex-grow: 0.1;

    @media (max-width: 768px) {
      margin: 0 auto;
      flex-grow: 0;
      max-width: 45%;
    }
  }

  &__btns-wrapper {
    align-items: center;
  }

  &__btn {
    border: none;
    background-color: white;
    padding: 0;
    position: relative;
    cursor: pointer;

    &--search {
      display: none;

      @media (max-width: 768px) {
        display: block;
        margin-right: 8px;
      }
    }
  }

  &__cart-num {
    margin: auto;
  }

  &__nav-sub {
    align-items: baseline;

    @media (max-width: 768px) {
      padding: 0;
    }
  }

  &__sub-menu {
    .content-menu__link {
      font-size: 15px;
      font-weight: 500;
      text-transform: none;
      letter-spacing: 0.4px;
      font-style: normal;
    }
  }

  &__search-wrapper {
    max-width: 320px;
    justify-content: center;
    width: 100%;

    @media (max-width: 768px) {
      display: none;
    }
  }

  &__search {
    z-index: 2;
  }
}
@import "@/styles/components/menu.scss";
@import "@/styles/components/cart.scss";
@import "@/styles/components/product-show.scss";
@import "@/styles/components/content-menu.scss";
</style>
