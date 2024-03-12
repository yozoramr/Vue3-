<script lang="ts" setup>
import { ref } from "vue";
const active = ref(2);
const orderFlow = [
  {department:'产品研发部', time:'2024-01-01'},
  {department:'产品研发部', time:'2024-01-02'},
  {department:'运营部', time:'2024-01-02'},
  {department:'运营部', time:'2024-01-02'},
  {department:'财务部', time:'2024-01-02'}
]
</script>

<template>
  <div class="downCard">
    <div class="header__step">
      <el-steps style="max-width: 600px" :active="active" align-center>
        <el-step title="提交" />
        <el-step title="审查" />
        <el-step title="审批" />
      </el-steps>
    </div>
    <div class="body__flow">
      <el-table :data="orderFlow" style="width: 100%">
        <el-table-column prop="department" label="部门" width="180" />
        <el-table-column prop="time" label="时间" />
      </el-table>
    </div>
  </div>
</template>
<style lang="less" scoped>
.downCard {
  padding: 0 36px;
  .header__step {
    margin-top: 68px;
    margin-bottom: 40px;
    width: 100%;
  }
}
</style>