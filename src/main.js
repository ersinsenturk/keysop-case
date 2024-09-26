import "./assets/main.css";
import AppSpinner from "./components/AppSpinner.vue";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.component("AppSpinner", AppSpinner);

app.use(createPinia());
app.use(router);

app.mount("#app");
