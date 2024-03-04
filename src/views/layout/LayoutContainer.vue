<script setup>
import { useCounterStore } from '@/stores/modules/user'
import { onMounted } from 'vue'
import { userGetinfoService } from '@/api/user'
import router from '@/router';
import userPicJpg from '@/assets/userPic.jpg'

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
const squareUrl = userPicJpg

</script>
<template>
  
  <div class="totalLayout">
    <el-aside>
      <div class="logobox"><img src="@\assets\logo(200-100).png" alt="#"></div>
      <el-menu
      active-text-color="#3b9cff"
      background-color="#fff"
      text-color = '#38383a'
      >
        <el-menu-item index="1" @click="$router.push('/epms/select')">
          <el-icon :size="16"><Menu /></el-icon>
          <span>&nbsp;首页数据</span>
        </el-menu-item>
        <el-menu-item index="2" @click="$router.push('/epms/personManage')">
          <template #title>
            <el-icon :size="16"><Briefcase /></el-icon>
            <span>&nbsp;人员管理</span>
          </template>
        </el-menu-item>
        <el-menu-item index="3" @click="$router.push('/epms/ordering')">
          <template #title>
            <el-icon :size="16"><Stamp /></el-icon>
            <span>&nbsp;工单申请</span>
          </template>
        </el-menu-item>
        <el-menu-item index="4" @click="$router.push('/epms/main')">
          <template #title>
            <el-icon :size="16"><Flag /></el-icon>
            <span>&nbsp;门店坐标</span>
          </template>
        </el-menu-item>
        <el-sub-menu index="5">
          <template #title>
            <el-icon :size="16"><UserFilled /></el-icon><span>&nbsp;个人中心</span>
          </template>
          <el-menu-item index="5-1"><el-icon><User /></el-icon><span>基本资料</span></el-menu-item>
          <el-menu-item index="5-2"><el-icon><Crop /></el-icon><span>更换头像</span></el-menu-item>
          <el-menu-item index="5-3"><el-icon><EditPen /></el-icon><span>重置密码</span></el-menu-item>
          <el-menu-item index="5-4" @click="$router.push('/epms/personalcenter/logout')"><el-icon><SwitchButton /></el-icon><span>退出登录</span></el-menu-item>
        </el-sub-menu>
      </el-menu>

    </el-aside>
    <div class="viewLayout">
      <router-view></router-view>
    </div>
  </div>
</template>
<style lang="less" scoped>

.totalLayout{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #f5f5f5;
  overflow: hidden;
  .layoutEdit{
    position: fixed;
    z-index: 99;
  }
  .el-aside{
    width: 200px;
    height: 100vh;
    display: inline-block;
    background-color: #fff;
    border-right: 1px solid #e7e7e7;
    .logobox{
      width: 100%;
      height: 100px;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 100%;
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
      margin: 0;
      padding: 0;

    }
    .el-main{
      padding: 0;
    }
  }
  .viewLayout{
    flex-grow: 1;
  }
}
</style>

