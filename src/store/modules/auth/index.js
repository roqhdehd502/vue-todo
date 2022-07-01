import { v4 as uuidv4 } from 'uuid'; // 인증 토큰 발급용(JWT 임시 대체)

export default { 
    state: {
        userObj: {},
    }, 

    mutations: { 
        SET_USER_INFO(state, payload) { // 유저 정보 스토리지 SET
            state.userObj = payload;
            const token = uuidv4(); // 백엔드에서 토큰을 가져온 것으로 가정
            sessionStorage.setItem('userToken', JSON.stringify(token));
        },
        MODIFY_USER_INFO(state, payload) { // 유저 정보 스토리지 변경
            state.userObj = payload;
        },
        REMOVE_USER_INFO(state) { // 유저 정보 스토리지 상에서 지우기
            delete state.userObj;
            localStorage.removeItem('vuex');
            sessionStorage.removeItem('userToken');
        } 
    },
    
    actions: {
        triggerLogin({ commit }, payload) { // 로그인 액션
            commit('SET_USER_INFO', payload);
        },
        triggerLogout({ commit }) { // 로그아웃 액션
            commit('REMOVE_USER_INFO');
        }
    }
} 