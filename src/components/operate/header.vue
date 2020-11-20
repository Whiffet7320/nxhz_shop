<template>
  <div class="order-header">
    <el-tabs type="border-card">
      <el-tab-pane label="运营管理">
        <Content />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Content from "./content";
export default {
  components: {
    Content,
  },
};
</script>
<style>
.order-header {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}
.el-tabs {
  height: 100%;
  width: 100%;
}
.el-tabs__content {
  padding: 0px !important;
  height: calc(100% - 41px);
  /* height: 100%; */
  position: relative;
}
.el-tabs--border-card > .el-tabs__header {
  height: 40px;
}
.el-tabs--border-card {
  border: 0px;
  width: 100%;
}

.order-header .el-tab-pane {
  height: 100%;
}
</style>