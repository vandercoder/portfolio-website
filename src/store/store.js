import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    currentPage: "PageHome"
  },
  mutations: {
    changePage (state, page) {
      state.currentPage = page
    }
  },
  getters: {
    currentPage: state => state.currentPage
  }
})