<template>
  <div
    class="product-card d-flex"
    @click="$router.push({ name: 'Product', params: { id: product.id } })"
  >
    <div class="product-card__inner">
      <img
        class="product-card__img"
        :src="product.images[0]"
        :alt="product.name"
      />
      <a class="product-card__brand" href="#">{{ product.category }}</a>
    </div>
    <h3 class="product-card__name">{{ product.name }}</h3>
    <div class="product-card__price">
      <span class="product-card__price-now"
        >{{ product["uah_price"] }} &#8372;
      </span>
      <!-- <span class="product-card__old-price"
        >{{ product.priceOld }} &#8372;
      </span> -->
    </div>
    <div
      class="product-card__color-inner d-flex space-between"
      v-if="Object.keys(product.color_combinations).length"
    >
      <div class="product-card__color-num">
        <span>{{ `цвет` }}</span>
      </div>
      <div class="d-flex">
        <div
          class="product-card__colors d-flex"
          v-for="(colors, index) of product.color_combinations"
          :key="index"
        >
          <a
            class="product-card__color"
            :style="`background-color:${color};`"
            href="#"
            v-for="color in colors"
            :key="color"
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/components/product-card.scss";
</style>