import { createApp } from "vue"

import App from "./App.vue"

const app = createApp(App)

// SEO 😎
import { createHead } from "unhead"
app.use(createHead())

// SCSS ✨
import "./assets/scss/main.scss"

// Router 🚀
import router from "./router"
app.use(router)

app.mount("#app")
