import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import dealerData from './dealers.json';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        dealerData: dealerData,
        keywords: []
    },
    mutations: {
        addKeyword(state, keyword) {
            state.keywords.push(keyword)
        },
        removeKeyword(state, index) {
            state.keywords.splice(index, 1)
        }
    }
});