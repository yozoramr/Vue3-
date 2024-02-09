<script setup>
// 引入store 其中useCounterStore必须为export的对象
// import { useCounterStore } from '@/stores/login'
// 调用并拿到仓库对象
// const userStore = useCounterStore()
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
</script>

<template>
  <el-config-provider :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
</template>

<style scoped></style>
