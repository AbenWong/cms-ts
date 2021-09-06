<template>
  <div id="app">
    <h2>{{ $store.state.name }}</h2>
    <router-link to="/login">登录</router-link>
    <router-link to="/main">首页</router-link>
    <router-view></router-view>
    <el-button>hahaha</el-button>
    <el-button type="danger">hahaha</el-button>
    <el-button type="primary">hahaha</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// element局部引用
// import { ElButton } from 'element-plus'
//这样写对于每个文件都需要进行引用，因此可以使用bable插件
// import 'element-plus/theme-chalk/el-button.css'
export default defineComponent({
  components: {
    // ElButton
  },
  name: 'App'
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
