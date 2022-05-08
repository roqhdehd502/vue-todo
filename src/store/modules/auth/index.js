/**
 * 작성일 : 2022.05.04
 * 작성자 : 부설연구소 사원 나민우
 * 설명 : Vuex store 인증 모듈
 */


//import router from '@/router' 

export default { 
    state: {
        userObj: {},
    }, 

    mutations: { 
        SET_USER_INFO(state, payload) { 
            state = payload
        }, 
        // REMOVE_USER_INFO(state) { 
        //     state.id = '';
        //     state.token = '';
        // } 
    },

    actions: {
        // loginCheck() { // 로그인 체크
        //   if(!sessionStorage.getItem('loggedInUserObj')) {
        //     // 로그인 페이지 이동 유도 로직처리
        //   }
        // }


        // logout({ commit }) { // 로그아웃
        //     commit('REMOVE_USER_INFO');
        //     router.push({
        //         name: 'Login'
        //     });
        // }
    },

    getters: {

    }
} 