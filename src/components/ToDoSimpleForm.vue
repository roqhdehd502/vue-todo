<template>
    <form @submit="addTodo">
        <div>
            <input 
            type="text" 
            v-model="todo"
            placeholder="Write Your To Do"
            />
            <button 
            type="submit"
            >
            Add +
            </button>
        </div>
        <div class="error-message" v-if="hasError">
            <h5>내용을 입력해주세요.</h5>
        </div>
    </form>
</template>

<script>
import { ref } from 'vue';

export default { 
    setup(props, context) {
        const todo = ref(''); // to-do 내용
        const hasError = ref(false); // 공백 입력 방지 에러 체크 변수
        
        const addTodo = (e) => { // to-do list 등록
            e.preventDefault();

            if (todo.value === '') {
                hasError.value = true;
            } else {
                context.emit('add-todo', {
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