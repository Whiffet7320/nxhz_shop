<template>
  <div class="shop-header">
    <!-- <el-tabs type="border-card">
      <el-tab-pane label="首页模板">
        <Content />
      </el-tab-pane>
    </el-tabs> -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: 'login' }">首页</el-breadcrumb-item>
      <!-- <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
    </el-breadcrumb>
  </div>
</template>
<script>
// import Content from "./content";
export default {
  components: {
    // Content,
  },
};
</script>
<style>
.shop-header {
  /* height: 100%;
  width: 100%;
  box-sizing: border-box; */
  /* margin-bottom: 100px; */
}
.el-tabs {
  height: 100%;
  width: 100%;
}
.el-tabs__content {
  padding: 0px !important;
  /* margin-bottom: 100px; */
  /* height: calc(100% - 41px); */
  /* height: 1500px !important; */
  position: relative;
}
.el-tabs--border-card > .el-tabs__header {
  height: 40px;
}
.el-tabs--border-card {
  border: 0px;
  width: 100%;
  padding-bottom: 100px;
}
</style>