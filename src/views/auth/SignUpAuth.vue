<template> 
    <div class="container container-style"> 
        <div class="row">
            <router-link :to="{ name: 'TodosList' }" class="router-link-style">
                <h1 class="h1-style">
                    회원가입
                </h1>
            </router-link>
            <div class="card card-style">
                <div class="container justify-content-center">
                    <div class="row">
                        <div class="form-floating mb-3">
                            <input 
                                v-model="userEmail"
                                type="email" 
                                id="floatingEmail" 
                                class="form-control" 
                                placeholder="등록할 이메일을 입력해주세요"
                                required
                            >
                            <label for="floatingEmail">
                                이메일
                            </label>
                        </div>
                        <div class="form-floating mb-5">
                            <input 
                                v-model="userPassword"
                                type="password" 
                                id="floatingPassword" 
                                class="form-control" 
                                placeholder="등록할 비밀번호를 입력해주세요"
                                required
                            >
                            <label for="floatingPassword">
                                비밀번호
                            </label>
                        </div>
                    </div>
                    <div class="d-grid">
                        <button @click="signInSubmit" type="button" class="btn btn-success btn-lg">
                            회원가입
                        </button>
                    </div>
                </div>
            </div>
        </div> 
    </div> 
</template> 



<script> 
import { ref } from 'vue';
import router from '@/router';

import { 
  getAuth
  , createUserWithEmailAndPassword
} from "firebase/auth";

import { useToast } from '@/composables/toast';

export default { 
    name: 'SignUpAuth',
    setup() {
        const userEmail = ref('');
        const userPassword = ref('');

        const {
            showToast,
            toastMessage,
            toastAlertType,
            triggerToast,
        } = useToast();
        
        const signInSubmit = () => {
            createUserWithEmailAndPassword(getAuth(), userEmail.value, userPassword.value)
            .then((userCredential) => {
              console.log("userCredential user: ", userCredential.user)
              triggerToast('성공적으로 저장되었습니다.', 'success');
              router.replace("/")
              return;
            })
            .catch((error) => {
              console.log(error.message);
              triggerToast('올바르지 않은 정보입니다!', 'danger');
              return;
            });  
        };

        return {
            userEmail,
            userPassword,
            signInSubmit,

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