import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInSession: "",
    usersArray: []
  },
  mutations: {
    setUser(state, user) {
      this.state.userInSession = user;
    },
    setUsersArray(state, data) {
      this.state.usersArray = data;
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
