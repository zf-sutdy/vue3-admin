import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import store from './store';
import 'normalize.css/normalize.css'
// 全局 css
import '@/styles/index.scss'
const app = createApp(App);
app.use(store).use(router).use(ElementPlus).mount('#app');
