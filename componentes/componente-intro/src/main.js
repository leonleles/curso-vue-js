import { createApp } from 'vue'
import App from './App.vue'
import Contadores from "./Contadores.vue";

const app = createApp(App)

app.component('app-counters', Contadores)

app.mount('#app')
