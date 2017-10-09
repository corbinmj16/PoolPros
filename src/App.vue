<template>
  <div id="app">
    <navigation></navigation>
    <filter-area :keywords="keywords"></filter-area>
    <section class="dealers_wrap">
      <dealer></dealer>
    </section>
    <footer-area></footer-area>
  </div>
</template>

<script>
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
      keywords: [],
    }
  },
}
</script>

<style lang="scss">
  @import "scss/breakpoints";
  @import "scss/reset";
  @import "scss/custom_grid";
  @import "scss/setup";
  @import "scss/header";
  @import "scss/footer";
  section {
    height: 300px;
  }
</style>
