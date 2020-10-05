import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    medias: [],
    user: {}
  },
  getters: {
    medias (state) {
      return state.medias
    },
    user (state) {
      return state.user
    }
  },
  mutations: {
    setMedias (state, JsonMedias) {
      state.medias = JsonMedias
    },
    setUser (state, JsonUser) {
      state.user = JsonUser
    }
  },
  actions: {
    loadMedia ({ commit, getters }) {
      if (!getters.user.token) return false
      fetch('http://api.vue.alsacreations.net/data/',
        {
          method: 'POST',
          body: JSON.stringify({ token: getters.user.token })
        }).then((response) => {
        return response.json()
      }).then((json) => {
        commit('setMedias', json)
      })
    },
    auth ({ commit, dispatch }, userInfo) {
      fetch('http://api.vue.alsacreations.net/auth/',
        {
          method: 'POST',
          body: JSON.stringify(userInfo)
        }).then((response) => {
        return response.json()
      }).then((json) => {
        commit('setUser', json)
        dispatch('loadMedia')
      })
    }
  },
  modules: {
  }
})
