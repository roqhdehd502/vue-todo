<template>
    <div class="card" v-for="(todo, index) in todos" :key="todo.id" >
      <span style="display:none;">
        {{ index }}
      </span>
      <span class="column">
        <input type="checkbox" v-model="todo.isCompleted" />
      </span>
      <span class="column">
        <label :class="{ check: todo.isCompleted }">
          {{ todo.subject }}
        </label>
      </span>
      <span class="column">
        <button class="delete-button" type="button" @click="deleteTodo">
          Delete
        </button>
      </span>
    </div>
</template>


<script>
export default {
    props: {
        todos: {
            type: Array,
            requird: true
        }
    }
}
</script>


<style>

</style>