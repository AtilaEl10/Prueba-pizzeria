import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pizzas: [],
  },
  mutations: {
    cargarData(state, payload){
      state.pizzas = payload
    }
  },
  actions: {
    async getData({ commit }) {
      const url = "https://us-central1-apis-varias-mias.cloudfunctions.net/pizzeria"
      try {
        const req = await axios(url)
        const pizzas = req.data

        commit("cargarData", pizzas)

        console.log(req.data);
      } catch (error) {
        console.log(error);
      }
    }
  },
});
