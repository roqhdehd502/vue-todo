import { getUserInfo, triggerLogin, signOutUserInfo, createUserInfo, updateUserInfo, updateUserPassword, sendUserEmailVerify, deleteUserInfo } from "@/remote/auth";



export default {
  namespaced: true,
  
  state: {
      user: {},
      dummy: {},
  },

  mutations: {
      ADD_USER(state, payload) {
          state.user = payload;
      },
      REMOVE_USER(state) {
          state.user = {};
      },
      DUMMY_MUTATION(state) {
          state.dummy = {};
      },
  },

  actions: {
      getUserInfo({ commit }) {
          const res = getUserInfo();
          commit('ADD_USER', res);
      },
      userLogin({ commit }, payload) {
          triggerLogin(payload.userEmail, payload.userPassword);
          commit('DUMMY_MUTATION');
      },
      userLogout({ commit }) {
          signOutUserInfo();
          commit('REMOVE_USER');
      },
      userSignUp({ commit }, payload) {
          createUserInfo(payload.signUpEmail, payload.userPassword);
          commit('DUMMY_MUTATION');
      },
      updateUserInfo({ commit }, payload) { 
          updateUserInfo(payload.userObj, payload.imageFile);
          commit('DUMMY_MUTATION');
      },
      updateUserPassword({ commit }, payload) {
          updateUserPassword(payload);
          commit('DUMMY_MUTATION');
      },      
      sendUserEmailVerification({ commit }) {
          sendUserEmailVerify();
          commit('DUMMY_MUTATION');
      },
      deleteUserInfo({ commit }) {
          deleteUserInfo();
          commit('REMOVE_USER');
      },
  },

  getters: {
      getUser(state) {
          return state.user;
      }
  }
}