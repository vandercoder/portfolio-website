import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    currentPage: "PageHome",
    activeSidebar: false,
  },
  mutations: {
    changePage (state, page) {
      state.currentPage = page
    },
    toggleSidebar (state) {
      state.activeSidebar = !state.activeSidebar
    }
  },
  getters: {
    currentPage: state => state.currentPage,
    activeSidebar: state => state.activeSidebar
  },
})