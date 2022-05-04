<!-- 
작성일 : 2022.05.03
작성자 : 부설연구소 사원 나민우
설명 : user 상세 페이지
-->


<template>
    <div 
        v-if="loading"
        class="spinner-border text-success justify-content-center" 
        role="status"
    >
        <span class="visually-hidden">Loading...</span>
    </div>

    <div v-else class="container profile-container">
        <div class="row">
            <div class="col">
                <h1 class="display-3">{{ user.userName }}</h1>
                <h4>{{ user.nickName }}</h4>
            </div>
        </div>
        <div class="row profile-introduce">
            <p class="lead">
                {{ user.userBio }}
            </p>
        </div>
        <div class="row">
            <img :src="user.userImage" class="user-image" />
        </div>
        <div class="row profile-aboutme">
            <h3 class="profile-aboutme-title">About me</h3>
            <p class="lead">
                {{ user.userAbout }}
            </p>
        </div>
        <div class="row">
            <button @click="moveToTodoListPage" class="btn btn-success">메인페이지</button>
        </div>
    </div>
</template>


<script>
import { ref } from 'vue';

import { useRoute, useRouter } from 'vue-router';

import axios from 'axios';

import { useToast } from '@/composables/toast'; // 토스트 컴포저블

export default {
    setup() {
        const route = useRoute();
        const router = useRouter();

        const moveToTodoListPage = () => { // to-do 리스트 페이지 이동
            router.push({
                name: 'TodosList'
            });
        }

        const getId = route.params.id; // 유저 데이터 키값(literally id. not userID.)
        const loading = ref(true);
        const user = ref(null);
        const getUser = async () => {
            try {
                const res =  await axios.get(`http://localhost:3000/users/${getId}`);
                user.value = { ...res.data };
                loading.value = false;
            } catch(err) {
                err.value = '오류로 인해 불러올 수 없습니다!';
                triggerToast(err.value, 'danger');
            }
        }
        getUser();

        const {
            showToast,
            toastMessage,
            toastAlertType,
            triggerToast
        } = useToast(); // 변경 

        return {
            moveToTodoListPage,

            loading,
            user,

            showToast,
            toastMessage,
            toastAlertType,
        }
    }
}
</script>


<style scoped>
.profile-container {
    margin-top: 30px;
    text-align: center !important;
    align-items: center !important;
}

.profile-introduce {
    margin-top: 10px;
    margin-bottom: 30px;
}

.user-image {
    display: block;
    margin: 0px auto;
    width: 200px; height: 200px;
    border-radius: 100px;
}

.profile-aboutme {
    margin-top: 30px;
    margin-bottom: 30px;
    padding: 30px;
    background-color: whitesmoke;
    border-radius: 10px;
}

.profile-aboutme-title {
    margin-bottom: 20px;
}
</style>