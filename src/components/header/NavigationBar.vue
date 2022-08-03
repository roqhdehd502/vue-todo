<template>
    <nav class="navbar navbar-dark bg-success">
        <router-link :to="{ name: 'TodosList' }" class="navbar-brand home-link">
            Coin Todos 
        </router-link>
        <div> 
          <div 
            v-if="userObj"
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
import { useStore } from 'vuex';
import router from '@/router';

import { authMessages } from '@/common/messages';

import { signOutUserInfo } from '@/remote/auth';


export default {
  name: 'NavigationBar',

  props: {
    userObj: {
      type: Object,
      required: false,
    }
  },
  
  setup() {
    const store = useStore();

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
      try {
        signOutUserInfo();
        window.location.replace('/');
      } catch (error) {
        store.dispatch('toast/triggerToast', authMessages.FAILED_LOGOUT);
      }
    }

    return {
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