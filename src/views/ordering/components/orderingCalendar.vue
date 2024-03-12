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
  padding: 20px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .el-calendar {
    :deep(.el-calendar__header) {
      padding-top: 2px;
      padding-bottom: 6px;
    }
    :deep(.el-calendar-table thead th) {
      padding-top: 2px;
      padding-bottom: 6px;
      font-size: 14px;
    }
    :deep(.el-calendar__body) {
      padding-top: 0px;
    }
    :deep(.el-calendar-day) {
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 24px;
      font-size: 12px;
    }
  }
}
</style>
