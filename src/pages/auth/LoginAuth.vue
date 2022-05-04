<!-- 
작성일 : 2022.05.04
작성자 : 부설연구소 사원 나민우
설명 : 로그인 페이지
-->


<template> 
    <div class="container container-style"> 
        <div class="row">
            <router-link :to="{ name: 'TodosList' }" class="router-link-style">
                <h1 class="h1-style">
                    Coin Todos
                </h1>
            </router-link>
            <div class="card card-style"> 
                <form @submit="loginSubmit"> 
                    <div class="container justify-content-center">
                        <div class="row">
                            <div class="form-floating mb-3">
                                <input 
                                    v-model="userId"
                                    type="text" 
                                    id="floatingId" 
                                    class="form-control" 
                                    placeholder="아이디"
                                    required
                                >
                                <label for="floatingId">
                                    아이디
                                </label>
                            </div>
                            <div class="form-floating mb-5">
                                <input 
                                    v-model="userPassword"
                                    type="password" 
                                    id="floatingPassword" 
                                    class="form-control" 
                                    placeholder="비밀번호"
                                    required
                                >
                                <label for="floatingPassword">
                                    비밀번호
                                </label>
                            </div>
                        </div>
                        <div class="d-grid">
                            <button type="submit" class="btn btn-success btn-lg">
                                로그인
                            </button>
                        </div>
                    </div>
                </form> 
            </div>
            <div class="extra-style">
                <label>회원가입</label>
            </div>
        </div> 
    </div> 
</template> 


<script> 
import { ref } from 'vue';
import { useStore } from 'vuex';

import { useRouter } from 'vue-router';

import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'; // 인증 토큰 발급용

import { useToast } from '@/composables/toast'; // 토스트 컴포저블

export default { 
    setup() {
        const store = useStore();
        const router = useRouter();
        
        const userId = ref('');
        const userPassword = ref('');
        
        const loginSubmit = async (e) => { // 로그인 과정 인증
            e.preventDefault();
            const userData = {
                userId: userId.value,
                userPassword: userPassword.value,
            };
            try {
                const res = await axios.get(`http://localhost:3000/users`, userData);
                const resData = res.data;
                const correct = resData.find((correctUser) => {
                    return (
                        correctUser.userId === userData.userId 
                        && correctUser.userPassword === userData.userPassword
                    );
                });
                if(correct === undefined || correct === null || correct === "") {
                    triggerToast('올바르지 않은 계정입니다!', 'danger');
                    userId.value = '';
                    userPassword.value = '';
                } else {
                    const token = uuidv4(); // 백엔드에서 토큰을 가져온 것으로 가정
                    correct.token = token;
                    console.log(correct);
                    store.commit("LOGIN_USER_INFO", correct);
                    router.push({
                        name: 'TodosList'
                    });
                }
            } catch (err) { 
                err.value = '올바르지 않은 접근입니다!';
                triggerToast(err.value, 'danger');
            }     
        };
        
        const {
            showToast,
            toastMessage,
            toastAlertType,
            triggerToast,
        } = useToast(); // 변경 사항시 알림

        return {
            userId,
            userPassword,
            loginSubmit,

            showToast,
            toastMessage,
            toastAlertType,
        }
    }
}; 
</script>


<style scoped>
.container-style {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 75vh;
}
.router-link-style {
    color: black;
    text-decoration: none;
}
.h1-style {
    text-align: center;
    font-weight: 900;
    margin-bottom: 50px;
}
.card-style {
    padding: 50px 0px 50px 0px;
    margin-bottom: 15px;
}
.btn-style {
    width: auto !important;
}
.extra-style {
    text-align: center;
}
</style>