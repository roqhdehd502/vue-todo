<template>
  <NavigationBar /><br />

  <div class="container">
    <router-view />
  </div>

  <Toast />
</template>


<script>
import NavigationBar from '@/components/functional_components/NavigationBar.vue'; // 네비게이션 바 컴포넌트
import Toast from '@/components/functional_components/ToastComponent.vue'; // 토스트 컴포넌트

export default {
  components: {
    NavigationBar,
    Toast,
  },

  setup() {

    return { 
      
    }
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap');

#app {
  font-family: 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>