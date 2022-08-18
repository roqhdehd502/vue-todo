import { createStore } from 'vuex';

import toast from './modules/toast';
import todos from './modules/todos';


export default createStore({
    modules: {
      toast,
      todos,
    },
})