import { useStore } from 'vuex';


export const useAuth = () => {
    const store = useStore();

    const setUserObj = (userObj) => { // 로그인
        store.dispatch('triggerLogin', userObj);
    }
    
    const getUserObj = { // 유저 정보 가져오기
        userObj: store.state.auth.userObj
    };

    const isLogin = () => { // 로그인 여부 가져오기
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
        setUserObj,
        isLogin,
        getUserObj,
        triggerLogout,
    }
}