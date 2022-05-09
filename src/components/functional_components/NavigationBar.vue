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
            <div 
              v-if="getUserObj == null"
              class="navbar-brand home-link"
            >
                <button
                  type="button"
                  class="btn btn-primary btn-sm"
                  @click="moveToLogin"
                >
                  로그인
                </button> 
            </div>
            <div v-else class="navbar-brand home-link">
                <img 
                    :src="getUserObj.userImage"
                    onError="@/assets/images/AnonymousUser.png"
                    class="profile-img" 
                    @click="moveToUser(getUserObj.id)"
                />
                <button 
                    type="button" 
                    class="btn btn-warning btn-sm"
                    @click="logout"
                >
                    로그아웃
                </button>
            </div>
        </div>
    </nav>
</template>


<script>
import router from '@/router';

export default {
    setup() {
        const moveToLogin = () => { // 로그인 페이지로 이동
            router.push({
                name: 'Login',
            });
        }
        
        const getUserObj = JSON.parse( // 유저 정보 불러오기
            sessionStorage.getItem('loggedInUserObj')
        );

        const moveToUser = (getId) => { // 유저 상세 페이지 이동
            router.push({
                name: 'User',
                params: {
                    id: getId
                }
            });
        }

        const logout = () => { // 로그아웃
            sessionStorage.clear();
            router.push({
                name: 'Login',
            });
        }

        return {
            moveToLogin,
            getUserObj,
            moveToUser,
            logout,
        }
    }
}
</script>


<style>
.home-link {
    margin-left: 10px;
}

.profile-img {
    margin-right: 10px;
    width: 40px; height: 40px;
    border-radius: 20px;
    cursor: pointer;
}
</style>