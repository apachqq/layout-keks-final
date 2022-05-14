import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store/store'
import components from '@/components/UI'
import '/public/css/style.css'
import '/public/css/normalize.css'

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app.use(store).mount('#app')
