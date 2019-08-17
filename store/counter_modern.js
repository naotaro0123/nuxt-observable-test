// Use Vue.observable!
import Vue from 'vue'

export const state = Vue.observable({
  counter: 0
})

// export const getters = {
//   counter() {
//     return state.counter
//   }
// }

export const mutations = {
  increment() {
    state.counter++
  },
  decrement() {
    state.counter--
  }
}

export const actions = {
  increment() {
    mutations.increment()
  },
  decrement() {
    mutations.decrement()
  }
}
