<script setup>
import { ref } from 'vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

const drawerVisible = ref(false)
const handleClose = () => {
  console.log('关闭弹窗')
}
const direction = ref('rtl')
defineExpose({
  drawerVisible,
  handleClose
})

const drawerForm = ref({
  tittle: '',
  select: '',
  imgUrl: '',
  content: ''
})
const handlePreview = () => {
  console.log('上传前')
}
const handleRemove = () => {
  console.log('处理移除')
}
const handleExceed = () => {
  console.log('处理操作时文件数目超过最大限制')
}
const fileList = ref([])
</script>
<template>
  <div>
    <el-drawer v-model="drawerVisible" title="添加文章" :direction="direction">
      <el-form :inline="false" :model="drawerForm">
        <el-form-item label="文章标题:">
          <el-input v-model="drawerForm.tittle" placeholder="请输入标题" clearable />
        </el-form-item>
        <el-form-item label="文章分类:">
          <el-input v-model="drawerForm.tittle" placeholder="请选择" clearable />
        </el-form-item>
        <el-form-item label="文章封面:">
          <div style="border: 2px solid #dbdbdb">
            <el-upload
              v-model:file-list="fileList"
              class="upload-demo"
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              multiple
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :limit="2"
              :on-exceed="handleExceed"
            >
              <template #trigger>
                <el-icon style="font-size: 150px; color: #999; width: 400px; height: 400px"
                  ><Plus
                /></el-icon>
              </template>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="文章内容:">
          <div class="editor">
            <quill-editor theme="snow" contentType="html">
            </quill-editor>
          </div>
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>