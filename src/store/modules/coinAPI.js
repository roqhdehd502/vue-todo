import { getCoinpaprikaAPI } from '@/remote/api';



export default {
  namespaced: true,
  
  state: {
      coins: [],
  },

  mutations: {
      ADD_COINS(state, payload) {
          state.coins = [];
          state.coins = [... JSON.parse(JSON.stringify(payload))];
      },
  },

  actions: {
      async getCoinAPI({ commit }) {
          await getCoinpaprikaAPI()
            .then(res => { commit('ADD_COINS', res.data) })
            .catch(error => console.log(error));
      }
  },

  getters: {
      getCoins(state) {
          return state.coins;
      }
  }
}