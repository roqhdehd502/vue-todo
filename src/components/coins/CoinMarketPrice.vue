<!-- 
작성일 : 2022.05.01
작성자 : 부설연구소 사원 나민우
설명 : coinpaprika 코인 시세 API
-->


<template>
  <div class="card-body">
    <div 
      v-show="loading === false"
      class="spinner-border text-success justify-content-center" 
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </div>

    <table v-show="loading === true" class="table table-striped justify-content-center">
      <thead>
        <th scope="col">Name</th>
        <th scope="col">Symbol</th>
        <th scope="col">Price(USD)</th>
      </thead>
      <tbody>
        <tr v-for="coin in coins" :key="coin.id">
          <th scope="row">{{ coin.name }}</th>
          <td>{{ coin.symbol }}</td>
          <td>{{ coin.quotes.USD.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import { ref } from 'vue';

import axios from 'axios';

export default {
  setup() {
    const loading = ref(false);
    const coins = ref([]); 

    const getCoins = async () => {
      try {
        const res = await axios.get('https://api.coinpaprika.com/v1/tickers');
        coins.value = res.data.slice(0, 3); // 상위 3개 코인 정보만 불러오기
        loading.value = true;
      } catch(err) {
        alert('오류로 인해 불러올 수 없습니다!');
        location.reload();
      }
    }

    setTimeout(() => { // 10초 마다 코인 정보 불러오기
      getCoins();
    }, 10000);

    return {
      loading,
      coins,
    }
  },
}
</script>


<style>
  
</style>