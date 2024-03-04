<script setup lang="ts">
import { ref } from "vue";
import layoutEdit from "@/views/layout/components/layoutEdit.vue";
import ManageEdit from "@/views/personManage/components/ManageEdit.vue";
import layoutNav from "@/views/common/layoutNav.vue";
import "@/styles/standardStyle.css";
import editDialog from "@/views/common/editDialog.vue";
const crumbStatus: string[] = ['工单申请'];
const formPage = ref({
  page: "2",
  size: "10",
});

const handleSizeChange = () => {
  console.log("改变了页大小");
};
const handleCurrentChange = () => {
  console.log("改变了页数");
};
interface IStaff {
  name: string,
  department: string,
  hiredate: string,
  state: string,
  operation: string
}
const staffList: IStaff[] = [
  {
    name: "杨敏",
    department: "产品研发部",
    hiredate: "2022.10.17",
    state: "在职",
    operation: "删除",
  },
  {
    name: "张磊洋",
    department: "产品研发部",
    hiredate: "2024.01.07",
    state: "实习",
    operation: "删除",
  },
  {
    name: "刘伟林",
    department: "运营部",
    hiredate: "2022.02.25",
    state: "在职",
    operation: "删除",
  },
  {
    name: "刘磊军",
    department: "产品研发部",
    hiredate: "2021.06.02",
    state: "在职",
    operation: "删除",
  },
  {
    name: "黄洋",
    department: "物流和供应链管理部",
    hiredate: "2023.03.21",
    state: "在职",
    operation: "删除",
  },
  {
    name: "陈军",
    department: "产品研发部",
    hiredate: "2022.04.24",
    state: "在职",
    operation: "删除",
  },
  {
    name: "吴静",
    department: "物流和供应链管理部",
    hiredate: "2021.08.27",
    state: "在职",
    operation: "删除",
  },
  {
    name: "王敏勇",
    department: "物流和供应链管理部",
    hiredate: "2021.06.27",
    state: "在职",
    operation: "删除",
  },
];

interface Idepartment {
  value: string,
  label: string
}
const departmentSatus = ref("");
const departmentOptions: Idepartment[] = [
  {
    value: "销售和客户服务部",
    label: "销售和客户服务部",
  },
  {
    value: "运营部",
    label: "运营部",
  },
  {
    value: "产品研发部",
    label: "产品研发部",
  },

  {
    value: "物流和供应链管理部",
    label: "物流和供应链管理部",
  },
];
const dialogVisible = ref<boolean>(false);
const deleteDialog = () => {
  dialogVisible.value = true;
};

</script>

<template>
  <editDialog v-model:dialogVisible="dialogVisible" title="信息">
    <template #mainText>
      <span>是否删除用户</span>
    </template>
  </editDialog>
  <div class="mainbox">
    <layoutNav :msg-nav="crumbStatus"></layoutNav>
    <div class="personManage">
      <layoutEdit class="layoutEdit" ref="dialog"></layoutEdit>
      <div class="mainCard commonShadows">
        <div class="select">
          <el-form :inline="true">
            <div class="selectNav">
              <div class="tittleNav">工单申请</div>
              <div class="orderStep">
                <el-steps style="max-width: 600px" :active="1" align-center>
                  <el-step title="提交"/>
                  <el-step title="审查"/>
                  <el-step title="审批"/>
                </el-steps>
              </div>
              <el-form-item>
                <el-select v-model="departmentSatus" class="m-2" placeholder="请选择部门" style="width: 240px">
                  <el-option v-for="item in departmentOptions" :key="item.value" :label="item.label"
                    :value="item.value" />
                </el-select>
              </el-form-item>

              <el-form-item>
                <el-button type="primary">搜索</el-button>
                <el-button>重置</el-button>
              </el-form-item>
            </div>
            <el-table class="staff" :data="staffList" style="width: 100%">
              <el-table-column prop="name" label="姓名" width="200" />
              <el-table-column prop="department" label="部门" width="250" />
              <el-table-column prop="hiredate" label="入职时间" width="250" />
              <el-table-column prop="state" label="状态" width="200" />
            </el-table>
            <div class="demo-pagination-block">
              <el-pagination v-model:current-page="formPage.page" v-model:page-size="formPage.size" :small="true"
                :disabled="false" :background="true" layout="prev, pager, next, jumper" :total="50"
                @size-change="handleSizeChange" @current-change="handleCurrentChange" />
            </div>
          </el-form>
        </div>
      </div>
      <ManageEdit ref="drawer"> </ManageEdit>
    </div>
  </div>
</template>

<style lang="less" scoped>
.mainbox {
  height: 100%;

  .personManage {
    margin: 20px 20px 0 20px;
    box-shadow: none;

    .mainCard {
      min-height: 700px;
      background-color: #fff;
      padding: 20px 20px 0 20px;

      .select {
        display: flex;
        margin: 0;
        padding: 0;
        width: 100%;
        justify-content: space-between;
        align-items: center;

        .el-form {
          width: 100%;
          padding: 0 20px;

          .selectNav {
            display: flex;
            justify-content: flex-end;
            margin-top: 12px;
            gap: 20px;

            .tittleNav {
              font-size: 20px;
              font-weight: 520;
              margin-right: auto;
              height: 20px;
            }

            .orderStep{
              width: 500px;
              height: 100px;
            }

            .el-form-item {
              padding: 0;
              margin: 0;
            }
          }

          .staff {
            margin-top: 12px;
          }

          .demo-pagination-block {
            margin-top: 40px;
            float: left;
          }
        }
      }
    }
  }
}
</style>