<!--
작성일 : 2022.04.28
작성자 : 부설연구소 사원 나민우
설명 : Todo 추가 
-->

<template>
    <form @submit="addTodo">
        <div class="input-group mb-3">
            <input 
                class="form-control"
                type="text" 
                v-model="todo"
                placeholder="Write Your To Do"
            />
            <button 
                class="btn btn-primary" 
                type="submit"
            >
                Add
            </button>
        </div>
        <div 
            class="form-text" 
            v-if="hasError"
        >
            <h5>내용을 입력해주세요.</h5>
        </div>
    </form>
</template>

<script>
import { ref } from 'vue';

export default { 
    emits: [
        'add-todo',
    ],

    setup(props, { emit }) {
        const todo = ref(''); // to-do 내용
        const hasError = ref(false); // 공백 입력 방지 에러 체크 변수
        
        const addTodo = (e) => { // to-do list 등록
            e.preventDefault();

            if (todo.value === '') {
                hasError.value = true;
            } else {
                emit('add-todo', {
                    id: Date.now(),
                    subject: todo.value,
                    isCompleted: false,
                });
                hasError.value = false;
                todo.value = '';
            }
        }

        return {
            todo,
            addTodo,
            hasError,
        };
    }
}
</script>

<style>

</style>