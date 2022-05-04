/**
 * 작성일 : 2022.05.03
 * 작성자 : 부설연구소 사원 나민우
 * 설명 : Vuex 인덱스
 */


import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import modules from './modules'; // Vuex store 관련 모듈

export default createStore({
    modules: {
        toast: modules.toast,
        auth: modules.auth,
    },
    
    plugins: [createPersistedState({ // persisted state를 이용한 로컬 데이터 저장
        paths: [
            "auth",
        ]
    })],
})