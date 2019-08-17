// No Use Vue.observable
export const state = () => ({
  counter: 0
})

export const mutations = {
  increment(state) {
    state.counter++
  },
  decrement(state) {
    state.counter--
  }
}

export const actions = {
  increment({ commit }) {
    commit('increment')
  },
  decrement({ commit }) {
    commit('decrement')
  }
}
