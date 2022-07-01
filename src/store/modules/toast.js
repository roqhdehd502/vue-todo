export default {
    namespaced: true,
    
    state: {
        toasts: [],
    },

    mutations: {
        ADD_TOAST(state, payload) {
            state.toasts.push(payload);
        },
        REMOVE_TOAST(state) {
            state.toasts.shift();
        }
    },

    actions: {
        triggerToast({ commit }, payload) { // Toast 기능
            commit('ADD_TOAST', {
                id: Date.now(),
                message: payload.message,
                type: payload.type,
            });
            setTimeout(() => {
                commit('REMOVE_TOAST');
            }, 3000);
        }
    },

    getters: {
        // toastMessageWithSmile (state) {
        //     return state.toastMessage + ' :)';
        // }
    }
}