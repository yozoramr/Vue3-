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
    num: "47",
  },
  {
    id: 1,
    url: pic2,
    title: "待处理工单",
    num: "1",
  },
  {
    id: 2,
    url: pic3,
    title: "工单审批中",
    num: "2",
  },
  {
    id: 3,
    url: pic4,
    title: "近期完成工单",
    num: "6",
  },
];
const tableData = [
  {
    date: "2023-09-07",
    name: "物料报销",
    applicant: "Bob",
    operate: "操作",
    state: "已完成",
  },
  {
    date: "2023-11-21",
    name: "新品发布",
    applicant: "Bob",
    operate: "操作",
    state: "审批中",
  },
  {
    date: "2023-05-09",
    name: "物料报销",
    applicant: "Alice",
    operate: "操作",
    state: "已完成",
  },
  {
    date: "2023-11-27",
    name: "物料报销",
    applicant: "Hannah",
    operate: "操作",
    state: "未通过",
  },
  {
    date: "2023-06-01",
    name: "上新",
    applicant: "Diana",
    operate: "操作",
    state: "未通过",
  },
  {
    date: "2023-08-12",
    name: "物料报销",
    applicant: "Bob",
    operate: "操作",
    state: "已完成",
  },
  {
    date: "2023-10-12",
    name: "新品发售",
    applicant: "Fiona",
    operate: "操作",
    state: "已取消",
  },
  {
    date: "2023-12-29",
    name: "物料报销",
    applicant: "Bob",
    operate: "操作",
    state: "待审批",
  },
  {
    date: "2023-09-13",
    name: "物料报销",
    applicant: "Julia",
    operate: "操作",
    state: "进行中",
  },
];
const handleSizeChange = () => {
  console.log("改变了页大小");
};
const handleCurrentChange = () => {
  console.log("改变了页数");
};
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
        <el-table-column sortable prop="date" label="时间" width="230" />
        <el-table-column prop="name" label="事项" width="230" />
        <el-table-column prop="applicant" label="申请人" width="230" />
        <el-table-column prop="operate" label="操作" width="230" />
        <el-table-column prop="state" label="状态" />
      </el-table>
    </div>
    <div class="pageItem">
      <el-pagination small background layout="prev, pager, next" :total="50" />
    </div>
  </div>
</template>



<style lang="scss" scoped>
@font-face {
  font-family: 'myFont';
  src: url('@/assets/fonts/DINCompPro-Bold.ttf');
}
.maxBox {
  width: 100%;
  height: 100%;
  .mainBox {
    height: 220px;
    display: grid;
    grid-template-columns: repeat(4, 210px);
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
          color: #333;
          margin-top: 12px;
          font-size: 28px;
          width: 700;
          font-family: 'myFont' , sans-serif;
        }
      }
    }
  }
  .tableBox {
    padding: 0 20px 0 20px;
    width: 100%;
    border: none;
  }
  .pageItem{
    margin-top: 26px;
    margin-right: 20px;
    float: right;
  }
}
</style>
