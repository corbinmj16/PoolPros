<template>
  <div id="app">
    <navigation></navigation>
    <filter-area></filter-area>
    <button @click="changeName">Change it</button>
    <h3>{{name}}</h3>
    <section class="dealers_wrap">
      <dealer
        v-for="(dealer, index) in dealers"
        :key="index" 
        :dealer="dealer.data"></dealer>
    </section>
    <footer-area></footer-area>
  </div>
</template>

<script>
import dealerData from './dealers.json';
import axios from 'axios';
import Navigation from "./components/Navigation.vue";
import FilterArea from "./components/FilterArea.vue";
import Dealer from "./components/Dealer.vue";
import FooterArea from "./components/FooterArea.vue";

export default {
  name: 'app',
  components: { Navigation, FilterArea, Dealer, FooterArea },
  data () {
    return {
      dealers: dealerData.dealers
    }
  },
  computed: {
    name() {
      return this.$store.state.name;
    }
  },
  methods: {
    changeName() {
      this.$store.commit('changeName');
    }
  }
}
</script>

<style lang="scss">
  @import "scss/breakpoints";
  @import "scss/reset";
  @import "scss/custom_grid";
  @import "scss/setup";
  @import "scss/header";
  @import "scss/footer";
  @import "scss/filter_area";
</style>
