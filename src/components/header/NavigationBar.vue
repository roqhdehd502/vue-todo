<template>
    <nav class="navbar navbar-dark bg-success">
        <router-link :to="{ name: 'TodosList' }" class="navbar-brand home-link">
            Coin Todos 
        </router-link>
        <div> 
            <div 
              v-if="Object.keys(userObj).length === 0"
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
                    :src="userObj.userImage"
                    @error="replaceImage"
                    class="profile-img"
                    @click="moveToUser(userObj.uid)"
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
import { ref } from 'vue';
import router from '@/router';


//import { useAuth } from '@/composables/auth'; // 유저 인증정보 컴포저블

import { 
  getAuth
  , onAuthStateChanged
  , signOut 
} from "firebase/auth";


export default {
    setup() {
        // const { 
        //     getUserObj,
        // } = useAuth(); // 로그인 유저 정보

        const moveToLogin = () => { // 로그인 페이지로 이동
            router.push({
                name: 'Login',
            });
        }

        const userObj = ref(null); // 유저 정보 가져오기

        const isLogin = () => {
          onAuthStateChanged(getAuth(), (user) => {
            if (user) {
              userObj.value = user;
              console.log(userObj.value.uid);
              return;
            } else {
              return;
            }
          });
        }
        isLogin();

        ////userObj.value = getUserObj.userObj; 

        function replaceImage(e) { // 대체 유저 이미지
            e.target.src = require(`@/assets/images/AnonymousUser.png`); 
        }

        const moveToUser = (uid) => { // 유저 상세 페이지 이동
             router.push({
                name: 'User',
                params: {
                    id: uid
                }
            });
        }

        const logout = () => { // 로그아웃
          signOut(getAuth()).then(() => {
            userObj.value = null;
            window.location.replace('/login');
          }).catch((error) => {
            console.log("error message: ", error.message)
          });
        }

        return {
            moveToLogin,
            userObj,
            replaceImage,
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