import { createApp } from 'vue'
import pinina from './stores/store.js';

import App from './App.vue'
import router from './router'

// import './assets/main.css'

const app = createApp(App)

app.use(pinina)
app.use(router)

app.mount('#app')
