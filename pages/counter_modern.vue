<template>
  <div>
    <div>
      counter: {{ counter }}
    </div>
    <button @click="increment">
      +
    </button>
    <button @click="decrement">
      -
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('counter_legacy', ['counter'])
  },
  methods: {
    ...mapActions('counter_legacy', ['increment', 'decrement'])
  }
}

// import { getters, actions } from '~/store/counter_modern'

// export default {
//   computed: {
//     ...getters
//   },
//   methods: {
//     ...actions
//   }
// }
</script>

<style scoped>
button {
  width: 100px;
  font-size: 18px;
}
</style>
