require('css-loader!normalize.css');

import Vue from 'vue'
import App from './App.vue'
import { store } from './store.js'

new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})
