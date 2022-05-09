/**
 * 작성일 : 2022.05.04
 * 작성자 : 부설연구소 사원 나민우
 * 설명 : Vuex store 인증 모듈
 */


export default { 
    state: {
        userObj: {},
    }, 

    mutations: { 
        SET_USER_INFO(state, payload) {
            state.userObj = payload;
            sessionStorage.setItem('loggedInUserObj', JSON.stringify(payload));
        },
        REMOVE_USER_INFO(state) {
            delete state.userObj;
            localStorage.removeItem('vuex');
            sessionStorage.removeItem('loggedInUserObj');
        } 
    },

    actions: {
        
    },

    getters: {

    }
} 