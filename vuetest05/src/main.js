import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
import 'element-ui/lib/theme-chalk/index.css'

createApp(App).use(ElementPlus)

createApp(App).use(router).mount('#app')
