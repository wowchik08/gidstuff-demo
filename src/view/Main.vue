<template>
  <main>
    <section class="top-slider">
      <VueSlickCarousel
        v-bind="{
          dots: true,
          arrows: true,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
              },
            },
          ],
        }"
        class="slider container"
      >
        <div class="slider__item" v-for="slide in [1, 2, 3, 4, 5]" :key="slide">
          <h1 class="slider__title">
            GidStuff - сервис для удобной покупки брендовой одежды со всего мира
          </h1>
          <a class="slider__link" href="#"> подробнее ({{ slide }}) </a>
        </div>
      </VueSlickCarousel>

      <ul class="brands container container--box d-flex">
        <li class="brands__item">
          <a class="brands__link d-flex" href="#">
            <img
              class="brands__img"
              src="@/assets/images/brands/zara.png"
              alt="zara"
            />
          </a>
        </li>
        <li class="brands__item">
          <a class="brands__link d-flex" href="#">
            <img
              class="brands__img"
              src="@/assets/images/brands/bershka.png"
              alt="berchka"
            />
          </a>
        </li>
        <li class="brands__item">
          <a class="brands__link d-flex" href="#">
            <img
              class="brands__img"
              src="@/assets/images/brands/massimo-dutti.png"
              alt="massimo-dutti"
            />
          </a>
        </li>
        <li class="brands__item">
          <a class="brands__link d-flex" href="#">
            <img
              class="brands__img"
              src="@/assets/images/brands/next.png"
              alt="next"
            />
          </a>
        </li>
        <li class="brands__item">
          <a class="brands__link d-flex" href="#">
            <img
              class="brands__img"
              src="@/assets/images/brands/stradivarius.png"
              alt="stradivarius"
            />
          </a>
        </li>
        <li class="brands__item">
          <a class="brands__link d-flex" href="#">
            <img
              class="brands__img"
              src="@/assets/images/brands/mango.png"
              alt="mango"
            />
          </a>
        </li>
        <li class="brands__item">
          <a class="brands__link d-flex" href="#">
            <img
              class="brands__img"
              src="@/assets/images/brands/zara.png"
              alt="zara"
            />
          </a>
        </li>
        <li class="brands__item">
          <a class="brands__link d-flex" href="#">
            <img
              class="brands__img"
              src="@/assets/images/brands/bershka.png"
              alt="bershka"
            />
          </a>
        </li>
        <li class="brands__item">
          <a class="brands__link d-flex" href="#">
            <img
              class="brands__img"
              src="@/assets/images/brands/massimo-dutti.png"
              alt="massimo-dutti"
            />
          </a>
        </li>
        <li class="brands__item">
          <a class="brands__link d-flex" href="#">
            <img
              class="brands__img"
              src="@/assets/images/brands/next.png"
              alt="next"
            />
          </a>
        </li>
        <li class="brands__item">
          <a class="brands__link d-flex" href="#">
            <img
              class="brands__img"
              src="@/assets/images/brands/stradivarius.png"
              alt="stradivarius"
            />
          </a>
        </li>
        <li class="brands__item">
          <a class="brands__link d-flex" href="#">
            <img
              class="brands__img"
              src="@/assets/images/brands/mango.png"
              alt="mango"
            />
          </a>
        </li>
      </ul>
    </section>

    <section class="offers container">
      <h2 class="offers__title">Сезонные предложения</h2>
      <div class="offers__items">
        <ProductCard
          v-for="product in products"
          :key="product.id + Date.now()"
          :product="product"
        />
      </div>
      <a class="offers__btn" href="#">показать еще</a>
    </section>
  </main>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import ProductCard from "@/components/ProductCard";

export default {
  name: "Main",
  components: { VueSlickCarousel, ProductCard },
  data() {
    return {
      products: [
        {
          id: 1,
          priceNew: 3999,
          priceOld: 4500,
          discount: 10,
          brand: "zara",
          name: "Трикотажные брюки джоггеры",
          colors: ["orange", "red", "blue", "yellow", "lightblue", "black"],
        },
        {
          id: 2,
          priceNew: 1999,
          priceOld: 2500,
          discount: 15,
          brand: "bershka",
          name: "Классическое пальто",
          colors: ["yellow", "lightblue", "black", "orange", "red", "blue"],
        },
        {
          id: 3,
          priceNew: 4999,
          priceOld: 6500,
          discount: 25,
          brand: "massimo dutti",
          name: "Куртка рубашка кожанная",
          colors: ["black", "orange", "red", "blue", "brown", "gray"],
        },
        {
          id: 4,
          priceNew: 1599,
          priceOld: 2000,
          discount: 30,
          brand: "mango",
          name: "Трикотажные брюки джоггеры",
          colors: ["blue", "brown", "gray", "black", "orange", "red"],
        },
        {
          id: 3,
          priceNew: 4999,
          priceOld: 6500,
          discount: 25,
          brand: "massimo dutti",
          name: "Куртка рубашка кожанная",
          colors: ["black", "orange", "red", "blue", "brown", "gray"],
        },
        {
          id: 4,
          priceNew: 1599,
          priceOld: 2000,
          discount: 30,
          brand: "mango",
          name: "Трикотажные брюки джоггеры",
          colors: ["blue", "brown", "gray", "black", "orange", "red"],
        },
        {
          id: 1,
          priceNew: 3999,
          priceOld: 4500,
          discount: 10,
          brand: "zara",
          name: "Трикотажные брюки джоггеры",
          colors: ["orange", "red", "blue", "yellow", "lightblue", "black"],
        },
        {
          id: 2,
          priceNew: 1999,
          priceOld: 2500,
          discount: 15,
          brand: "bershka",
          name: "Классическое пальто",
          colors: ["yellow", "lightblue", "black", "orange", "red", "blue"],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/components/vue-main.scss";
</style>