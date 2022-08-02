<template>
  <NavigationBar style="position: sticky; width: 100%; top: 0; z-index: 40;" /><br />

  <div class="container">
    <div class="row">
      <div class="mb-3 col-md-6 align-self-start left-content">
        <CoinList  />
      </div>
      <div class="col-md-6 align-self-end right-content">
        <router-view />
      </div>
    </div>
  </div>

  <Toast />
</template>



<script>
import NavigationBar from "@/components/header/NavigationBar.vue";
import Toast from "@/components/toasts/ToastComponent.vue";
import CoinList from '@/components/coins/CoinMarketPrice.vue';

export default {
  name: 'App',
  
  components: {
    NavigationBar,
    Toast,
    CoinList,
  },
};
</script>



<style>
@import "./assets/css/app.css";

.left-content {
  overflow: auto;
  max-height: 330px; 
  padding-left: 0px; padding-right: 0px;
}

.right-content {
  overflow: auto;
  max-height: 500px;
}
</style>