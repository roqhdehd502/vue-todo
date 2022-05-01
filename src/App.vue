<template>
  <nav class="navbar navbar-dark bg-success">
    <router-link 
      :to="{ name: 'TodosList' }"
      class="navbar-brand" 
      style="padding-left: 10px;"
    >
      Coin Todos 
    </router-link>
  </nav><br />

  <div class="container">
    <router-view />
  </div>
</template>


<script>
export default {

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