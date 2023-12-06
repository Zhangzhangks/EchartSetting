import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router/route'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)
// main.ts

app.use(ElementPlus)

app.use(router)
app.mount('#app')
