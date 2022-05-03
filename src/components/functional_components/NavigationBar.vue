<!--
작성일 : 2022.05.02
작성자 : 부설연구소 사원 나민우
설명 : 상단 네비게이션 바 컴포넌트
-->


<template>
    <nav class="navbar navbar-dark bg-success">
        <router-link :to="{ name: 'TodosList' }" class="navbar-brand home-link">
            <img class="rounded float-start logo-img" src="@/assets/images/LogoImage.png" />
            Coin Todos 
        </router-link>
        <div> 
            <div class="navbar-brand home-link">
                <!-- 추후 유저 이미지 정보를 불러올 것 -->
                <img 
                    class="profile-img" 
                    src="@/assets/images/AnonymousUser.png" 
                    @click="moveToPage(getId)"
                />
            </div>
        </div>
    </nav>
</template>


<script>
import router from '@/router';

export default {
    setup() {
        const getId = 1; // User 데이터 키값
        const moveToPage = (getId) => { // to-do 상세 페이지 이동
            router.push({
                name: 'User',
                params: {
                    id: getId
                }
            });
        }

        return {
            getId,
            moveToPage,
        }
    }
}
</script>


<style>
.home-link {
    margin-left: 10px;
}

.logo-img {
    margin-right: 5px;
    width: 30px; height: 30px;
}

.profile-img {
    margin-right: 10px;
    width: 40px; height: 40px;
    border-radius: 20px;
    cursor: pointer;
}
</style>