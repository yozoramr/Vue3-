<script lang="ts" setup>
import { ref } from 'vue'
const props = defineProps({
  title: String
})
const title = ref(props.title)
</script>
<template>
  <div class="titleNav">
    <span>{{ title }}</span>
  </div>
</template>

<style scoped lang="less" >
.titleNav {
  padding-left: 20px;
  border-bottom: 2px solid #f5f5f5;
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;


  span {

    font-size: 20px;
    font-weight: 520;
    height: 20px;
  }

}
</style>
