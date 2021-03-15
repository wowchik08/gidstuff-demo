<template>
  <div
    class="product-card d-flex"
    @click="$router.push({ name: 'Product', params: { id: product.name } })"
  >
    <div class="product-card__inner">
      <img
        class="product-card__img"
        :src="`/images/product/${product.id}.jpg`"
        :alt="name"
      />
      <a class="product-card__brand" href="#">{{ product.brand }}</a>
    </div>
    <h3 class="product-card__name">{{ product.name }}</h3>
    <div class="product-card__price">
      <span class="product-card__price-now"
        >{{ product.priceNew }} &#8372;
      </span>
      <span class="product-card__old-price"
        >{{ product.priceOld }} &#8372;
      </span>
      <span class="product-card__sale">-{{ product.discount }}%</span>
    </div>
    <div class="product-card__color-inner d-flex space-between">
      <div class="product-card__color-num">
        <span>{{ product.colors.length }} цветов</span>
      </div>
      <div class="product-card__colors d-flex">
        <a
          class="product-card__color"
          :style="`background-color:${color};`"
          href="#"
          v-for="color in product.colors"
          :key="color"
        ></a>
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
    // id: Number,
    // priceNew: Number,
    // priceOld: Number,
    // discount: Number,
    // brand: String,
    // name: String,
    // colors: Array,
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/components/product-card.scss";
</style>