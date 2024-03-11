<template>
  <div class="calendarBox">
    <el-calendar v-model="value" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const value = ref(new Date());
</script>
<style lang="less" scoped>
.calendarBox {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .el-calendar {
    width: 100%;
    height: 100%;
    :deep(.el-calendar-table .el-calendar-table__row) {
      height: 1px;
      overflow: none;
    }
  }
}
</style>
