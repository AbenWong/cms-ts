import { createApp } from 'vue'
import App from './App.vue'
// import ElementPlus from 'element-plus'
// // import 'element-plus/theme-chalk/index.css' 与下面是重复的
// import 'element-plus/dist/index.css'

import router from './router'
import store from './store'

import { globalRegister } from './global'

import './service/axios_demo'
const app = createApp(App)
/* 当你用use的时候默认使用传入的函数，执行app对象 */
app.use(globalRegister) //注册了element-plus
app.use(router)
app.use(store)
// app.use(ElementPlus)
// app.component(ElButton.name, ElButton)
app.mount('#app')

//使用环境变量
console.log(process.env.VUE_APP_BASE_URL)
