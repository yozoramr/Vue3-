<script setup>
import userPic from '@/assets/default.png'
import { useCounterStore } from '@/stores/modules/user'
import { onMounted } from 'vue'
import { userGetinfoService } from '@/api/user'
import router from '@/router';

const CounterStore = useCounterStore()
onMounted(() => {
  console.log(CounterStore.token)
  userGetinfoService(CounterStore.token).then(response => {
    CounterStore.user.value = response.data
  })
})

const btnLogout = () => {
  CounterStore.removeToken()
  CounterStore.removeUser()
  router.push('/login')
}

</script>
<template>
  
  <div class="totalLayout">

    <el-aside>
      <div class="logobox"><img src="@/assets/logo2.png" alt="#"></div>
      <el-menu
      active-text-color="#ffd04b"
      background-color="#232323"
      text-color = '#ffffff'
      >
        <el-menu-item index="1" @click="$router.push('/article/select')">
          <el-icon :size="16"><Menu /></el-icon>
          <span>&nbsp;文章分类</span>
        </el-menu-item>
        <el-menu-item index="2" @click="$router.push('/article/manage')">
          <template #title>
            <el-icon :size="16"><Histogram /></el-icon>
            <span>&nbsp;文章管理</span>
          </template>
        </el-menu-item>
        <el-sub-menu index="3">
          <template #title>
            <el-icon :size="16"><UserFilled /></el-icon><span>&nbsp;个人中心</span>
          </template>
          <el-menu-item index="3-1"><el-icon><User /></el-icon><span>基本资料</span></el-menu-item>
          <el-menu-item index="3-2"><el-icon><Crop /></el-icon><span>更换头像</span></el-menu-item>
          <el-menu-item index="3-3"><el-icon><EditPen /></el-icon><span>重置密码</span></el-menu-item>
        </el-sub-menu>
      </el-menu>

    </el-aside>
    <el-container>
      <el-header>
        <div class="userbox">
          <div class="userInfo">用户名：{{ CounterStore?.user?.value?.username || '未登录' }}</div>
          <el-dropdown>
            <div class="userpic">
              <el-avatar 
              :size="40"
              :src='userPic'
              ></el-avatar>
            </div>
            <template #dropdown>
              <el-dropdown-item>基本资料</el-dropdown-item>
              <el-dropdown-item>更换头像</el-dropdown-item>
              <el-dropdown-item>重置密码</el-dropdown-item>
              <el-dropdown-item @click="btnLogout">退出登录</el-dropdown-item>
            </template>
          </el-dropdown>

        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>大事件 © 2023 Created by 黑马程序员</el-footer>
    </el-container>
  </div>
</template>
<style lang="less" scoped>
.totalLayout{
  display: flex;
  height: 950px;
  background-color: #f5f5f5;
  .layoutEdit{
    position: fixed;
    z-index: 99;
  }
  .el-aside{
    width: 200px;
    display: inline-block;
    background-color: #232323;
    .logobox{
      width: 100%;
      height: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 110px;
        height: auto;
      }
    }

    .el-row{
      display: flex;
      align-items: center;

      height: 150px;
      margin: 0;
      padding: 0;
      font-size: 14px;
      line-height: 14px;
      color: #fff;
      .el-col{
        display: inline-block;
        position: relative;
        span{
          position: absolute;
          top: 2px;
        }
      }
    }
  }
  .el-container{
    display: flex;
    background-color: #f5f5f5;
    .el-header{

      padding: 0;
      height: 60px;
      background-color: #fff;
      .userbox{
        margin-right: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        .userInfo{
          margin-left: 20px;
        }
        .el-dropdown{
          .userpic{
          display: flex;
          align-items: center;
          height: 100%;
        }
        }

      }
    }
    .el-main{
      padding: 20px;

    }
    .el-footer{
      height: 60px;
      font-size: 12px;
      line-height: 60px;
      color: #666;
      text-align: center;
    }
  }
}
</style>

