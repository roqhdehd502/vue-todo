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
        <div > <!-- 추후 이미지 링크를 누르면 프로필 페이지로 이동할 것(div -> router-link) -->
            <img
                class="profile-img" 
                src="@/assets/images/AnonymousUser.png"
            />
        </div>
    </nav>
</template>


<script>
export default {
    
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
}
</style>