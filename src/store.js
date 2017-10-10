import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        name: "corbin from state",
        keywords: []
    },
    mutations: {
        changeName(state) {
            state.name = "kayla";
        },
        updateKeywords(state, newKeywordArray) {
            state.keywords = newKeywordArray;
        }
    }
});