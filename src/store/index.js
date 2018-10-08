import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language: null
  },
  actions: {
    language({commit}, language = null) {
      if (language !== null) {
        commit('SET_LANGUAGE', language)
      } else {
        if (localStorage.getItem('lang') === null) {
          let languageLocal
          switch (window.navigator.language) {
            case 'ru-RU':
              languageLocal = 'ru'
              break
            case 'kk':
              languageLocal = 'kk'
              break
            default:
              languageLocal = 'en'
          }
          commit('SET_LANGUAGE', languageLocal)
        } else {
          commit('SET_LANGUAGE', localStorage.getItem('lang'))
        }
      }
    }
  },
  mutations: {
    SET_LANGUAGE(state, language) {
      state.language = language
      localStorage.setItem('lang', language)
    }
  }
})
