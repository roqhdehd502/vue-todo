<template>
  <NavigationBar style="position: sticky; width: 100%; top: 0; z-index: 40;" />

  <div class="container">
    <div class="mt-1 row">
      <div class="col-md-6 align-self-start left-content">
        <CoinList  />
      </div>
      <div class="col-md-6 align-self-end">
        <router-view />
      </div>
    </div>
  </div>
</template>



<script>
import NavigationBar from '@/components/header/NavigationBar.vue';
import CoinList from '@/components/coins/CoinMarketPrice.vue';


export default {
  name: 'DefaultLayout',

  components: {
    NavigationBar,
    CoinList,
  },
}
</script>