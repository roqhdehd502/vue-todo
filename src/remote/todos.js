import { 
  collection,
  doc, 
  getDoc,
  getDocs,
  //onSnapshot, 
  query,
  where,
  orderBy,
  addDoc,
  updateDoc 
} from "firebase/firestore";

import { db } from "@/firebaseConfig";



export const loadTodo = async (docId) => {
  const docRef = doc(db, "todos", docId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("NONE DATA!");
  }
};


export const loadTodos = async (uid) => {
  let todos = [];
  let q = query(
    collection(db, "todos")
    , where("userId", "==", uid)
    , where("enabled", "==", true)
    , orderBy("uploadDate", "desc")
  );
  // onSnapshot(q, (querySnapshot) => {
  //   querySnapshot.forEach((doc) => {
  //     let data = doc.data();
  //     data.docId = doc.id;
  //     todos.push(data);
  //   })
  // });
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    let data = doc.data();
    data.docId = doc.id;
    todos.push(data);
  });

  return todos;
}


export const createTodo = async (todoObj) => {
  await addDoc(collection(db, "todos"), todoObj);
};


export const updateTodo = async (docId, updateTodoObj) => {
  const docRef = doc(db, "todos", docId);
  await updateDoc(docRef, updateTodoObj);
}


export const updateToggleTodo = async (docId, isChecked) => {
  const docRef = doc(db, "todos", docId);
  await updateDoc(docRef, {
    isCompleted: isChecked
  });
};


export const disabledTodo = async (docId) => {
  const docRef = doc(db, "todos", docId);
  await updateDoc(docRef, {
    enabled: false
  });
};