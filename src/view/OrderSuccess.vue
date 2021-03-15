<template>
  <main class="success container">
    <div class="success__wrapper d-flex space-between">
      <div class="success__content">
        <p class="success__text">
          Спасибо, ваш заказ принят
          <span class="success__text--size">
            В ближайшее время с Вами свяжется менеджер и уточнит детали заказа
          </span>
        </p>
        <div class="success__order-inner">
          <span class="success__order-text">№ заказа</span>
          <span class="success__order-number">235266226</span>
        </div>
        <a href="#" class="success__link">На главную</a>
      </div>
      <div class="success__img-inner">
        <img src="@/assets/images/success.jpg" alt="" class="success__img" />
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/styles/components/vue-success.scss";
</style>