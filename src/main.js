import { createApp } from 'vue'
import App from './App.vue'
import store from './store';
import router from './router';

// firebase
import { db } from './firebase';

// bootstrap 5.0
import 'bootstrap/dist/js/bootstrap.bundle';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')

db;