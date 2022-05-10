/**
 * 작성일 : 2022.05.04
 * 작성자 : 부설연구소 사원 나민우
 * 설명 : 인증 정보 컴포저블
 */


import { useStore } from 'vuex';

export const useAuth = () => {
    const store = useStore();

    const triggerLogin = (loginObj) => { // 로그인
        store.dispatch('triggerLogin', loginObj);
    }
    
    const getUserObj = { // 유저 정보 가져오기
        userObj: store.state.auth.userObj
    };

    function isLogin() { // 로그인 여부 가져오기
        if(Object.keys(store.state.auth.userObj).length === 0) {
            return false;
        } else {
            return true;
        }
    }

    const triggerLogout = () => { // 로그아웃
        store.dispatch('triggerLogout');
    }

    return {
        triggerLogin,
        isLogin,
        getUserObj,
        triggerLogout,
    }
}