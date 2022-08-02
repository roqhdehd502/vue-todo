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

.left-content {
  overflow: auto;
  max-height: 330px; 
  padding-left: 0px; padding-right: 0px;
}
</style>