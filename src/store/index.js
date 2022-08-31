import { createStore } from 'vuex';

import coinAPI from './modules/coinAPI';
import toast from './modules/toast';
import todosInfo from './modules/todosInfo';
import usersInfo from './modules/usersInfo';


export default createStore({
    modules: {
      coinAPI,
      toast,
      todosInfo,
      usersInfo,
    },
})