<!--
작성일 : 2022.04.30
작성자 : 부설연구소 사원 나민우
설명 : 토스트 컴포넌트
-->


<template>
  <div
    class="alert alert-success toast-box"
    :class="`alert-${type}`"
    role="alert"
  >
    {{ message }}
  </div>
</template>


<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'success',
    },
  }
}
</script>


<style>
.toast-box {
  position: fixed !important;
  top: 10px;
  right: 10px;
}
</style>