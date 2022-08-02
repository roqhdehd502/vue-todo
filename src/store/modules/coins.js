import { getCoinpaprikaAPI } from '@/remote/coinpaprikaAPI'


export default {
  namespaced: true,
  
  state: {
      coinInformation: [],
  },

  mutations: {
    SET_COININFORMATION(state, payload){
        state.coinInformation = payload;
    },
  },

  actions: {
      getCoinpaprikaTicker({ commit }) {
          getCoinpaprikaAPI()
            .then((res) => {
                commit('SET_COININFORMATION', res.data);
            })
            .catch((error) => {
                console.log('ERROR!', error);
            });
      },
  },
}