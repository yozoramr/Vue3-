<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { ElMessageBox } from 'element-plus'

const props = defineProps({
  dialogVisible: Boolean,
  title: String
})
const emit = defineEmits([
  'update:dialogVisible',
  'confirmDialog'
])
const dialogVisible = ref(props.dialogVisible)
watch(() => props.dialogVisible, (newValue) => {
  dialogVisible.value = newValue
})
watch(dialogVisible, () => {
  emit('update:dialogVisible', dialogVisible.value)
})

const title = ref(props.title)
const confirmDialog = () =>{
  console.log('点击了确认')
  dialogVisible.value = false
  emit('confirmDialog')
}


</script>Tip
<template>
  <el-dialog
    v-model="dialogVisible"
    :title="title"
    width="500"
  >
    <div>
      <slot name="mainText">11</slot>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="confirmDialog">
          确定
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>


