/**
 * 작성일 : 2022.05.04
 * 작성자 : 부설연구소 사원 나민우
 * 설명 : Vuex store 인증 모듈
 */


 import router from '@/router' 

 export default { 
     state: { // 유저 정보 더 추가하기!
         id: '',
         token: '' 
     }, 
 
     mutations: { 
         ADD_USER_INFO(state, payload) { 
             state.id = payload.id 
             state.token = payload.token 
         }, 
         REMOVE_USER_INFO(state) { 
             state.id = '';
             state.token = '';
         } 
     },
 
     actions: {
         logout({ commit }) { // 로그아웃
             commit('REMOVE_USER_INFO');
             router.push({
                 name: 'Login'
             });
         }
     },
 
     getters: {
 
     }
 } 