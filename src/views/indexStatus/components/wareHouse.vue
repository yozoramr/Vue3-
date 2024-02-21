<script setup>
import blueTheme from "@/echartstheme/blueTheme.json";
import * as echarts from "echarts";
import { onMounted, ref } from "vue";
echarts.registerTheme("blueTheme", blueTheme);
const chartRef = ref(null);
const chartInstance = ref(null);

onMounted(() => {
  if (chartRef.value) {
    chartInstance.value = echarts.init(chartRef.value, "blueTheme");
    chartInstance.value.setOption({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: ['八月', '九月', '十月', '十一月', '十二月', '一月', '二月']
  },
  series: [
    {
      name: '在库',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [420, 502, 401, 434, 490, 430, 420]
    },
    {
      name: '滞销',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: '损坏',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [60, 92, 81, 74, 90, 120, 70]
      
    }
  ]
});
  }
});
</script>
<template>
  <div class="mainBox">
    <div ref="chartRef" class="myChart"></div>
  </div>
</template>
<style scoped lang="less">
.mainBox {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  .myChart {
    width: 100%;
    height: 100%;
  }
}
</style>