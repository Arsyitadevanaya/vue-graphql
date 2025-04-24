import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import store from './store'

// apollo
import { createApolloProvider } from '@vue/apollo-option'
import apolloClient from './apollo'

const app = createApp(App)

const vuetify = createVuetify({
  components,
  directives,
  
})
const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
})

app.use(router)
app.use(apolloProvider)
app.use(vuetify)
app.use(store)
app.mount('#app')
