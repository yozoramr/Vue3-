<script setup lang="ts">
import layoutNav from "@/views/common/layoutNav.vue";
import lineChart from "@/views/indexStatus/components/lineChart.vue";
import wareHouse from "@/views/indexStatus/components/wareHouse.vue";
import commonChart from "@/views/indexStatus/components/commonChart.vue";
import layoutTips from "@/views/common/layoutTips.vue";
import { usechartStatus } from "@/api/indexStatusApi.js";
const crumbStatus: String[] = ["首页数据"];
usechartStatus().then((res) => {
  console.log(res);
});

const chartStatus1 = {
  tittle: "仓储容积",
  subheading: "Storage capacity",
  numberMin: 671,
  numberMax: 1200,
};
const chartStatus2 = {
  tittle: "商品件数",
  subheading: "Number of items",
  numberMin: 6750,
  numberMax: 9999,
};
const chartStatus3 = {
  tittle: "加盟签约",
  subheading: "Franchise signing",
  numberMin: 16,
  numberMax: 20,
};
const chartStatus4 = {
  tittle: "供应商签约",
  subheading: "Supplier signing",
  numberMin: 56,
  numberMax: 62,
};
</script>
<template>
  <div class="body__block">
    <div class="block__block">
      <div class="header__nav">
        <layoutNav :msg-nav="crumbStatus"></layoutNav>
      </div>
      <div class="card__item--up">
        <div class="item__button">
          <div class="picItem">
            <commonChart :chartStatus="chartStatus1"></commonChart>
          </div>
          <div class="picItem">
            <commonChart :chartStatus="chartStatus2"></commonChart>
          </div>
          <div class="picItem">
            <commonChart :chartStatus="chartStatus3"></commonChart>
          </div>
          <div class="picItem">
            <commonChart :chartStatus="chartStatus4"></commonChart>
          </div>
        </div>
      </div>
      <div class="card__item--down">
        <div class="item--radarBox"><wareHouse></wareHouse></div>
        <div class="item--lineBox"><lineChart></lineChart></div>
      </div>
      <div class="footer--tips">
        <layoutTips />
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.body__block {
  max-width: 100%;
  height: 100%;

  .block__block {
    width: 100%;
    height: 100%;
    display: flex;
    overflow: auto;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: nowrap;
    .header__nav {
      flex-shrink: 1;
    }
    .card__item--up {

      min-height: 0;

      .item__button {
        display: flex;
        gap: 20px;
        padding: 20px 20px 0;
        justify-content: space-between;
        min-height: 200px;
        min-width: 50%;
        flex-wrap: nowrap;
        .picItem {
          margin: 0;
          padding: 0;
          background-color: #fff;
          width: 100%;
          height: 210px;
        }
      }
    }
    .card__item--down{
      flex-shrink: 1;
      flex-grow: 1;
      flex-basis: auto;
      min-width: 0;
      min-height: 50px;
      padding: 20px 20px 0 20px;
      display: flex;
      gap: 16px;
      justify-content: space-between;
      flex-wrap: nowrap;
      .item--radarBox {
        padding: 20px;
        background-color: #fff;
        min-width: 300px;
        height: 100%;
        overflow: hidden;
      }
      .item--lineBox {
        flex-grow: 1;
        padding: 20px;
        min-width: 0;
        height: 100%;
        background-color: #fff;
      }
    }
    .footer--tips {
      min-width: 0;
      min-height: 60px;
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