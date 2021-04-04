<template>
  <main>
    <section class="product d-flex space-between container">
      <div class="product__img-wrapper">
        <img
          v-for="(image, index) in product.images"
          :key="index"
          class="product__img"
          :src="image"
          alt="image"
        />
      </div>
      <div class="product__info">
        <form class="product__form" action="#">
          <div class="product__brand">Zara</div>
          <h3 class="product__name">{{ product.name }}</h3>
          <div class="product__availability d-flex">
            Код товара: <span class="product__availability--cod">12314125</span>
            <span class="product__availability--check">В наличии</span>
          </div>
          <div class="product__color">
            Цвета: <span class="product__color--name"></span>
            <div
              class="product__color-links"
              v-for="(colors, index) of product.color_combinations"
              :key="index"
            >
              <div
                class="product__color-wrapper"
                v-for="color in colors"
                :key="color"
              >
                <div
                  :class="`product__color-link product__color-link--${color}`"
                ></div>
              </div>
            </div>
          </div>
          <div class="product__size d-flex">
            <label>
              <span class="product__size-text">Выбери размер</span>
              <select
                class="product__size-choice custom-select"
                name="size"
                v-model="productSize"
              >
                <option
                  v-for="size in product.sizes"
                  :value="size"
                  :key="size"
                >
                  {{ size }}
                </option>
              </select>
            </label>
            <a class="product__size-link">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.8747 5.24473L14.7553 0.125308C14.5882 -0.0417693 14.3183 -0.0417693 14.1512 0.125308L0.125308 14.1512C-0.0417693 14.3183 -0.0417693 14.5882 0.125308 14.7553L5.24473 19.8747C5.4118 20.0418 5.6817 20.0418 5.84877 19.8747L19.8747 5.84877C20.0418 5.6817 20.0418 5.4118 19.8747 5.24473ZM5.54461 18.9665L1.03352 14.4554L4.42219 11.0667L5.96016 12.6047C6.12295 12.7761 6.39713 12.7803 6.56421 12.6133C6.73557 12.4505 6.73985 12.1763 6.57278 12.0092C6.56849 12.0049 6.56849 12.0049 6.56421 12.0006L5.02624 10.467L6.14437 9.34883L8.54343 11.7479C8.71051 11.915 8.98468 11.915 9.14748 11.7436C9.31456 11.5765 9.31456 11.3066 9.14748 11.1396L6.74842 8.74049L7.86655 7.62236L9.40452 9.15605C9.5716 9.32312 9.84149 9.32312 10.0086 9.15605C10.1756 8.98897 10.1756 8.71908 10.0086 8.552L8.4706 7.01831L9.58873 5.90018L11.9878 8.29924C12.1549 8.46632 12.4248 8.46632 12.5918 8.29924C12.7589 8.13216 12.7589 7.86227 12.5918 7.69519L10.1928 5.29613L11.3109 4.178L12.8489 5.71597C13.016 5.88305 13.2859 5.88733 13.4529 5.72025C13.62 5.55318 13.6243 5.28328 13.4572 5.1162C13.4572 5.1162 13.4572 5.1162 13.4529 5.11192L11.9278 3.5611L13.0459 2.44297L15.445 4.84203C15.6121 5.0091 15.882 5.0091 16.0491 4.84203C16.2161 4.67495 16.2161 4.40506 16.0491 4.23798L13.65 1.83892L14.4554 1.03352L18.9665 5.54461L5.54461 18.9665Z"
                  fill="black"
                />
              </svg>
              <span class="product__size-link--border">Таблица размеров</span>
            </a>
          </div>
          <div class="product__price">
            <span class="product__price-now"
              >{{ product.uah_price }} &#8372;</span
            >
            <!-- <span class="product__old-price">4500 &#8372;</span>
            <span class="product__sale">-10%</span> -->
          </div>

          <button
            class="product__btn"
            type="submit"
            @click.prevent="addProduct"
          >
            В корзину
          </button>
        </form>
        <div class="product__delivery d-flex space-between">
          <span class="product__delivery-timing"> 7-10 дней </span>
          <span class="product__delivery-from">
            Доставка из:
            <span class="product__delivery-from--black"> Австрия </span>
          </span>
        </div>
        <div class="product__links d-flex">
          <a class="product__link" href="#">Доставка</a>
          <a class="product__link" href="#">Оплата</a>
          <a class="product__link" href="#">Гарантия и возврат</a>
        </div>
        <div class="product__description">
          <div class="product__title-inner d-flex">
            <span class="product__title">Состав и описание</span>
          </div>
          <p class="product__description-info">
            Демисезонная удлиненная женская куртка с вшитым капюшоном. Верхний
            материал – плащевая ткань «Мемори», утеплитель – силикон 120
            плотности. В манжеты рукавов вставлена широкая плотная резинка, два
            прорезных кармана. Куртка застегивается на металлические потайные
            кнопки.
          </p>
        </div>
        <div class="product__feature">
          <div class="product__title-inner d-flex">
            <span class="product__title">Характеристики</span>
          </div>
          <p class="product__feature-info">
            Демисезонная удлиненная женская куртка с вшитым капюшоном. Верхний
            материал – плащевая ткань «Мемори», утеплитель – силикон 120
            плотности. В манжеты рукавов вставлена широкая плотная резинка, два
            прорезных кармана. Куртка застегивается на металлические потайные
            кнопки.
          </p>
        </div>
      </div>
    </section>
    <div class="recent container">
      <h3 class="recent__title">Дополните свой образ</h3>
      <VueSlickCarousel
        v-bind="{
          autoplay: true,
          slidesToShow: 4,
          touchMove: true,
          dots: false,
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
        class="recent__slider container"
      >
        <div class="product-card d-flex">
          <div class="product-card__inner">
            <img
              class="product-card__img"
              src="/images/product/1.jpg"
              alt="Трикотажные брюки джоггеры"
            />
            <a class="product-card__brand" href="#">zara</a>
          </div>
          <h3 class="product-card__name">Трикотажные брюки джоггеры</h3>
          <div class="product-card__price">
            <span class="product-card__price-now">3 999 &#8372;</span>
            <span class="product-card__old-price">4500 &#8372;</span>
            <span class="product-card__sale">-10%</span>
          </div>
          <div class="product-card__color-inner d-flex space-between">
            <div class="product-card__color-num">
              <span>6 цветов</span>
            </div>
            <div class="product-card__colors d-flex">
              <a
                class="product-card__color product-card__color--orange"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--red"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--blue"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--yelow"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--light-blue"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--black"
                href="#"
              ></a>
            </div>
          </div>
        </div>
        <div class="product-card d-flex">
          <div class="product-card__inner">
            <img
              class="product-card__img"
              src="/images/product/2.jpg"
              alt="Классическое пальто"
            />
            <a class="product-card__brand" href="#">Bershka</a>
          </div>
          <h3 class="product-card__name">Классическое пальто</h3>
          <div class="product-card__price">
            <span class="product-card__price-now">3 999 &#8372;</span>
            <span class="product-card__old-price">4500 &#8372;</span>
            <span class="product-card__sale">-10%</span>
          </div>
          <div class="product-card__color-inner d-flex space-between">
            <div class="product-card__color-num">
              <span>6 цветов</span>
            </div>
            <div class="product-card__colors d-flex">
              <a
                class="product-card__color product-card__color--orange"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--red"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--blue"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--yelow"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--light-blue"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--black"
                href="#"
              ></a>
            </div>
          </div>
        </div>
        <div class="product-card d-flex">
          <div class="product-card__inner">
            <img
              class="product-card__img"
              src="/images/product/3.jpg"
              alt="Куртка рубашка кожанная"
            />
            <a class="product-card__brand" href="#">Massimo dutti</a>
          </div>
          <h3 class="product-card__name">Куртка рубашка кожанная</h3>
          <div class="product-card__price">
            <span class="product-card__price-now">3 999 &#8372;</span>
            <span class="product-card__old-price">4500 &#8372;</span>
            <span class="product-card__sale">-10%</span>
          </div>
          <div class="product-card__color-inner d-flex space-between">
            <div class="product-card__color-num">
              <span>6 цветов</span>
            </div>
            <div class="product-card__colors d-flex">
              <a
                class="product-card__color product-card__color--orange"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--red"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--blue"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--yelow"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--light-blue"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--black"
                href="#"
              ></a>
            </div>
          </div>
        </div>
        <div class="product-card d-flex">
          <div class="product-card__inner">
            <img
              class="product-card__img"
              src="/images/product/4.jpg"
              alt="Трикотажные брюки джоггеры"
            />
            <a class="product-card__brand" href="#">Mango</a>
          </div>
          <h3 class="product-card__name">Трикотажные брюки джоггеры</h3>
          <div class="product-card__price">
            <span class="product-card__price-now">3 999 &#8372;</span>
            <span class="product-card__old-price">4500 &#8372;</span>
            <span class="product-card__sale">-10%</span>
          </div>
          <div class="product-card__color-inner d-flex space-between">
            <div class="product-card__color-num">
              <span>6 цветов</span>
            </div>
            <div class="product-card__colors d-flex">
              <a
                class="product-card__color product-card__color--orange"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--red"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--blue"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--yelow"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--light-blue"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--black"
                href="#"
              ></a>
            </div>
          </div>
        </div>
        <div class="product-card d-flex">
          <div class="product-card__inner">
            <img
              class="product-card__img"
              src="/images/product/3.jpg"
              alt="Классическое пальто"
            />
            <a class="product-card__brand" href="#">Bershka</a>
          </div>
          <h3 class="product-card__name">Классическое пальто</h3>
          <div class="product-card__price">
            <span class="product-card__price-now">3 999 &#8372;</span>
            <span class="product-card__old-price">4500 &#8372;</span>
            <span class="product-card__sale">-10%</span>
          </div>
          <div class="product-card__color-inner d-flex space-between">
            <div class="product-card__color-num">
              <span>6 цветов</span>
            </div>
            <div class="product-card__colors d-flex">
              <a
                class="product-card__color product-card__color--orange"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--red"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--blue"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--yelow"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--light-blue"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--black"
                href="#"
              ></a>
            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
    <div class="recent container">
      <h3 class="recent__title">Вы смотрели</h3>
      <VueSlickCarousel
        v-bind="{
          autoplay: true,
          slidesToShow: 4,
          touchMove: true,
          dots: false,
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
        class="recent__slider container"
      >
        <div class="product-card d-flex">
          <div class="product-card__inner">
            <img
              class="product-card__img"
              src="/images/product/1.jpg"
              alt="Трикотажные брюки джоггеры"
            />
            <a class="product-card__brand" href="#">zara</a>
          </div>
          <h3 class="product-card__name">Трикотажные брюки джоггеры</h3>
          <div class="product-card__price">
            <span class="product-card__price-now">3 999 &#8372;</span>
            <span class="product-card__old-price">4500 &#8372;</span>
            <span class="product-card__sale">-10%</span>
          </div>
          <div class="product-card__color-inner d-flex space-between">
            <div class="product-card__color-num">
              <span>6 цветов</span>
            </div>
            <div class="product-card__colors d-flex">
              <a
                class="product-card__color product-card__color--orange"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--red"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--blue"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--yelow"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--light-blue"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--black"
                href="#"
              ></a>
            </div>
          </div>
        </div>
        <div class="product-card d-flex">
          <div class="product-card__inner">
            <img
              class="product-card__img"
              src="/images/product/2.jpg"
              alt="Классическое пальто"
            />
            <a class="product-card__brand" href="#">Bershka</a>
          </div>
          <h3 class="product-card__name">Классическое пальто</h3>
          <div class="product-card__price">
            <span class="product-card__price-now">3 999 &#8372;</span>
            <span class="product-card__old-price">4500 &#8372;</span>
            <span class="product-card__sale">-10%</span>
          </div>
          <div class="product-card__color-inner d-flex space-between">
            <div class="product-card__color-num">
              <span>6 цветов</span>
            </div>
            <div class="product-card__colors d-flex">
              <a
                class="product-card__color product-card__color--orange"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--red"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--blue"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--yelow"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--light-blue"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--black"
                href="#"
              ></a>
            </div>
          </div>
        </div>
        <div class="product-card d-flex">
          <div class="product-card__inner">
            <img
              class="product-card__img"
              src="/images/product/3.jpg"
              alt="Куртка рубашка кожанная"
            />
            <a class="product-card__brand" href="#">Massimo dutti</a>
          </div>
          <h3 class="product-card__name">Куртка рубашка кожанная</h3>
          <div class="product-card__price">
            <span class="product-card__price-now">3 999 &#8372;</span>
            <span class="product-card__old-price">4500 &#8372;</span>
            <span class="product-card__sale">-10%</span>
          </div>
          <div class="product-card__color-inner d-flex space-between">
            <div class="product-card__color-num">
              <span>6 цветов</span>
            </div>
            <div class="product-card__colors d-flex">
              <a
                class="product-card__color product-card__color--orange"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--red"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--blue"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--yelow"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--light-blue"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--black"
                href="#"
              ></a>
            </div>
          </div>
        </div>
        <div class="product-card d-flex">
          <div class="product-card__inner">
            <img
              class="product-card__img"
              src="/images/product/4.jpg"
              alt="Трикотажные брюки джоггеры"
            />
            <a class="product-card__brand" href="#">Mango</a>
          </div>
          <h3 class="product-card__name">Трикотажные брюки джоггеры</h3>
          <div class="product-card__price">
            <span class="product-card__price-now">3 999 &#8372;</span>
            <span class="product-card__old-price">4500 &#8372;</span>
            <span class="product-card__sale">-10%</span>
          </div>
          <div class="product-card__color-inner d-flex space-between">
            <div class="product-card__color-num">
              <span>6 цветов</span>
            </div>
            <div class="product-card__colors d-flex">
              <a
                class="product-card__color product-card__color--orange"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--red"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--blue"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--yelow"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--light-blue"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--black"
                href="#"
              ></a>
            </div>
          </div>
        </div>
        <div class="product-card d-flex">
          <div class="product-card__inner">
            <img
              class="product-card__img"
              src="/images/product/3.jpg"
              alt="Классическое пальто"
            />
            <a class="product-card__brand" href="#">Bershka</a>
          </div>
          <h3 class="product-card__name">Классическое пальто</h3>
          <div class="product-card__price">
            <span class="product-card__price-now">3 999 &#8372;</span>
            <span class="product-card__old-price">4500 &#8372;</span>
            <span class="product-card__sale">-10%</span>
          </div>
          <div class="product-card__color-inner d-flex space-between">
            <div class="product-card__color-num">
              <span>6 цветов</span>
            </div>
            <div class="product-card__colors d-flex">
              <a
                class="product-card__color product-card__color--orange"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--red"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--blue"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--yelow"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--light-blue"
                href="#"
              ></a>
              <a
                class="product-card__color product-card__color--black"
                href="#"
              ></a>
            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </main>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import { mapMutations } from "vuex";

export default {
  name: "ProductInner",
  props: ["id"],
  components: { VueSlickCarousel },
  computed: {
    product() {
      return this.$store.state.Products.products.find(
        (product) => String(product.id) === String(this.id)
      );
    },
  },
  mounted(){
    this.productSize = this.product.sizes[0];
  },
  data() {
    return {
      productSize: null,
    };
  },
  methods: {
    ...mapMutations(["ADD_PRODUCT", "DELETE_PRODUCT"]),
    addProduct() {
      this.ADD_PRODUCT({ ...this.product, ...{ size: this.productSize } });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/components/vue-product.scss";
</style>
