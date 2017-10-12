<template>
  <div id="app">
    <navigation></navigation>
    <filter-area></filter-area>
    <section class="dealers_wrap">
      <dealer
        v-for="(dealer, index) in matchingDealers"
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
    matchingDealers() {
      if ( !this.$store.state.keywords.length ) {
        // if no checkboxes are checked return all dealers
        return this.dealers;
      } else {
        // keywords from vuex store
        var storeKeywords = this.$store.state.keywords;

        var newMatchingDealers = this.dealers.filter(function(dealerToCheck) {
          // the certifications array from the dealer
          var arrayFromDealer = dealerToCheck.data.certifications;
          // look through each dealer certification
          return arrayFromDealer.filter(function(cert) {
            // check to see if individual certification is in store array
            return storeKeywords.indexOf(cert) > -1;
          }).length === storeKeywords.length;
        });

        // return the dealers with matching keywords/certifications
        return newMatchingDealers;
      } // else 
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
