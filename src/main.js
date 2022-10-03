import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue3 from "bootstrap-vue-3";
import axios from 'axios'
import VueAxios from 'vue-axios'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

createApp(App).use(router,BootstrapVue3, axios, VueAxios).mount('#app')
