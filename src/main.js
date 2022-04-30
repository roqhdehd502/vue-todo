import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

// bootstrap 5.0
import 'bootstrap/dist/js/bootstrap.bundle';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

createApp(App)
  .use(router)
  .mount('#app')