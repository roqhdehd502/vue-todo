import { createStore } from 'vuex';

import coinAPI from './modules/coinAPI';
import toast from './modules/toast';
import todos from './modules/todos';


export default createStore({
    modules: {
      coinAPI,
      toast,
      todos,
    },
})