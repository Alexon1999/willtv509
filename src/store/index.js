import { createStore, createLogger } from "vuex";

const initialState = {
  user: null,
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
};

const getters = {
  haveUser(state) {
    return !!state.user;
  },
};

export default createStore({
  plugins: [createLogger()], // in the console , it will log all the data changes (debugging)
  state: initialState,
  mutations,
  getters,
  actions: {},
  modules: {},
});
