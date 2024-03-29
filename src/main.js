import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import "@mdi/font/css/materialdesignicons.css"
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { mdi } from 'vuetify/iconsets/mdi';

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    sets: {
      mdi,
    },
  },
})

export default createVuetify({
  theme: {
    defaultTheme: 'dark'
  }
})

const app = createApp(App).use(vuetify)

app.use(createPinia())
app.use(router)

app.mount('#app')

// const app = createApp(App).use(vuetify).use(router).use(createPinia()).mount('#app')