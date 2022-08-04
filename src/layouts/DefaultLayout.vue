<template>
  <NavigationBar 
    :userObj="userObj"
    style="position: sticky; width: 100%; top: 0; z-index: 40;" 
  />

  <div class="container">
    <div class="mt-3 mb-3 row">
      <div class="col coin-ticker">
        <CoinList  />
      </div>
    </div>
    <div class="mt-3 row">
      <div class="col">
        <router-view />
      </div>
    </div>
  </div>
</template>



<script>
import { ref, watchEffect } from 'vue';

import { 
  getAuth
  , onAuthStateChanged
} from "firebase/auth";

import NavigationBar from '@/components/header/NavigationBar.vue';
import CoinList from '@/components/coins/CoinMarketPrice.vue';


export default {
  name: 'DefaultLayout',

  components: {
    NavigationBar,
    CoinList,
  },

  setup() {
    const userObj = ref({});

    const userStatusInit = () => {
      onAuthStateChanged(getAuth(), (user) => {
        if (user) {
          userObj.value = user;
        } else {
          userObj.value = null;
        }
      });
    };
    watchEffect(()=> userStatusInit());

    return {
      userObj,

      userStatusInit,
    }
  }
}
</script>



<style>
.coin-ticker {
  overflow: auto;
  max-height: 330px; 
  padding-left: 0px; padding-right: 0px;
}
</style>