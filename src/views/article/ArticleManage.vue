<script setup>
import { ref } from 'vue'
import layoutEdit from '@/views/layout/components/layoutEdit.vue'
import ManageEdit from '@/views/article/components/ManageEdit.vue'

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
const formPage = ref({
  page: '8',
  size: '6'
})

const handleSizeChange = () => {
  console.log('改变了页大小')
}
const handleCurrentChange = (value) => {
  console.log('改变了页数')
}

const tableData = [
  { tittle: '体育', class: '分类一', time: '2/14', state: '活跃', operation: '删除' }
]
const currentPage4 = ref(4)

const drawer = ref()
const onDraw = () => {
  drawer.value.drawerVisible = true
  console.log(drawer.value)
}



</script>
<template>
  <div class="mainbox">
    <layoutEdit class="layoutEdit" ref="dialog"></layoutEdit>
    <el-card>
      <template #header>
        <div class="header">
          <span>文章管理</span>
          <el-button type="primary" @click="onDraw">添加文章</el-button>
        </div>
      </template>
      <div class="select">
        <el-form  :inline="true">
          <el-form-item label="文章分类:">
            <el-select placeholder="请选择">
              <el-option label="分类一" value="分类一" />
              <el-option label="分类二" value="分类二" />
            </el-select>
          </el-form-item>
          <el-form-item label="发布状态">
            <el-select placeholder="请选择" label="发布状态">
              <el-option label="已发布" value="已发布" />
              <el-option label="草稿" value="草稿" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">搜索</el-button>
            <el-button>重置</el-button>
          </el-form-item>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="tittle" label="文章标题" width="300" />
            <el-table-column prop="class" label="分类" width="300" />
            <el-table-column prop="time" label="发表时间" width="300" />
            <el-table-column prop="state" label="状态" width="300" />
            <el-table-column prop="operation" label="操作" width="300">
              <el-button type="primary" @click="onDraw">编辑</el-button>
              <el-button type="danger" @click="dialogVisible = false"> 删除 </el-button>
            </el-table-column>
          </el-table>
          <div class="demo-pagination-block">
            <el-pagination
              v-model:current-page="formPage.page.value"
              v-model:page-size="formPage.size.value"
              :page-sizes="[100, 200, 300, 400]"
              :small="true"
              :disabled="false"
              :background="true"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            />
          </div>
          <div></div>
        </el-form>

      </div>
      
    </el-card>
    <ManageEdit ref="drawer">

    </ManageEdit>

  </div>
</template>
<style lang="less" scoped>
.mainbox {
  height: 100%;
  .el-card {
    min-height: 800px;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .select {
      display: flex;
      justify-content: space-between;
      .el-pagination {
        margin-top: 40px;
        float: right;
      }
    }
  }
}
</style>