<template>
  <NavigationBar /><br />

  <div class="container">
    <router-view />
  </div>
</template>


<script>
import NavigationBar from '@/components/functional_components/NavigationBar.vue';

export default {
  components: {
    NavigationBar,
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