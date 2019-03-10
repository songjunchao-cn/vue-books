const book = {
  state: {
    test: 1
  },
  mutations: {
    SET_TEST: (state, newTest) => {
      state.test = newTest
    }
  },
  actions: {
    setTest: ({
      commit,
      state
    }, newTest) => {
      console.log(state.test, newTest, 'state最初值和新的要传入的值')
      return commit('SET_TEST', newTest)
    }
  }
}

export default book
