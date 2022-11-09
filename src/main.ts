import { createApp } from "vue";
import ElementPlus from "element-plus";

import SvgIcon from "@/icon/SvgIcon.vue";
import App from "./App.vue";

import "element-plus/dist/index.css";
import "./assets/main.css";

import "virtual:svg-icons-register";

import ids from "virtual:svg-icons-names";

console.log(ids);

const app = createApp(App);

app.use(ElementPlus);
// 注册自定义svg组件
app.component("svg-icon", SvgIcon);
app.mount("#app");
