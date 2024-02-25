<script setup>
import blueTheme from "@/echartstheme/blueTheme.json";
import '@/styles/standardStyle.css'
import * as echarts from "echarts";
import { onMounted, ref } from "vue";
echarts.registerTheme("blueTheme", blueTheme);
const chartRef = ref(null);
const chartInstance = ref(null);

onMounted(() => {
  if (chartRef.value) {
    chartInstance.value = echarts.init(chartRef.value, "blueTheme");
    chartInstance.value.setOption({
      xAxis: {
        type: "category",
        name: "日期",
        data: [
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月",
          "一月",
          "二月",
        ],
      },
      yAxis: {
        type: "value",
        name: "销售额",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "cross", // 默认为直线，可选为：'line' | 'shadow' | 'cross'
          crossStyle: {
            color: "#999", // 十字准线的颜色
          },
        },
      },
      legend: {
        data: ["直营销售额", "加盟销售额"],
        right: "40"
      },
      series: [
        {
          name: "直营销售额",
          data: [810, 1102, 701, 934, 1490, 943, 456, 820, 1820],
          type: "line",
        },
        {
          name: "加盟销售额",
          data: [710, 1202, 701, 634, 890, 943, 656, 620, 1420],
          type: "line",
        },
      ],
    });
  }
});
</script>
<template>
  <div class="mainBox commonShadows">
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