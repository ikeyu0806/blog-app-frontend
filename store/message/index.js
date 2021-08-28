export const state = () => ({
  message: ''
})

export const mutations = {
  changeMessage(state, newMessage) {
    state.message = newMessage
  },
  clearMessage(state) {
    state.message = ''
  }
}

export const actions = {
  changeMessage({ commit, dispatch }, newMessage) {
    commit('message/clearMessage', newMessage)
  },
  clearMessage({ commit, dispatch }) {
    commit('message/clearMessage')
  }
}
