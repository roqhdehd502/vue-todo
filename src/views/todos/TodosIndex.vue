<template>
  <div>
    <div class="card">
      <CoinList />
    </div><br />

    <div v-if="isLogin">
      <input
        class="form-control"
        type="text"
        v-model="searchTodo"
        placeholder="검색할 Todo 입력"
        @keyup.enter="searchTodoKeyup"
      /><br />

      <div class="row"> 
        <TodoForm @add-todo="addTodo" />
      </div>

      <div v-if="!todos.length">
        추가된 할 일이 없습니다.
      </div>

      <ToDoList 
        :todos="todos" 
        @toggle-todo="toggleTodo" 
        @delete-todo="deleteTodo" 
      /><br />

      <!-- <nav>
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
      </nav> -->
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
import { 
  ref
  , watch
  //, onMounted
} from 'vue';
import router from '@/router';

import { 
  getAuth
  , onAuthStateChanged
} from "firebase/auth";
import { 
  collection,
  doc,
  onSnapshot,
  query,
  where,
  orderBy,
  //getDocs,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

import CoinList from '@/components/coins/CoinMarketPrice.vue'; // 코인 시세 리스트 컴포넌트
import ToDoList from '@/components/Main/todos/TodoList.vue'; // Todo 목록 컴포넌트
import TodoForm from '@/components/Main/todos/TodoForm.vue'; // Todo form 컴포넌트

import { useToast } from '@/composables/toast'; // 토스트 컴포저블


export default {
  components: {
    CoinList,
    ToDoList, 
    TodoForm,
  },

  setup() {
    const {
      showToast,
      toastMessage,
      toastAlertType,
      triggerToast,
    } = useToast();

    let timeout = null;
    const isLogin = ref(false);
    const userObj = ref(null);
    const searchTodo = ref('');
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
    
    const searchTodoKeyup = () => {
      clearTimeout(timeout);
      //getTodos(1);
    };

    watch(searchTodo, () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        //getTodos(1);
      }, 100);
    });    
    
    const getTodos = async (uid) => {
      try {
        const q = query(
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
            //todos.value.push(doc.data());
            todos.value.push(data);
          })
        });
      } catch(err) {
        err.value = '오류로 인해 불러올 수 없습니다!';
        triggerToast(err.value, 'danger');
      }
    };

    const addTodo = async (todo) => {
      try {
        await addDoc(collection(db, "todos"), {
          todoId: todo.todoId,
          userId: todo.userId,
          subject: todo.subject,
          uploadDate: todo.uploadDate,
          isCompleted: todo.isCompleted,
          enabled: todo.enabled,
        });
      } catch(err) {
        err.value = '오류로 인해 추가할 수 없습니다!';
        triggerToast(err.value, 'danger');
      }
    };

    const toggleTodo = async (index, isChecked) => {
      const docId = todos.value[index].docId;
      try {
        const docRef = doc(db, "todos", docId);
        await updateDoc(docRef, {
          isCompleted: isChecked
        });
        //todos.value[index].iscompleted = isChecked;
        triggerToast('성공적으로 변경 되었습니다.');
      } catch(err) {
        console.log(err.message);
        err.value = '오류로 인해 변경할 수 없습니다!'
        triggerToast(err.value, 'danger');
      }
    };

    const deleteTodo = async (docId) => {
      try {
        const docRef = doc(db, "todos", docId);
        await updateDoc(docRef, {
          enabled: false
        });
        triggerToast('성공적으로 삭제 되었습니다.');
      } catch(err) {
        err.value = '오류로 인해 삭제할 수 없습니다!'
        triggerToast(err.value, 'danger');
      }
    };

    const moveToLogin = () => {
      router.push({
        name: 'Login',
      });
    }

    return {
      showToast,
      toastMessage,
      toastAlertType,

      isLogin,
      moveToLogin,

      userObj,
      todos,
      getTodos,
      addTodo,
      deleteTodo,
      toggleTodo,
      searchTodo,
      searchTodoKeyup,
    };
  }
}
</script>


<style scoped>
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

.page-cursor {
  cursor: pointer;
}
</style>