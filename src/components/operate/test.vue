<template>
  <div class="operate-header">
    <div class="s-header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ name: 'text2' }">运营管理</el-breadcrumb-item>
        <el-breadcrumb-item>优惠券列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="activity-view">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.operate-header {
  .s-header {
    height: 64px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid;
    .el-breadcrumb {
      // height: 64px;
      // display: flex;
      // align-items: center;
      margin-left: 30px;
    }
  }
  .activity-view {
  }
}
</style>