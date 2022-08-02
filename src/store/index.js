 import { createStore } from 'vuex';

 import toast from './modules/toast';

 export default createStore({
     modules: {
         toast,
     },
 })