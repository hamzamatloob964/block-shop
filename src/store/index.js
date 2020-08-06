import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navIndex: -1
  },
  mutations: {
    "UPDATE_INDEX": (state,data) => {
      state.navIndex = data;
    }
  },
  actions: {
    updateIndex (context,id) {
      context.commit('UPDATE_INDEX',id)
    }
  },
  modules: {
  }
})
