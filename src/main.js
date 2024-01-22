import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'
import { faGithub,faLinkedin,faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { faA,faB } from "@fortawesome/free-solid-svg-icons";




const app = createApp(App)
library.add(faGithub,faLinkedin,faSquareTwitter,faA,faB);

app.use(createPinia())
app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')
