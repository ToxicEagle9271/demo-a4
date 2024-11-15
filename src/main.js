import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import './firebaseDb.js'; // Ensure this path is correct

createApp(App).use(router).mount('#app');