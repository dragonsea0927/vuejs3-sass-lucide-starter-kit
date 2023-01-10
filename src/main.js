import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import titleMixin from "./mixins/title.js"

import "./assets/scss/main.scss"

const app = createApp(App)

app.mixin(titleMixin)
app.use(router)

app.mount("#app")
