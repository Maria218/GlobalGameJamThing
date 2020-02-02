import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    choicesLeft: 10,
    daysLeft: 365,
    cashObtained:0,
    gameOver: false
  },
  mutations: {
    calcCash: (state, cash) => {
      state.cashObtained += cash;
    },
    makeChoice: (state) => {
      state.choicesLeft -= 1;
    },
    calcDays: (state, days) => {
      state.daysLeft += days;
    }
  },
  actions: {
  },
  modules: {
  }
})
