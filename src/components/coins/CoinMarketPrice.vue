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
        <span class="material-icons refresh-icon">
          refresh
        </span>
      </div>
      <table class="table table-striped table-hover justify-content-center">
        <colgroup>
          <col width="170px">
          <col width="150px">
          <col width="150px">
        </colgroup>
        <thead>
          <th scope="col" class="th-padding-start">자산</th>
          <th scope="col" class="th-padding-end">시세</th>
          <th scope="col" class="th-padding-end">변동률(일)</th>
        </thead>
        <tbody>
          <tr v-for="coin in coins" :key="coin.id">
            <th scope="row">
              {{ coin.name }}({{ coin.symbol }})
            </th>
            <td class="td-align-end">
              {{ priceFormatting(coin.quotes.KRW.price) }}&nbsp;원
            </td>
            <td 
              class="td-align-end" 
              :class="percentChangeColor(coin.quotes.KRW.percent_change_24h)"
            >
              {{ coin.quotes.KRW.percent_change_24h }}&#37;
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
import { ref, onMounted } from 'vue';

import axios from 'axios';

export default {
  setup() {
    const loading = ref(false); 
    const coins = ref([]);

    const getCoins = onMounted(async () => { // coinpaprika API 통신을 이용한 코인 정보 불러오기
      try {
        const res = await axios.get('https://api.coinpaprika.com/v1/tickers?quotes=KRW');
        coins.value = res.data.slice(0, 5); // 상위 5개 코인 정보만
        loading.value = true;
      } catch(err) {
        alert('오류로 인해 코인정보를 불러올 수 없습니다!');
        location.reload();
      }
    });

    const setTime = 1; // 자동으로 코인 정보 갱신할 시간 설정

    setInterval(() => { // 특정 시간마다 코인 정보 불러오기
      getCoins();
    }, setTime*1000);


    const reloading = () => { // 새로고침 버튼을 눌러 코인 정보 불러오기
      getCoins();
    };

    const priceFormatting = (price) => { // 코인 시세 반올림 및 포맷팅
      return new Intl.NumberFormat('en-US').format(Math.round(price));
    };

    const percentChangeColor = (percentChange) => { // 변동률에 따른 색상 표시
      if(percentChange > 0) {
        return 'upper-red';
      } else if(percentChange < 0) {
        return 'lower-blue';
      } else {
        return 'maintain-black';
      }
    }

    return { 
      loading,
      coins,
      reloading,
      priceFormatting,
      percentChangeColor,
    }
  },
}
</script>


<style scoped>
.refresh {
  margin-bottom: 10px;
  text-align: end !important;
}

.refresh-icon {
  cursor: pointer;
  transition: transform .7s ease-in-out;
}

.refresh-icon :hover {
  transform: rotate(360deg);
}

.th-padding-start {
  padding-left: 7px;
}

.th-padding-end {
  text-align: end;
  padding-right: 7px;
}

.td-align-end {
  text-align: end;
}

.upper-red {
  color: red !important;
}

.lower-blue {
  color: blue !important;
}

.maintain-black {
  color: black !important;
}
</style>