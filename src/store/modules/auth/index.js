/**
 * 작성일 : 2022.05.04
 * 작성자 : 부설연구소 사원 나민우
 * 설명 : Vuex store 인증 모듈
 */


import router from '@/router' 

export default { 
    state: { 
        id: '',
        token: '' 
    }, 

    mutations: { 
        LOGIN_USER_INFO: function (state, payload) { 
            state.id = payload.id 
            state.token = payload.token 
        }, 
        /* 해당 로직 수정할 것 */
        REMOVE_LOGIN_USER_INFO: function (state) { 
            if (!state.token) { 
                router.push({ 
                    name: 'login' 
                }).catch(err => { 
                    err.value = "올바르지 않은 접근입니다!";
                    alert(err.value);
                }) 
            } 
        } 
    },

    actions: {
        
    },

    getters: {

    }
} 