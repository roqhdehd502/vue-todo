<template>
  <div class="card-body">
    <div 
      v-show="!loading"
      class="mb-3 bg-light text-success spinner-border" 
      role="status"
      style="margin-left: 45%"
    >
      <span class="visually-hidden">Loading...</span>
    </div>

    <div v-show="loading">
      <div class="mb-2 d-flex justify-content-between">
        <div>
          <select v-model="coinTypeLength" @change="getCoins()" class="form-select">
            <option selected>5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="-1">최대</option>
          </select>
        </div>
        <div @click="reloading">        
          <span class="material-icons refresh-icon">
            refresh
          </span>
        </div>
      </div>
      <table class="table table-striped table-hover justify-content-center">
        <colgroup>
          <col width="auto">
          <col width="150px">
          <col width="150px">
        </colgroup>
        <thead>
          <th scope="col">코인명(심볼)</th>
          <th scope="col">현재가</th>
          <th scope="col">변동률(일)</th>
        </thead>
        <tbody>
          <tr v-for="coin in coins" :key="coin.id">
            <th scope="row">
              {{ coin.name }}({{ coin.symbol }})
            </th>
            <td>
              {{ priceFormatting(coin.quotes.KRW.price) }}&nbsp;원
            </td>
            <td :class="pricePercentChangeColor(coin.quotes.KRW.percent_change_24h)">
              {{ coin.quotes.KRW.percent_change_24h }}&#37;
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>



<script>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';

import { coinMessages } from '@/common/messages';
import { priceFormatting, pricePercentChangeColor } from '@/common/filters';


export default {
  name: 'CoinMarketPrice',
  
  setup() {
    const store = useStore();

    const loading = ref(false);
    const autoReloadSeconds = 30; 
    const coins = ref([]);
    const coinTypeLength = ref(5);

    const getCoins = onMounted(async () => {
      try {
        await store.dispatch('coinAPI/getCoinAPI');
        const res = computed(() => store.getters['coinAPI/getCoins']);
        coins.value = res.value.slice(0, coinTypeLength.value);
        loading.value = true;
      } catch (error) {
        store.dispatch('toast/triggerToast', coinMessages.FAILED_COINS_INFO);
      }
    });

    const reloading = () => {
      getCoins();
    };

    setInterval(() => {
      getCoins();
    }, autoReloadSeconds * 1000);

    return {
      loading,
      coins,
      coinTypeLength,
      
      getCoins,
      reloading,
      priceFormatting,
      pricePercentChangeColor,
    }
  },
}
</script>



<style scoped>
.refresh-icon {
  cursor: pointer;
}

thead {
  top: 0;
  position: sticky;
  z-index: 5;
  background-color: white;
}

thead th:first-child {
  padding-left: 7px;
}

thead th:nth-child(2) {
  text-align: end;
  padding-right: 7px;
}

thead th:last-child {
  text-align: end;
  padding-right: 7px;
}

tbody tr td:nth-child(n) {
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