<script setup>
import { ref } from "vue";
import userPicJpg from "@/assets/userPic.jpg";
import "@/styles/standardStyle.css";
const squareUrl = userPicJpg;
const props = defineProps({
  msgNav: {
    type: Array,
    default: () => [],
  },
});
const msgNav = ref(props.msgNav);
</script>
<template>
  <div class="card--nav commonShadows">
    <div class="section__card">
      <div class="item__title">
        <el-breadcrumb>
          <el-breadcrumb-item :to="{ path: '/article/main' }"
            >EPMS</el-breadcrumb-item
          >
          <el-breadcrumb-item>{{ msgNav[0] }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <div class="item--user">
        <span class="item--greeting">早上好！ 张思远</span>
        <div class="item--avatar">
          <el-avatar shape="square" :size="40" :src="squareUrl" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.card--nav {
  width: 100%;
  height: 72px;
  padding: 20px 20px 0 20px;

  .section__card {
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    .item__title {
      margin-left: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      line-height: 100%;
    }

    .item--user {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-right: 20px;
      .item--greeting {
        display: inline-block;
        height: 16px;
        font-size: 16px;
        line-height: 16px;
        text-align: center;
      }
      .item--avatar {
        display: inline-block;
        margin-left: 20px;
      }
    }
  }
}
</style>