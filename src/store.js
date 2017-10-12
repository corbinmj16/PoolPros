import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        keywords: []
    },
    mutations: {
        updateKeywords(state, newKeywordArray) {
            state.keywords = newKeywordArray;
        }
    }
});