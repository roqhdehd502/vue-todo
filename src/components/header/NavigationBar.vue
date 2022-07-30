<template>
    <nav class="navbar navbar-dark bg-success">
        <router-link :to="{ name: 'TodosList' }" class="navbar-brand home-link">
            Coin Todos 
        </router-link>
        <div> 
          <div 
            v-if="isLogin"
            class="navbar-brand home-link"
          >
            <img 
              :src="userObj.photoURL ? userObj.photoURL : require(`@/assets/images/AnonymousUser.png`)"
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
          <div v-else class="navbar-brand home-link">
            <button
              type="button"
              class="btn btn-primary btn-sm"
              @click="moveToLogin"
            >
              로그인
            </button> 
          </div>
        </div>
    </nav>
</template>



<script>
import { ref } from 'vue';
import router from '@/router';

import { 
  getAuth
  , onAuthStateChanged
  , signOut 
} from "firebase/auth";


export default {
    setup() {
        const isLogin = ref(false);
        const userObj = ref(null); 
        
        const userStatus = () => {
          onAuthStateChanged(getAuth(), (user) => {
            if (user) {
              isLogin.value = true;
              userObj.value = user;
            } else {
              userObj.value = null;
            }
          });
        }
        userStatus();

        const moveToLogin = () => {
            router.push({
                name: 'Login',
            });
        }

        const moveToUser = (uid) => {
            router.push({
              name: 'User',
              params: {
                  id: uid
              }
            });
        }

        const logout = () => {
          signOut(getAuth()).then(() => {
            userObj.value = null;
            window.location.replace('/login');
          }).catch((error) => {
            console.log("error message: ", error.message)
          });
        }

        return {
            isLogin,
            userObj,

            moveToLogin,
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