import { computed } from 'vue';
import { useStore } from 'vuex';

export const useToast = () => {
  const store = useStore();

  const toasts = computed(() => store.state.toast.toasts);

  const triggerToast = (message, type='success') => { // Toast 기능
    store.dispatch('toast/triggerToast', { 
        message: message, 
        type: type 
    });
  }

  return {
    toasts,
    triggerToast,
  }
}