import { createStore, createLogger } from "vuex";
import Api from "../api";

const initialState = {
  user: null,
  client: null,
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },

  setClient(state, client) {
    state.client = client;
  },
};

const actions = {
  async getClientFromDatabase({ state, commit }) {
    if (state.user) {
      const client = await Api.getClient({
        email: state.user.email,
        username: state.user.displayName,
      });
      commit("setClient", client);
    }
  },
};

const getters = {
  haveUser(state) {
    return !!state.user;
  },

  haveActiveSubscription(state) {
    return state.client?.monAbonnement?.status === "active";
  },
};

export default createStore({
  plugins: [createLogger()], // in the console , it will log all the data changes (debugging)
  state: initialState,
  mutations,
  getters,
  actions,
  modules: {},
});
