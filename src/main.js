import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { testApi } from './apis/testApi'

const app = createApp(App)
testApi().then(res=>console.log(res))


app.use(createPinia())
app.use(router)

app.mount('#app')
