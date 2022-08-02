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
                <h1 class="display-3">{{ userObj.displayName ? userObj.displayName : userObj.email }}</h1>
                <h4>{{ userObj.email }}</h4>
            </div>
        </div>
        <div class="row mt-3">
            <img :src="userObj.photoURL ? userObj.photoURL : require(`@/assets/images/AnonymousUser.png`)" class="user-image" />
        </div>
        <div class="row mt-3 g-3">
            <button @click="modifyMode" class="btn btn-success">프로필수정</button>
            <button @click="moveToTodoListPage" class="btn btn-primary">메인페이지</button>
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
                @click="onUpdate"
                type="button" 
                class="btn btn-success"
            >
                저장
            </button>
            <button class="btn btn-secondary" @click="modifyMode">
                취소
            </button>
        </div>
    </div>
</template>


<script>
import { ref } from 'vue';

import {
  useRouter 
} from 'vue-router';

import { 
  getAuth, 
  updateProfile 
} from "firebase/auth";
import * as firebaseStorage from "firebase/storage";

import { useToast } from '@/composables/toast';

export default {
    name: 'users_id',
    
    setup() {
        const router = useRouter();

        const {
            showToast,
            toastMessage,
            toastAlertType,
            triggerToast
        } = useToast();

        const loading = ref(true);
        const userObj = ref(null);
        const getUserObj = async () => {
            try {
                if (getAuth().currentUser !== null) {
                  userObj.value = { ...getAuth().currentUser };
                } else {
                  triggerToast('오류로 인해 불러올 수 없습니다!', 'danger');
                }
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

        const onUpdate = async () => {
            try {
                const storage = firebaseStorage.getStorage();
                const storageRef = firebaseStorage.ref(storage, `userimages/${userObj.value.uid}`);
                const imageFile = document.querySelector('#user-image').files[0];
                let imageURL = null;

                if(imageFile !== undefined) {
                  firebaseStorage.uploadBytes(storageRef, imageFile)
                  .then((snapshot) => {
                    console.log("upload image: ", snapshot);
                    firebaseStorage.getDownloadURL(storageRef)
                      .then((url) => {
                        console.log("image url ", url);
                        imageURL = url;
                      })
                      .catch((error) => {
                        error.value = '이미지를 업로드 할 수 없습니다!';
                        triggerToast(error.value, 'danger');
                      }
                    );
                  });
                }
                
                updateProfile(getAuth().currentUser, {
                  displayName: userObj.value.displayName,
                  photoURL: imageURL === undefined ? userObj.value.photoURL : imageURL,
                }).then(() => {
                  triggerToast('성공적으로 변경 되었습니다.');
                  isModifyMode.value = false;
                  router.push({
                      name: 'TodosList'
                  });
                }).catch((error) => {
                  error.value = '오류로 인해 변경할 수 없습니다!';
                  triggerToast(error.value, 'danger');
                });
            } catch(err) {
                err.value = '오류로 인해 변경할 수 없습니다!';
                triggerToast(err.value, 'danger');
            }
        }

        const moveToTodoListPage = () => { 
            router.push({
                name: 'TodosList'
            });
        }

        return {
            showToast,
            toastMessage,
            toastAlertType,

            loading,
            userObj,
            isModifyMode,
            modifyMode,
            onUpdate,

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
    justify-content: center;
    align-items: center;
    padding-top: 15vh;
}
</style>