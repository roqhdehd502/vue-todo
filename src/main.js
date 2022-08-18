import { createApp } from 'vue'
import App from './App.vue'
import store from './store';
import router from './router';

// firebase
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db, storage } from './firebaseConfig';

// bootstrap 5.0
import 'bootstrap/dist/js/bootstrap.bundle';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"


let app;

onAuthStateChanged(getAuth(), () => {
  if (!app) {
    app = createApp(App)
      .use(store)
      .use(router)
      .mount('#app')
  }
})

db;
storage;