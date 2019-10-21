import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    displayNumber: "",
    total: null,
    operator: null,
  },
  getters: {
    displayNumber: state => state.displayNumber,
    total: state => state.total,
    operator: state => state.operator,
  },
  mutations: {
    // Mutates the state, can be async:await
    append: (state, payload) => state.displayNumber = `${state.displayNumber}${payload}`,
    delete: state => state.displayNumber = state.displayNumber.slice(0, -1),
    reset: state => {
      state.displayNumber = "";
      state.total = null;
      state.operator = null;
    },
    clear: state => state.displayNumber = "",
    add: (state) => state.displayNumber = (parseFloat(state.total) + parseFloat(state.displayNumber)).toString(),
    subtract: (state) => state.displayNumber = parseFloat(state.total - state.displayNumber).toString(),
    divide: (state) => state.displayNumber = parseFloat(state.total / state.displayNumber).toString(),
    multiply: (state) => state.displayNumber = parseFloat(state.total * state.displayNumber).toString(),
    negPos: state => {
      {
        if (state.displayNumber.startsWith('-')) {
          state.displayNumber = state.displayNumber.replace('-', '');
        } else {
          state.displayNumber = '-' + state.displayNumber;
        }
      }
    },
    decimal: state => {
      {
        if (state.displayNumber.indexOf('.') === -1) {
          state.displayNumber += '.';
        }
      }
    },
    setOperator: (state, payload) => {
      state.operator = payload;
      state.total = state.displayNumber;
      state.displayNumber = '';
    },
    resetOperator: state => {
      state.operator = null;
      state.total = null;
    }
  },
  actions: {
    // Commits mutations
    append({ commit, state }, payload) {
      {
        if (payload === '0' && !state.displayNumber) {
          return;
        }
        commit('append', payload)
      }
    },
    delete: ({ commit }) => commit('delete'),
    reset: ({ commit }) => commit('reset'),
    clear: ({ commit }) => commit('clear'),
    negPos: ({ commit }) => commit('negPos'),
    decimal: ({ commit }) => commit('decimal'),
    setOperator: ({ state, commit, dispatch }, payload) => {
      if (state.operator) {
        dispatch('result');
      }
      commit('setOperator', payload)
    },
    result: ({ state, commit }) => {
      if (state.total && state.operator && state.displayNumber) {
        switch (state.operator) {
          case '/':
            commit('divide');
            break;
          case 'x':
            commit('multiply');
            break;
          case '-':
            commit('subtract');
            break;
          case '+':
            commit('add');
            break;

          default:
            break;
        }
        commit('resetOperator');
      }
    }
  },
  modules: {
  }
});

export default store;