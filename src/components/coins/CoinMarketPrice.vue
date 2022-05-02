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
    <div v-show="loading === true">
      <div @click="reloading" class="refresh">        
        <span class="material-icons">
          refresh
        </span>
        <span>
          {{ timer }}초후 새로고침
        </span>
      </div>
      <table class="table table-striped justify-content-center">
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
  </div>
</template>


<script>
import { ref } from 'vue';

import axios from 'axios';

export default {
  setup() {
    const loading = ref(false); 
    const coins = ref([]);
    const timer = ref(10);
    
    const getCoins = async () => { // coinpaprika API를 이용한 코인 정보 불러오기
      try {
        const res = await axios.get('https://api.coinpaprika.com/v1/tickers');
        coins.value = res.data.slice(0, 3); // 상위 3개 코인 정보만
        loading.value = true;
      } catch(err) {
        alert('오류로 인해 코인정보를 불러올 수 없습니다!');
        location.reload();
      }
    }

    setInterval(() => { // 10초 마다 코인 정보 불러오기
      getCoins();
      timer.value = 10;
    }, 10000);
    
    timer.value = setInterval(() => { // 코인 새로고침 타이머
      if(timer.value === 1) { timer.value = 11; }
      timer.value -= 1;
    }, 1000);

    const reloading = () => { // 새로고침 버튼을 눌러 코인 정보 불러오기
      getCoins();
      timer.value = 10;
    }  

    return { 
      timer,
      coins,
      loading,
      reloading,
    }
  },
}
</script>


<style scoped>
.refresh {
  text-align: end;
  cursor: pointer;
}
</style>