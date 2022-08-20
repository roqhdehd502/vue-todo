<template> 
    <div class="container container-style"> 
        <div class="row">
            <router-link :to="{ name: 'TodosList' }" class="router-link-style">
                <h1 class="h1-style">
                    Coin Todos
                </h1>
            </router-link>
            <div class="card card-style">
                <div class="container justify-content-center">
                    <div class="row">
                        <div class="input-group input-group-lg mb-3">
                          <input 
                            v-model="userId"
                            type="text" 
                            class="form-control" 
                            placeholder="등록할 아이디 입력"
                            required
                          />
                          <span class="input-group-text">
                            @
                          </span>
                          <select 
                            v-if="!isDirentInputEmail"
                            v-model="userEmail"
                            @change="selectDirect(userEmail)"
                            class="form-select" 
                          >
                            <option selected>naver.com</option>
                            <option value="daum.net">daum.net</option>
                            <option value="gmail.com">gmail.com</option>
                            <option value="hanmail.net">hanmail.net</option>
                            <option value="kakao.com">kakao.com</option>
                            <option value="nate.com">nate.com</option>
                            <option value="outlook.com">outlook.com</option>
                            <option value="tistory.com">tistory.com</option>
                            <option value="yahoo.com">yahoo.com</option>
                            <option value="direct">직접입력</option>
                          </select>
                          <input 
                            v-else
                            v-model="userEmail"
                            type="text" 
                            class="form-control" 
                            placeholder="등록할 이메일 입력"
                            required
                          />
                        </div>
                        <div class="input-group input-group-lg mb-3">
                            <input 
                              v-model="userPassword"
                              @input="passwordStrength(userPassword)" 
                              type="password"
                              class="form-control" 
                              placeholder="등록할 비밀번호를 입력"
                              required
                            >
                        </div>
                        <div v-if="userPassword" class="input-group input-group-lg mb-2">
                          <div class="card card-body">
                            <h6>{{ userPasswordFeedback }}</h6>
                            <ul class="list-group list-group-flush">
                              <li class="list-group-item">- 패스워드 길이가 12자 이상</li>
                              <li class="list-group-item">- 대문자, 기호, 숫자를 포함한 텍스트</li>
                            </ul>
                            <div class="progress">
                              <div 
                                class="progress-bar"
                                :class="passwordStrengthLevel" 
                                style="width: 100%"
                                aria-valuenow="100" 
                                aria-valuemin="0" 
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div class="input-group input-group-lg mb-3">
                            <input 
                              v-model="verifiedPassword"
                              @input="passwordVerified(verifiedPassword)" 
                              type="password"
                              class="form-control" 
                              placeholder="비밀번호 확인"
                              required
                            >
                            <div class="valid-tooltip">
                              Looks good!
                            </div>
                        </div>
                    </div>
                    <div class="d-grid">
                        <button @click="signInSubmit" type="button" class="btn btn-success btn-lg">
                            회원가입
                        </button>
                    </div>
                </div>
            </div>
            <div class="extra-style">
                <router-link to="/login">로그인</router-link>
            </div>
            <div class="extra-style g-3">
              <router-link to="/">메인 페이지로 돌아가기</router-link>
            </div>
        </div> 
    </div> 
</template> 



<script> 
import { ref } from 'vue';
import { useStore } from 'vuex';
import router from '@/router';

import { authMessages } from '@/common/messages';

import { createUserInfo } from '@/remote/auth';


export default { 
    name: 'SignUpAuth',

    setup() {
      const store = useStore();

      const userId = ref('');
      const userEmail = ref('naver.com');
      const isDirentInputEmail = ref(false);
      const userPassword = ref('');
      const isSafetyPassword = ref(false);
      const userPasswordFeedback = ref('');
      const passwordStrengthLevel = ref('');
      const verifiedPassword = ref('');
      const isVerifiedPassword = ref(false);

      const selectDirect = (directInput) => {
        switch(directInput) {
          case "direct":
            isDirentInputEmail.value = true;
            break;

          default:
            isDirentInputEmail.value = false;
        }
      }

      const passwordStrength = (passwordInput) => {
        let strongRegex = new RegExp("^(?=.{12,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
        let mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        let enoughRegex = new RegExp("(?=.{8,}).*", "g");

        if (passwordInput.length == 0) {
            userPasswordFeedback.value = '패스워드를 입력하세요.';
            passwordStrengthLevel.value = 'bg-danger';
        } else if (false == enoughRegex.test(passwordInput)) {
            userPasswordFeedback.value = '패스워드가 8글자를 넘어야 합니다.';
            passwordStrengthLevel.value = 'bg-danger';
        } else if (strongRegex.test(passwordInput)) {
            userPasswordFeedback.value = '안전합니다!';
            isSafetyPassword.value = true;
            passwordStrengthLevel.value = 'bg-success';
        } else if (mediumRegex.test(passwordInput)) {
            userPasswordFeedback.value = '권장하지 않습니다!';
            isSafetyPassword.value = true;
            passwordStrengthLevel.value = 'bg-warning';
        } else {
            userPasswordFeedback.value = '위험합니다!';
            passwordStrengthLevel.value = 'bg-danger';
        }
      }

      const passwordVerified = (verifiedPasswordInput) => {
        if (verifiedPasswordInput !== userPassword.value) {
          isVerifiedPassword.value = false;
        } else {
          isVerifiedPassword.value = true;
        }
      }
      
      const signInSubmit = () => {
        if (userId.value === '' 
          || userEmail.value === '' 
          || userPassword.value === ''
          || !isSafetyPassword.value
          || !isVerifiedPassword.value) {
          store.dispatch('toast/triggerToast', authMessages.INVALID_CREATE_USER_INFO);
          return;
        }

        try {
          const signUpEmail = `${userId.value}@${userEmail.value}`; 
          createUserInfo(signUpEmail, userPassword.value);
          store.dispatch('toast/triggerToast', authMessages.SUCCESS_CREATE_USER_INFO);
          router.replace('/');
        } catch (error) {
          store.dispatch('toast/triggerToast', authMessages.INVALID_CREATE_USER_INFO);
        }
      };

      return {
          userId,
          userEmail,
          isDirentInputEmail,
          userPassword,
          isSafetyPassword,
          userPasswordFeedback,
          passwordStrengthLevel,
          verifiedPassword,
          isVerifiedPassword,
          
          selectDirect,
          passwordStrength,
          passwordVerified,
          signInSubmit,
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

.extra-style a:hover {
    color: green;
}
</style>