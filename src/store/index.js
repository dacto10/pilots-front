import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInSession: "",
    usersArray: [],
    selectedPilot: ""
  },
  mutations: {
    setUser(state, user) {
      this.state.userInSession = user;
    },
    setUsersArray(state, data) {
      this.state.usersArray = data;
    },
    removeUser(state) {
      this.state.userInSession = "";
    },
    setSelectedPilot(state, pilot) {
      this.state.selectedPilot = pilot;
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
