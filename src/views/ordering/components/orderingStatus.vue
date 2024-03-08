<script setup>
import pic1 from "@/assets/orderingPic/工单汇总.png";
import pic2 from "@/assets/orderingPic/待处理工单.png";
import pic3 from "@/assets/orderingPic/工单审批中.png";
import pic4 from "@/assets/orderingPic/近期完成工单.png";
const status = [
  {
    id: 0,
    url: pic1,
    title: "工单汇总",
    num: "221",
  },
  {
    id: 1,
    url: pic2,
    title: "待处理工单",
    num: "221",
  },
  {
    id: 2,
    url: pic3,
    title: "工单审批中",
    num: "221",
  },
  {
    id: 3,
    url: pic4,
    title: "近期完成工单",
    num: "221",
  },
];
</script>
<template>
  <div class="maxBox">
    <div class="mainBox">
      <div class="orderBox" v-for="item in status" :key="item.id">
        <img :src="status[item.id].url" />
        <div class="info">
          <span class="infoTitle">{{ status[item.id].title }}</span>
          <span class="infoNum">{{ status[item.id].num }}</span>
        </div>
      </div>
    </div>
    <div class="tableBox">
      <el-table :data="tableData" height="410" style="width: 100%">
        <el-table-column prop="时间" label="时间" width="230" />
        <el-table-column prop="事项" label="事项" width="230" />
        <el-table-column prop="申请人" label="申请人" width="230" />
        <el-table-column prop="申请人" label="操作" width="230" />
        <el-table-column prop="申请人" label="状态"/>
      </el-table>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.maxBox {
  width: 100%;
  height: 100%;
  .mainBox {
    display: grid;
    grid-template-columns: repeat(4, 200px);
    justify-content: center;
    gap: 85px;

    .orderBox {
      display: flex;
      justify-content: space-between;
      align-content: center;
      height: 100px;
      margin-top: 60px;
      margin-bottom: 74px;
      img {
        width: 80px;
        height: 80px;
      }
      .info {
        flex: 1;
        padding-left: 26px;
        .infoTitle {
          display: block;
          color: #bcbec0;
          margin-top: 12px;
          font-size: 16px;
        }
        .infoNum {
          display: block;
          color: #38383a;
          margin-top: 14px;
          font-size: 20px;
          width: 700;
        }
      }
    }
  }
  .tableBox {
    width: 100%;
    height: 100%;
    background-color: red;
  }
}
</style>
