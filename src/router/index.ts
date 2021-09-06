//引入路由
import { createRouter, createWebHashHistory } from 'vue-router'
//引入路由类型检测
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main' //重定向，
  },
  {
    path: '/main',
    component: () => import('../views/main/main.vue') //别名
  },
  {
    path: '/login',
    component: () => import('../views/login/login.vue')
  }
]
//创建router对象
const router = createRouter({
  routes,
  history: createWebHashHistory() //hash模式，带#的
})

export default router
