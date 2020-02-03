import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    // state储存store中的值
    state: {
        count: 1
    },
    //mutations改变state
    mutations: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        }
    },
    //actions确认(commit)mutations中对应的方法
    actions: {
        increment: ({ commit }) => {
            commit('increment')
        },
        decrement: ({ commit }) => {
            commit('decrement')
        }
    },
    getters: {
        // 规定count大于0
        getState(state) {
            return state.count > 0 ? state.count : 0;
        }
    }
})
