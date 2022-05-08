<!--
작성일 : 2022.05.02
작성자 : 부설연구소 사원 나민우
설명 : 상단 네비게이션 바 컴포넌트
-->


<template>
    <nav class="navbar navbar-dark bg-success">
        <router-link :to="{ name: 'TodosList' }" class="navbar-brand home-link">
            Coin Todos 
        </router-link>
        <div> 
            <div class="navbar-brand home-link">
                <img 
                    :src="getUserObj.userImage"
                    onError="@/assets/images/AnonymousUser.png"
                    class="profile-img" 
                    @click="moveToUser(getUserObj.id)"
                />
                <!-- <button
                  type="button"
                  class="btn btn-primary btn-sm"
                  @click="moveToLogin"
                >
                  로그인
                </button> -->
                <!-- <button 
                    type="button" 
                    class="btn btn-warning btn-sm"
                    @click="moveToLogout"
                >
                    로그아웃
                </button> -->
            </div>
        </div>
    </nav>
</template>


<script>
import router from '@/router';

//import { useAuth } from '@/composables/auth'; // 유저 인증 컴포저블

export default {
    setup() {
        // const {
        //     getUserObj,
        //     //logout,
        // } = useAuth(); // 유저 데이터

        // const moveToLogin = () => { // 로그인 페이지로 이동
        //     router.push({
        //         path: '/login',
        //     });
        // }

        // const moveToLogout = () => { // 로그아웃
        //     logout();
        // }
        const getUserObj = JSON.parse(sessionStorage.getItem('loggedInUserObj'));

        const moveToUser = (getId) => { // to-do 상세 페이지 이동
            router.push({
                name: 'User',
                params: {
                    id: getId
                }
            });
        }

        return {
            getUserObj,
            //moveToLogin,
            //moveToLogout,
            moveToUser,
        }
    }
}
</script>


<style>
.home-link {
    margin-left: 10px;
}

/* .logo-img {
    margin-right: 5px;
    width: 30px; height: 30px;
} */

.profile-img {
    margin-right: 10px;
    width: 40px; height: 40px;
    border-radius: 20px;
    cursor: pointer;
}
</style>