/**
 * 작성일 : 2022.05.04
 * 작성자 : 부설연구소 사원 나민우
 * 설명 : Vuex store 인증 모듈
 */


import router from '@/router' 

export default { 
    state: { 
        userId: '', 
        userName: '', 
        token: '' 
    }, 

    mutations: { 
        login: function (state, payload) { 
            state.userId = payload.userId 
            state.userPassword = payload.userPassword 
            state.token = payload.token 
        }, 
        loginCheck: function (state) { 
            if (!state.token) { 
                router.push({ 
                    name: 'login' 
                }).catch(err => { 
                    console.log(err);
                }) 
            } 
        } 
    } 
} 