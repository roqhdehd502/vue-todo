/**
 * 작성일 : 2022.05.04
 * 작성자 : 부설연구소 사원 나민우
 * 설명 : 인증 정보 컴포저블
 */


import { useStore } from 'vuex';

export const useAuth = () => {
    const store = useStore();
    
    const userInfo = {
        id: store.state.auth.id,
        token: store.state.auth.token,
    }

    const logout = () => { // 로그아웃 기능
        store.dispatch('auth/logout', {
            
        });
    }

    return {
        userInfo,
        logout,
    }
}