import { loadTodos, loadTodo, createTodo, updateTodo, updateToggleTodo, disabledTodo } from '@/remote/todos';



export default {
  namespaced: true,
  
  state: {
      todo: {},
      todos: [],
  },

  mutations: {
      ADD_TODO(state, payload) {
          state.todo = payload;
      },
      ADD_TODOS(state, payload) {
          state.todos = payload;
      },
  },

  actions: {
      async getTodoInfo({ commit }, payload) {
          await loadTodo(payload)
            .then(res => { commit('ADD_TODO', res) })
            .catch(error => console.log(error));
      },
      async getTodosInfo({ commit }, payload) {
          await loadTodos(payload)
            .then(res => { commit('ADD_TODOS', res) })
            .catch(error => console.log(error));
      },
      async addTodoInfo({ commit }, payload) {
          await createTodo(payload)
            .then(res => { commit('ADD_TODOS', res) })
            .catch(error => console.log(error));
      },
      async updateTodoInfo({ commit }, payload) {
          await updateTodo(payload.id, payload.updateTodoObj)
            .then(res => { commit('ADD_TODOS', res) })
            .catch(error => console.log(error));
      },
      async toggleTodoInfo({ commit }, payload) {
          await updateToggleTodo(payload.docId, payload.isChecked)
            .then(res => { commit('ADD_TODOS', res) })
            .catch(error => console.log(error));
      },
      async deleteTodoInfo({ commit }, payload) {
          await disabledTodo(payload)
            .then(res => { commit('ADD_TODOS', res) })
            .catch(error => console.log(error));
    },      
  },

  getters: {
      getTodo(state) {
          return state.todo;
      },
      getTodos(state) {
          return state.todos;
      }
  }
}