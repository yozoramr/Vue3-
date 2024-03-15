<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'

const dialogVisible = ref(false)
const dialogSwitch = (value) => {
  dialogVisible.value = value
}
const tittleDialog = ref('')
const openDialog = (type) => {
  tittleDialog.value = type
}
const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
const formData = ref({
  name:'',
  nameEn:''
})

defineExpose({
  dialogVisible,
  dialogSwitch,
  openDialog,
  formData
})
</script>

<template>
  <div> 
    <el-dialog
    v-model="dialogVisible"
    :title= "tittleDialog"
    width="30%"
    :before-close="handleClose"
  > 
    <el-form :model="formData" label-width="120px">
      <el-form-item label="请输入分类">
        <el-input v-model="formData.name" placeholder="请输入分类" />
      </el-form-item>
      <el-form-item label="请输入英文名" >
        <el-input v-model="formData.nameEn" placeholder="请输入英文名" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
  </div>
</template>

<style scoped lang="less">
.dialog-footer button:first-child {
  margin-right: 10px;
}
.inputBox{
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  span{
    margin-right: 10px;
    line-height: 30px;
  }
  .el-input{
    width: 70%;
  }
}
</style>
