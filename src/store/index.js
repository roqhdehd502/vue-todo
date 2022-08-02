import { createStore } from 'vuex';

//import coins from './modules/coins';
import toast from './modules/toast';
//  import todos from './modules/todos';

export default createStore({
    modules: {
      //coins,
      toast,
      // todos,
    },
})