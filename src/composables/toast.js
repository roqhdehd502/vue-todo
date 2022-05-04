/**
 * 작성일 : 2022.04.30
 * 작성자 : 부설연구소 사원 나민우
 * 설명 : 토스트 컴포저블
 */


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