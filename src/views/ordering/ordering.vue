<script setup lang="ts">
import { ref } from "vue";
import "@/styles/standardStyle.css";
import layoutTitle from "@/views/common/layoutTitle.vue";
import layoutNav from "@/views/common/layoutNav.vue";
import orderingStatus from "@/views/ordering/components/orderingStatus.vue"
const crumbStatus: string[] = ['工单申请'];
const dialogVisible = ref<boolean>(false);
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
              <layoutTitle title="工单申请"></layoutTitle>
              <div class="informationCard">
                <orderingStatus />
              </div>
            </div>
          </el-form>
        </div>
      </div>
      <div class="sideCard">
        <div class="upCard commonShadows"></div>
        <div class="downCard commonShadows"></div>
      </div>
      <ManageEdit ref="drawer"> </ManageEdit>
    </div>
  </div>
</template>

<style lang="less" scoped>
.mainbox {
  height: 100%;
  display: flex;
  flex-direction: column;
  

  .personManage {
    margin-top: 20px;
    box-shadow: none;
    display: flex;
    flex: 1;
    gap: 20px;
    margin-bottom: 20px;

    .mainCard {
      width: 1250px;


      background-color: #fff;
      

      .select {
        display: flex;
        margin: 0;
        padding: 0;
        width: 100%;
        justify-content: space-between;
        align-items: center;

        .el-form {
          width: 100%;


          .selectNav {
            display: flex;
            justify-content: flex-end;

            .informationCard{
              margin: 0;
              width: 100%;
              height: 210px;
            }

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
    .sideCard{
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 20px;
      .upCard{
        height: 250px;
        background-color: #fff;
      }
      .downCard{
        flex: 1;
        background-color: #fff;
      }
    }
  }
}
</style>