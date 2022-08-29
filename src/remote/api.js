import axios from 'axios';



export const getCoinpaprikaAPI = async () => await axios.get(process.env.VUE_APP_COINPAPRIKA_TICKER_URL);