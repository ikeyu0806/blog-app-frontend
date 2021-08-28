export const state = () => ({
  loggedIn: false
});

export const mutations = {
  changeLoggedIn(state) {
    state.loggedIn = !state.loggedIn
  }
}

export const actions = {
  changeLoggedIn({ commit, dispatch }) {
    commit('changeLoggedIn')
  }
}
