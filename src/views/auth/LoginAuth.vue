<template> 
    <div class="container container-style"> 
        <div class="row">
            <router-link :to="{ name: 'TodosList' }" class="router-link-style">
                <h1 class="h1-style">
                    로그인
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
                                    placeholder="이메일"
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
                                    placeholder="비밀번호"
                                    required
                                >
                                <label for="floatingPassword">
                                    비밀번호
                                </label>
                            </div>
                        </div>
                        <div class="d-grid">
                            <button @click="loginSubmit" type="button" class="btn btn-success btn-lg">
                                로그인
                            </button>
                        </div>
                    </div>
            </div>
            <div class="extra-style">
                <router-link to="/signup">회원가입</router-link>
            </div>
        </div> 
    </div> 
</template> 



<script> 
import { ref } from 'vue';
import { useStore } from 'vuex';
import router from '@/router';

import { 
  getAuth
  , signInWithEmailAndPassword
  , onAuthStateChanged 
} from "firebase/auth";

import { authMessages } from '@/common/messages';


export default { 
    name: 'LoginAuth',
    
    setup() {
        const store = useStore();

        const userEmail = ref('');
        const userPassword = ref('');

        const isLogin = () => {
          onAuthStateChanged(getAuth(), (user) => {
            if (user) {
              store.dispatch('toast/triggerToast', authMessages.INVALID_ACCESS);
              router.replace('/');
              return;
            } else {
              return;
            }
          });
        }
        isLogin();
        
        const loginSubmit = () => {
            signInWithEmailAndPassword(getAuth(), userEmail.value, userPassword.value)
              .then((userCredential) => {
                console.log(userCredential.user.email)
                router.replace('/');
                return;
              })
              .catch((error) => {
                console.log(error.message);
                store.dispatch('toast/triggerToast', authMessages.INVALID_USER_INFO);
                return;
              });    
        };

        return {
            userEmail,
            userPassword,
            
            loginSubmit,
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
.extra-style a {
    text-decoration: none;
    color: black;
}
</style>