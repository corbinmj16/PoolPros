require('css-loader!normalize.css');

import Vue from 'vue'
import App from './App.vue'
import { store } from './store.js'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)

new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})
