import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    debug: true,
    state: {
        dateWeek: JSON.parse(localStorage.getItem("date")),
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        },
        setNewDate (state, newValue) {
            state.dateWeek = newValue
        },

    }
})
