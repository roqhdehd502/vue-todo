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
import { computed } from 'vue';
import { useStore } from 'vuex';


export default {
  name: 'ToastComponent',

  setup() {
    const store = useStore();

    const toasts = computed(() => store.state.toast.toasts);

    return {
      toasts,
    }
  }
}
</script>



<style scoped>
.toast-box {
  position: fixed !important;
  top: 10px; right: 10px;
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