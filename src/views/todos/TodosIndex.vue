<template>
  <div>
    <div v-if="isLogin">
      <div class="row todo-form"> 
        <TodoForm @add-todo="addTodo" />
      </div>

      <div 
        v-if="!loading"
        class="mb-3 bg-light text-success spinner-border" 
        role="status"
        style="margin-left: 45%"
      >
        <span class="visually-hidden">Loading...</span>
      </div>

      <div v-if="loading && !todos.length" class="card p-3 bg-secondary text-center" style="color: white;">
        추가된 할 일이 없습니다.
      </div>

      <ToDoList 
        v-if="loading"
        :todos="todos" 
        @toggle-todo="toggleTodo" 
        @delete-todo="deleteTodo" 
      />
    </div>

    <div v-else class="input-group mb-3">
      <input 
        class="form-control" 
        type="text" 
        value="로그인 상태에서만 작성 가능합니다" 
        disabled 
        readonly
      >
      <button 
        class="btn btn-outline-secondary" 
        type="button"
        @click="moveToLogin"
      >
        로그인
      </button>
    </div>
  </div>
</template>



<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import router from '@/router';

import { 
  getAuth,
  onAuthStateChanged
} from "firebase/auth";
import { 
  collection,
  doc,
  onSnapshot,
  query,
  where,
  orderBy,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";

import ToDoList from '@/components/todos/TodoList.vue';
import TodoForm from '@/components/todos/TodoForm.vue';


export default {
  name: 'TodoIndex',

  components: {
    ToDoList, 
    TodoForm,
  },

  setup() {
    const store = useStore();

    const loading = ref(false); 
    const isLogin = ref(false);
    const userObj = ref(null);
    const todos = ref([]);

    const loginStatus = () => {
      onAuthStateChanged(getAuth(), (user) => {
        if (user) {
          isLogin.value = true;
          userObj.value = user.uid;
          getTodos(userObj.value)
          return;
        } else {
          isLogin.value = false;
          return;
        }
      });
    }
    loginStatus();
    
    const getTodos = async (uid) => {
      try {
        let q = query(
          collection(db, "todos")
          , where("userId", "==", uid)
          , where("enabled", "==", true)
          , orderBy("uploadDate", "desc")
        );

        onSnapshot(q, (querySnapshot) => {
          todos.value = [];
          querySnapshot.forEach((doc) => {
            let data = doc.data();
            data.docId = doc.id;
            todos.value.push(data);
          })
        });

        loading.value = true;
      } catch(err) {
        err.value = '내용을 불러올 수 없습니다!';
        store.dispatch('toast/triggerToast', { 
            message: err.value, 
            type: 'danger' 
        });
      }
    };

    const addTodo = async (todo) => {
      try {
        await addDoc(collection(db, "todos"), {
          userId: todo.userId,
          subject: todo.subject,
          uploadDate: todo.uploadDate,
          isCompleted: todo.isCompleted,
          enabled: todo.enabled,
        });
      } catch(err) {
        err.value = '오류로 인해 변경할 수 없습니다!';
        store.dispatch('toast/triggerToast', { 
            message: err.value, 
            type: 'warning' 
        });
      }
    };

    const toggleTodo = async (index, isChecked) => {
      const docId = todos.value[index].docId;
      try {
        const docRef = doc(db, "todos", docId);
        await updateDoc(docRef, {
          isCompleted: isChecked
        });
        store.dispatch('toast/triggerToast', { 
            message: '성공적으로 변경 되었습니다.', 
            type: 'success' 
        });
      } catch(err) {
        err.value = '오류로 인해 변경할 수 없습니다!';
        store.dispatch('toast/triggerToast', { 
            message: err.value, 
            type: 'warning' 
        });
      }
    };

    const deleteTodo = async (docId) => {
      try {
        const docRef = doc(db, "todos", docId);
        await updateDoc(docRef, {
          enabled: false
        });
        store.dispatch('toast/triggerToast', { 
            message: '성공적으로 삭제 되었습니다.', 
            type: 'success' 
        });
      } catch(err) {
        err.value = '오류로 인해 삭제할 수 없습니다!';
        store.dispatch('toast/triggerToast', { 
            message: err.value, 
            type: 'warning' 
        });
      }
    };

    const moveToLogin = () => {
      router.push({
        name: 'Login',
      });
    }

    return {
      loading,
      isLogin,
      userObj,
      todos,
     
      getTodos,
      addTodo,
      toggleTodo,
      deleteTodo,
      moveToLogin,
    };
  }
}
</script>



<style scoped>
.todo-form {
  top: 0;
  position: sticky;
  z-index: 5;
}
</style>