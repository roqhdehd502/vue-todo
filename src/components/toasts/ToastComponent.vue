<template>
  <transition-group name="fade">
    <div
      v-for="toast in toasts"
      :key = toast.id
      class="alert alert-success toast-box"
      :class="`alert-${toast.type}`"
      role="alert"
    >
      {{ toast.message }}
    </div>
  </transition-group>
</template>


<script>
import { useToast } from '@/composables/toast'; // 토스트 컴포저블

export default {
  setup() {
    const { toasts } = useToast(); // 변경 사항시 알림

    return {
      toasts,
    }
  }
}
</script>


<style scoped>
.toast-box {
  position: fixed !important;
  top: 10px;
  right: 10px;
  z-index: 50;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
} 
</style>