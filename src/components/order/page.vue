<template>
  <div class="page">
    <div class="block">
      <el-pagination
        @current-change="handleCurrentChange"
        :page-size="9"
        layout="total, prev, pager, next, jumper"
        :total="this.total"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data(){
    return{
      myGoodsList:null,
      newGoodsList:null
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.$store.commit('pageNum',val)
      // console.log(this.myGoodsList.splice(val-1,3))
      // this.myGoodsList = this.goodsList
      // this.newGoodsList = this.myGoodsList.data.splice(val-1,3)
      // this.myGoodsList.data = this.newGoodsList
      // this.$store.commit('goodsList',this.myGoodsList)
      // console.log([1,2,3,4,5,6,7,8,9,10,11,12].splice(val-1,3))
    },
  },
  computed: {
    ...mapState(["goodsList","total","per_page"]),
  },
  created(){
    // console.log(this.goodsList)
    this.myGoodsList = this.goodsList.data
  }
};
</script>
<style>
.order-content .page {
  padding: 0 60px 60px 60px;
  float: right;
}
</style>