<!-- 
작성일 : 2022.05.03
작성자 : 부설연구소 사원 나민우
설명 : user 상세 페이지
-->


<template>
    <div 
        v-if="loading && !isModifyMode"
        class="spinner-border text-success justify-content-center" 
        role="status"
    >
        <span class="visually-hidden">Loading...</span>
    </div>

    <div 
        v-if="!loading && !isModifyMode" 
        class="container profile-container"
    >
        <div class="row">
            <div class="col">
                <h1 class="display-3">{{ userObj.userName }}</h1>
                <h4>{{ userObj.nickName }}</h4>
            </div>
        </div>
        <div class="row profile-bio">
            <p class="lead">
                {{ userObj.userBio }}
            </p>
        </div>
        <div class="row">
            <img :src="userObj.userImage" class="user-image" />
        </div>
        <div class="row profile-aboutme">
            <h3 class="profile-aboutme-title">About me</h3>
            <hr />
            <p class="lead">
                {{ userObj.userAbout }}
            </p>
        </div>
        <div class="row g-2">
            <button @click="modifyMode" class="btn btn-success">프로필수정</button>
            <button @click="moveToTodoListPage" class="btn btn-primary">메인페이지</button>
        </div>
    </div>

    <div v-if="!loading && isModifyMode" class="modify-mode-style">
        <form @submit="onUpdate">
            <label>닉네임</label>
            <div class="input-group mb-3">
                <input 
                    v-model="userObj.nickName"
                    type="text" 
                    class="form-control" 
                    required
                />
            </div>
            <label>상태</label>
            <div class="input-group mb-3">
                <input 
                    v-model="userObj.userBio"
                    type="text" 
                    class="form-control" 
                    required
                />
            </div>
            <label>자기소개</label>
            <div class="input-group mb-3">
                <textarea 
                    v-model="userObj.userAbout" 
                    class="form-control"
                    style="resize: none;"
                    required
                ></textarea>
            </div>
            <div class="row g-2">
                <button 
                    type="submit" 
                    class="btn btn-primary"
                >
                    저장
                </button>
                <button class="btn btn-outline-dark" @click="modifyMode">
                    취소
                </button>
            </div>
        </form>
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

        const {
            showToast,
            toastMessage,
            toastAlertType,
            triggerToast
        } = useToast(); // 변경 

        const moveToTodoListPage = () => { // to-do 리스트 페이지 이동
            router.push({
                name: 'TodosList'
            });
        }

        const getId = route.params.id; // 유저 Id
        const loading = ref(true);
        const userObj = ref(null);
        const getUserObj = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/users/${getId}`);
                userObj.value = { ...res.data };
                loading.value = false;
            } catch(err) {
                err.value = '오류로 인해 불러올 수 없습니다!';
                triggerToast(err.value, 'danger');
            }
        }
        getUserObj();

        const isModifyMode = ref(false);
        const modifyMode = () => {
            if(isModifyMode.value === false) {
                isModifyMode.value = true;
            } else {
                isModifyMode.value = false;
            }
        }

        const onUpdate = async (e) => { // 유저 정보 업데이트
            e.preventDefault();
            try {
                const res = await axios.put(`http://localhost:3000/users/${getId}`, {
                    userId: userObj.value.userId,
                    userPassword: userObj.value.userPassword,
                    userName: userObj.value.userName,
                    userEmail: userObj.value.userEmail,
                    userPhone: userObj.value.userPhone,
                    nickName: userObj.value.nickName,
                    userImage: userObj.value.userImage,
                    userBio: userObj.value.userBio,
                    userAbout: userObj.value.userAbout,
                });
                userObj.value = {...res.data};
                triggerToast('성공적으로 변경 되었습니다.');
                isModifyMode.value = false;
            } catch(err) {
                err.value = '오류로 인해 변경할 수 없습니다!';
                triggerToast(err.value, 'danger');
            }
        }

        return {
            loading,

            userObj,
            isModifyMode,
            modifyMode,
            onUpdate,

            moveToTodoListPage,

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
.profile-bio {
    margin-top: 10px; margin-bottom: 30px;
    padding: 15px;
    position: relative;
	background: whitesmoke;
	border-radius: .4em;
}
.profile-bio:after {
	content: '';
	position: absolute;
	left: 50%; bottom: 0;
	width: 0; height: 0;
	border: 20px solid transparent;
    border-bottom: 0; border-top-color: whitesmoke;
	margin-left: -20px; margin-bottom: -20px;
	
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
.modify-mode-style {
    justify-content: center;
    align-items: center;
    padding-top: 10vh;
}
</style>