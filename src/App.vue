<template>
  <div id="app">
    <TheHeader />
    <router-view />
    <TheFooter />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter
  },
  created () {
    this.LOAD_PRODUCTS()
  },
  methods: {
    ...mapActions([
      'LOAD_PRODUCTS'
    ]),
  }
};
</script>
