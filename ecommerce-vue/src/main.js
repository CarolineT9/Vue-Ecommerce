import { createApp } from 'vue'
import App from './App.vue'
//pinia
import { createPinia } from 'pinia'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
//Vue Router
import router from './router'


const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'dark'
    }
  })

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(vuetify)
app.use(router)
app.mount('#app')

