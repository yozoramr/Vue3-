<script setup lang="ts">
import layoutNav from "@/views/common/layoutNav.vue";
import lineChart from "@/views/indexStatus/components/lineChart.vue"
import wareHouse from "@/views/indexStatus/components/wareHouse.vue"
import commonChart from "@/views/indexStatus/components/commonChart.vue"
const crumbStatus: String[] = ['首页数据']
const chartStatus1 = {
  tittle: "仓储容积",
  subheading: "Storage capacity",
  numberMin: 671,
  numberMax: 1200
}
const chartStatus2 = {
  tittle: "商品件数",
  subheading: "Number of items",
  numberMin: 6750,
  numberMax: 9999
}
const chartStatus3 = {
  tittle: "加盟签约",
  subheading: "Franchise signing",
  numberMin: 16,
  numberMax: 20
}
const chartStatus4 = {
  tittle: "供应商签约",
  subheading: "Supplier signing",
  numberMin: 56,
  numberMax: 62
}
</script>
<template>
  <div class="mainBox">
    <div class="statusBox">
      <layoutNav :msg-nav="crumbStatus"></layoutNav>
      <div class="mainBox">
        <div class="picItem"><commonChart :chartStatus="chartStatus1"></commonChart></div>
        <div class="picItem"><commonChart :chartStatus="chartStatus2"></commonChart></div>
        <div class="picItem"><commonChart :chartStatus="chartStatus3"></commonChart></div>
        <div class="picItem"><commonChart :chartStatus="chartStatus4"></commonChart></div>
      </div>
      <div class="footBox">
        <div class="radarBox"><wareHouse></wareHouse></div>
        <div class="lineBox"><lineChart></lineChart></div>
      </div>
      <div class="tipBox"><span>@2024 Excellent Product Management System</span></div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.totalLayout{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .viewLayout{
    flex-grow: 1;
  }
  .statusBox {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    .mainBox {
      padding: 20px 20px 0 20px;
      display: flex;
      justify-content: space-between;
      width: 100%;
      .picItem {
        margin: 0;
        padding: 0;
        background-color: #fff;
        width: 410px;
        height: 210px;
      }
    }
    .footBox {
      margin-top: 20px;
      padding: 0 20px 0 20px;
      display: flex;
      justify-content: space-between;
      width: 100%;
      .radarBox {
        margin-right: 13px;
        background-color: #fff;
        width: 410px;
        height: 530px;
      }
      .lineBox {
        flex: 1;
        background-color: #fff;
        height: 530px;
      }
    }
    .tipBox {
    flex-grow: 1;
    padding: 0;
    margin: 0;
    font-size: 12px;
    color: #aaabab;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

}


</style>