<script setup>
import { ref } from 'vue';
import layoutEdit from '@/views/layout/components/layoutEdit.vue'
import { containGetFormServerce } from '@/api/user'

const tableData = ref([])
containGetFormServerce().then(response => {
  tableData.value = response.data
  return
})
const dialog = ref(null)
const onRecompose = (row) => {
  console.log(row)
  dialog.value.dialogVisible = true
  dialog.value.formData = {
    name: row.name,
    nameEn: row.nickname
  }
  dialog.value.openDialog('请修改名称')
}
</script>
<template>
  
  <div class="mainbox">
    <layoutEdit class="layoutEdit" ref="dialog"></layoutEdit>
    <el-card>
      <template #header>
        <div class="header">
          <span>文章分类</span>
          <el-button type="primary" @click="onRecompose">添加分类</el-button>
        </div>
      </template>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column width="50"></el-table-column>
        <el-table-column prop="number" label="序号" width="300"></el-table-column>
        <el-table-column prop="nickname" label="英文名" width="450"></el-table-column>
        <el-table-column prop="name" label="分类" width="400"></el-table-column>
        <el-table-column label="操作">
          <template #default="{ row }">
            <el-button type="primary" round @click="onRecompose(row)">修改</el-button>
            <el-button type="danger" round>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<style lang="less" scoped>
.mainbox {
  height: 100%;
  padding: 20px;
  .el-card {
    
    min-height: 800px;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>