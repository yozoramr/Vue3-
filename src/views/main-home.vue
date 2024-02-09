<script setup>
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()

const myRoute = () => {
  console.log(router, route)
  router.push('./list')
}
</script>

<template>
  <div>首页</div>
  <button @click="myRoute">跳转指定路由</button>
</template>
