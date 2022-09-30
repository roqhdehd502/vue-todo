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
                <h1 class="display-3">
                  {{ userObj.displayName ? userObj.displayName : userObj.email }}
                </h1>
                <h4>
                  {{ userObj.email }}&nbsp;
                  <span v-if="userObj.emailVerified">
                    <button 
                      type="button" 
                      class="btn btn-outline-info btn-sm"
                      disabled
                    >
                      인증됨
                    </button>
                  </span>
                  <span v-else>
                    <button 
                      type="button" 
                      class="btn btn-info btn-sm"
                      @click="onEmailVerify"
                    >
                      인증하기
                    </button>&nbsp;
                    <span 
                      class="badge rounded-pill bg-secondary"
                      data-bs-toggle="tooltip" 
                      data-bs-placement="bottom" 
                      title="계정 찾기시 회원님의 이메일이 인증되어야 합니다."
                    >
                      ?
                    </span>
                  </span>
                </h4>
            </div>
        </div>
        <div class="row mt-3">
            <img :src="userObj.photoURL ? userObj.photoURL : require(`@/assets/images/AnonymousUser.png`)" class="user-image" />
        </div>
        <div class="row mt-3 g-3">
            <button @click="modifyMode" class="btn btn-success">프로필수정</button>
            <button @click="moveToTodoListPage" class="btn btn-primary">메인페이지</button>
        </div><hr />
        <div class="row g-3">
            <button 
                type="button" 
                class="btn btn-warning"
                @click="logout"
            >
                로그아웃
            </button>
        </div>
    </div>

    <div 
        v-if="!loading && isModifyMode" 
        class="modify-mode-style"
    >
        <label>닉네임</label>
        <div class="input-group mb-3">
            <input 
                v-model="userObj.displayName"
                type="text" 
                class="form-control" 
                required
            />
        </div>
        <label>프로필 사진</label>
        <div class="input-group mb-3">
            <input 
              type="file" 
              id="user-image"
              class="form-control" 
              accept="image/gif, image/jpeg, image/png"
              required
            >
        </div>
        <div class="row g-2">
            <button 
                @click="updateUser(userObj)"
                type="button" 
                class="btn btn-success"
            >
                저장
            </button>
            <button class="btn btn-secondary" @click="modifyMode">
                돌아가기
            </button>
        </div><hr />
        <div class="row g-2">
            <button 
                @click="updateUserPassword()"
                type="button" 
                class="btn btn-warning"
            >
                비밀번호 변경
            </button>
            <button 
                @click.stop="openModal()"
                type="button" 
                class="btn btn-danger"
            >
                회원탈퇴
            </button>
        </div>
    </div>

    <teleport to='#modal'>
      <UserDetail 
        v-if="showModal" 
        @close="closeModal" 
        @delete="deleteUser"
      />
    </teleport>
</template>



<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

import { authMessages } from '@/common/messages';

import UserDetail from '@/components/users/UserDetail.vue';


export default {
    name: 'users_id',

    components: {
      UserDetail
    },
    
    setup() {
        const store = useStore();
        const router = useRouter();

        const loading = ref(true);
        const userObj = ref(null);
        const isModifyMode = ref(false);
        const showModal = ref(false);

        const openModal = () => {
          showModal.value = true;
        };

        const closeModal = () => {
          showModal.value = false;
        };

        const getUserObj = () => {
          store.dispatch('usersInfo/getUserInfo');
          const res = computed(() => store.getters['usersInfo/getUser']);
          userObj.value = res.value;
          loading.value = false;
        }
        getUserObj();

        const onEmailVerify = () => {
          try {
            store.dispatch('usersInfo/sendUserEmailVerification');
            store.dispatch('toast/triggerToast', authMessages.SUCCESS_SEND_USER_EMAIL_VERIFY);
          } catch (error) {
            store.dispatch('toast/triggerToast', authMessages.SUCCESS_SEND_USER_EMAIL_VERIFY);
          }
        }
        
        const modifyMode = () => {
          if (isModifyMode.value === false) {
            isModifyMode.value = true;
          } else {
            isModifyMode.value = false;
          }
        }

        const updateUser = async (userObj) => {
          try {
            const imageFile = document.querySelector('#user-image').files[0];
            store.dispatch('usersInfo/updateUserInfo', {userObj, imageFile});
            router.push({
              name: 'TodosList'
            });
          } catch(err) {
            store.dispatch('toast/triggerToast', authMessages.FAILED_UPDATE_USER_INFO);
          }
        }

        const updateUserPassword = () => {
          try {
            store.dispatch('usersInfo/updateUserPassword', userObj.value.email);
            store.dispatch('toast/triggerToast', authMessages.SUCCESS_SEND_UPDATE_USER_PASSWORD);
            router.push({
              name: 'TodosList'
            });
          } catch(err) {
            store.dispatch('toast/triggerToast', authMessages.FAILED_SEND_UPDATE_USER_PASSWORD);
          }
        }

        const deleteUser = () => {
          try {
            store.dispatch('usersInfo/deleteUserInfo');
            store.dispatch('usersInfo/userLogout');
            showModal.value = false;
            router.push({
              name: 'TodosList'
            });
          } catch(err) {
            store.dispatch('toast/triggerToast', authMessages.FAILED_DELETE_USER_INFO);
          }
        };

        const logout = () => {
          try {
            store.dispatch('usersInfo/userLogout');
            window.location.replace('/vue-todo');
          } catch (error) {
            store.dispatch('toast/triggerToast', authMessages.FAILED_LOGOUT);
          }
        }

        const moveToTodoListPage = () => { 
          router.push({
            name: 'TodosList'
          });
        }

        return {
          loading,
          userObj,
          isModifyMode,
          showModal,
          
          openModal,
          closeModal,
          onEmailVerify,
          modifyMode,
          updateUser,
          updateUserPassword,
          deleteUser,
          logout,
          moveToTodoListPage,
        }
    }
}
</script>



<style scoped>
.profile-container {
    margin-top: 20%;
    text-align: center !important;
    align-items: center !important;
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
    padding-left: 5%; padding-right: 5%;
    justify-content: center;
    align-items: center;
    padding-top: 25vh;
}
</style>