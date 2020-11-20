<template>
  <div class="shop-header">
    <div class="s-header">
      <!-- <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ name: 'testContent' }">订单管理</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ name: 'testContent' }">订单列表</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ name: 'details' }">订单详情页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ name: 'details' }"></el-breadcrumb-item>
      </el-breadcrumb> -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="(item, index) in list[0].meta" :key="index" :to="item.url">
          {{item.title}}
          <!-- <router-link v-if="item.url" :to="item.url">{{
            item.title
          }}</router-link> -->
          <!-- <a v-else>
            {{ item.title }}
          </a> -->
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="activity-view">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    console.log(this.$route.matched);
    // let match = this.$route.matched.filter(item=>item.meta)
    // console.log(match)
    this.list = this.$route.matched;
    this.list.forEach(ele=>{
      console.log(ele.meta)
    })
  },
};
</script>

<style lang="scss" scoped>
.shop-header {
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