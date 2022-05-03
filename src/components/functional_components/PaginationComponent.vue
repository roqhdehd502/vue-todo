<!--
작성일 : 2022.05.03
작성자 : 부설연구소 사원 나민우
설명 : 페이징 컴포넌트
-->


<template>
  <nav>
    <ul class="pagination justify-content-center">
      <li v-if="currentPage !== 1" class="page-item">
        <a class="page-link page-cursor" @click="getTodos(currentPage - 1)">
          Prev
        </a>
      </li>
      <li 
        v-for="page in numberOfPages" 
        :key="page"
        class="page-item"
        :class="currentPage === page ? 'active' : ''"
      >
        <a class="page-link page-cursor" @click="getTodos(page)">
          {{ page }}
        </a>
      </li>
      <li v-if="numberOfPages !== currentPage" class="page-item">
        <a class="page-link page-cursor" @click="getTodos(currentPage + 1)">
          Next
        </a>
      </li>
    </ul>
  </nav>
</template>


<script>
import { useContext } from 'vue';

export default {
  props: {
    numberOfPages: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  emits: ['click'],
  setup() {
    const { emit } = useContext();
    const getTodos = (page) => {
        emit('click', page)
    };
    return {
        getTodos,
    }
  }
}
</script>


<style scoped>
.page-cursor {
  cursor: pointer;
}
</style>