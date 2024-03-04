<script setup>
import { ref } from 'vue'
import userPicJpg from '@/assets/userPic.jpg'
import '@/styles/standardStyle.css'
const squareUrl = userPicJpg
const props = defineProps({
  msgNav: {
    type: Array,
    default: () => []
  }
})
const msgNav = ref(props.msgNav)
</script>
<template>
    <div class="userNav commonShadows">
      <el-breadcrumb >
        <el-breadcrumb-item :to="{ path: '/article/main' }"
          >EPMS</el-breadcrumb-item
        >
        <el-breadcrumb-item>{{ msgNav[0] }}</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="userBox">
        <span class="greeting">早上好！ 张思远</span>
        <el-avatar shape="square" :size="40" :src="squareUrl" />
      </div>
    </div>
</template>

<style lang="less" scoped>
      .userNav{
        margin: 20px 20px 0 20px;
        padding: 0;
        height: 60px;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        .el-breadcrumb{
          display: flex;
          margin-left: 20px;
          height: 100%;
          line-height: 100%;
        }
        .userBox{
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 20px;
          .greeting{
            display: inline-block;
            height: 16px;
            font-size: 16px;
            line-height: 16px;
            text-align: center;
          }
          .el-avatar{
            display: inline-block;
            margin-left: 20px;
          }
        }
      }
</style>