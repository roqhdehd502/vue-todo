/**
 * 작성일 : 2022.04.30
 * 작성자 : 부설연구소 사원 나민우
 * 설명 : 변경 사항 알림 모듈
 */


import { ref, onUnmounted } from 'vue';

export const useToast = () => {
  const toastMessage = ref('');
  const toastAlertType = ref('');
  const showToast = ref(false);
  const timeout = ref(null);

  const triggerToast = (message, type='success') => { // Toast 기능
    toastMessage.value = message;
    toastAlertType.value = type;
    showToast.value = true;
    timeout.value = setTimeout(() => {
      toastMessage.value = '';
      toastAlertType.value = '';
      showToast.value = false;
    }, 3000);
  }

  onUnmounted(()=> { // 메모리 누수 방지
    clearTimeout(timeout.value);
  });

  return {
    showToast,
    toastMessage,
    toastAlertType,
    triggerToast,
  }
}