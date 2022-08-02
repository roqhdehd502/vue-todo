import axios from 'axios';


export const getCoinpaprikaAPI = async () => await axios.get('https://api.coinpaprika.com/v1/tickers?quotes=KRW');