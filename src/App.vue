<template>
  <router-view />

  <Toast />
</template>



<script>
import Toast from '@/components/toasts/ToastComponent.vue';


export default {
  name: 'App',
  
  components: {
    Toast,
  },
};
</script>



<style>
@import "./assets/css/app.css";
</style>