<script setup>
import { ref, onMounted } from "vue";
import layoutEdit from "@/views/layout/components/layoutEdit.vue";
import layoutNav from "@/views/common/layoutNav.vue";
import "@/styles/standardStyle.css";
import editDialog from "@/views/common/editDialog.vue"
import { useCounterStore } from "@/stores/modules/user.js"
import { useRouter } from 'vue-router'
const crumbStatus = ['退出登录']
const useCounter = useCounterStore()
const router = useRouter()
const dialog = ref(null);

const onRecompose = (row) => {
  console.log(row);
  dialog.value.dialogVisible = true;
  dialog.value.formData = {
    name: row.name,
    nameEn: row.nickname,
  };
  dialog.value.openDialog("请修改名称");
};
const dialogVisible = ref(false);
onMounted(() => {
  dialogVisible.value = true
})

const handleConfirm = () => {
  console.log('退出登录')
  useCounter.removeUser()
  router.push('/login')
}

</script>
<template>
  <editDialog v-model:dialogVisible="dialogVisible" 
  @confirmDialog='handleConfirm'
  title="信息">
    <template #mainText>
      <span>是否退出登录</span>
    </template>
  </editDialog>
  <div class="mainbox">
    <layoutNav :msg-nav="crumbStatus"></layoutNav>
    <div class="personManage">
      <layoutEdit class="layoutEdit" ref="dialog"></layoutEdit>
      <div class="mainCard commonShadows">
        <div class="select">
          <div class="selectNav">
            <div class="tittleNav">退出登录</div>
          </div>
        </div>
      </div>
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
        padding: 0 20px;
        width: 100%;
        justify-content: space-between;
        align-items: center;

        .selectNav {
          display: flex;
          justify-content: center;
          margin-top: 12px;
          width: 100%;
          .tittleNav {
            width: 100%;
            font-size: 20px;
            font-weight: 520;
            margin-right: auto;
            display: block;
          }
          .mainLogout {
            width: 500px;
            height: 300px;
            padding: 0;
            margin: 0;
            border: 2px solid #909399;
          }

          .staff {
            margin-top: 12px;
          }
          .demo-pagination-block {
            margin-top: 40px;
            float: right;
          }
        }
      }
    }
  }
}
</style>