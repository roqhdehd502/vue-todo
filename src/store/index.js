 import { createStore } from 'vuex';
 import createPersistedState from 'vuex-persistedstate';

 import auth from './modules/auth';
 import toast from './modules/toast';

 export default createStore({
     modules: {
         auth,
         toast,
     },

     plugins: [
         createPersistedState({
             paths: ["auth"],
         }),
     ],
 })