// import { 
//   collection,
//   // doc, 
//   // getDoc,
//   getDocs,
//   query,
//   where,
//   orderBy,
//   // addDoc,
//   // updateDoc 
// } from "firebase/firestore";

// import { db } from "@/firebaseConfig";



export default {
  namespaced: true,
  
  state: {
      todos: [],
  },

  mutations: {
      GET_TODOS(state) {
          state.todos;
      },
      ADD_TODOS(state, payload) {
          state.todos.push(payload);
      },
      REMOVE_TODOS(state) {
          state.toasts.shift();
      }
  },

  actions: {
      // async loadTodos(uid) {
      //   let todos = [];
      //   let q = query(
      //     collection(db, "todos")
      //     , where("userId", "==", uid)
      //     , where("enabled", "==", true)
      //     , orderBy("uploadDate", "desc")
      //   );
      //   const querySnapshot = await getDocs(q);
      //   querySnapshot.forEach((doc) => {
      //     let data = doc.data();
      //     data.docId = doc.id;
      //     todos.push(data);
      //   });
      
      //   return todos;
      // },

      // triggerToast({ commit }, payload) {
      //     commit('ADD_TOAST', {
      //         id: Date.now(),
      //         message: payload.message,
      //         type: payload.type,
      //     });
      //     setTimeout(() => {
      //         commit('REMOVE_TOAST');
      //     }, 3000);
      // }
  },
}