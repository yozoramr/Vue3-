<script setup>
import userPicJpg from '@/assets/userPic.jpg'
const squareUrl = userPicJpg
</script>
<template>
    <div class="userNav">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/article/main' }"
          >EPMS</el-breadcrumb-item
        >
        <el-breadcrumb-item>首页数据</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="userBox">
        <span class="greeting">早上好！ admin</span>
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