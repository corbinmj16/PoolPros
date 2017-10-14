import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        keywords: [],
        dealerNameModal: '',
        modalBool: false
    },
    mutations: {
        updateKeywords(state, newKeywordArray) {
            state.keywords = newKeywordArray;
        },
        updateDealerName(state, name) {
            state.dealerNameModal = name;
        },
        openModal(state) {
            state.modalBool = true;
        },
        closeModal(state) {
            state.modalBool = false;
        }
    }
});