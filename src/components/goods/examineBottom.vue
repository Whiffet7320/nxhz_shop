<template>
  <div class="testBottom">
    <el-table :data="tableData" style="width: 100%" ref="multipleTable">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <!-- <el-form-item label="商品名称">
              <span>{{ props.row.cat_id }}</span>
            </el-form-item> -->
            <el-table
              ref="skuMultipleTable"
              :data="props.row.sku"
              style="width: 100%"
              :show-header="false"
            >
              <el-table-column prop="sku_id" label="ID"> </el-table-column>
              <el-table-column
                prop="sale_attr_name"
                label="商品名称"
                :show-overflow-tooltip="true"
              >
              </el-table-column>
              <el-table-column label="商品主图">
                <template slot-scope="scope">
                  <img :src="scope.row.goods_img" style="height: 50px" />
                </template>
              </el-table-column>
              <el-table-column
                prop="shop_price"
                label="销售价"
              ></el-table-column>

              <el-table-column label="库存" prop="storage"> </el-table-column>

              <el-table-column prop="address3" label="审核状态">
              </el-table-column>
              <el-table-column fixed="right" label="操作" width="200">
              </el-table-column>
            </el-table>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column prop="goods_id" label="ID"> </el-table-column>
      <el-table-column
        prop="goods_name"
        label="商品名称"
        :show-overflow-tooltip="true"
      >
      </el-table-column>
      <el-table-column label="商品主图">
        <template slot-scope="scope">
          <img :src="scope.row.goods_img" style="height: 50px" />
        </template>
      </el-table-column>
      <el-table-column prop="address3" label="销售价"> </el-table-column>
      <el-table-column prop="address3" label="库存"> </el-table-column>
      <el-table-column prop="address3" label="审核状态"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >重新编辑</el-button
          >
          <el-button @click="deleteRow(scope.row)" type="text" size="small">
            查看理由
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import func from '../../../vue-temp/vue-editor-bridge';
export default {
  data() {
    return {
      myTableData: null,
      myPageNum: 1,
      mySearch: "",
      tableData: [],
      tableData2: [],
      sku: [],
    };
  },
  computed: {
    ...mapState(["search", "pageNum"]),
  },
  methods: {
    getData() {
      this.$api
        .goodsList({
          limit: this.per_page,
          keyword: this.mySearch,
          page: this.pageNum,
          // verify_state:,
        })
        .then((res) => {
          this.$store.commit("goodsList", res.data.data);
          // console.log(res.data.data.data);
          this.total = res.data.data.total;
          this.$store.commit("total", this.total);
          this.tableData = res.data.data.data;
          console.log(this.tableData, this.myPageNum);
          this.tableData.forEach((ele) => {
            // this.$set(ele.sku, "index", index);
            this.sku.push(ele.sku);
            // console.log(this.sku[index].index);
            // this.tableData2 = ele.sku;
          });
          console.log(this.tableData);
        });
    },
    handleClick(row) {
      console.log(row);
      this.$store.commit("edit", row);
      this.$router.push({ name: "Edit" });
    },

    toEdit() {
      this.$router.push({ name: "Edit" });
    },
    // oneoneone() {
    //   toggleSelection([tableData[1], tableData[2]]);
    // },
  },
  created() {
    console.log(this.search);
    // setInterval(()=>{
    //   console.log(this.search)
    // },1000)
    // this.$api.goodsList().then((res) => {
    //   this.$store.commit("goodsList", res.data.data);
    //   console.log(res.data.data.data);
    //   this.total = res.data.data.total;
    //   this.per_page = res.data.data.per_page;
    //   console.log(this.total, this.per_page);
    //   this.tableData = res.data.data.data;
    //   console.log(this.tableData);
    //   this.tableData.forEach((ele) => {
    //     // this.$set(ele.sku, "index", index);
    //     this.sku.push(ele.sku);
    //     // console.log(this.sku[index].index);
    //     // this.tableData2 = ele.sku;
    //   });
    // });
    this.getData();
  },
  watch: {
    "$store.state.search": {
      handler: function () {
        this.mySearch = this.$store.state.search;
        this.getData();
        // this.select();
      },
    },
    "$store.state.pageNum": function () {
      // console.log(this.$store.state.pageNum)
      this.myPageNum = this.$store.state.pageNum;
      this.getData();
    },
    "$store.state.per_page": function () {
      console.log(this.$store.state.per_page);
      this.per_page = this.$store.state.per_page;
      this.getData();
      // this.select();
    },
  },
};
</script>

<style >
.sell-content .testBottom {
  padding: 0 60px 60px 60px;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.el-table__header .el-table-column--selection .cell .el-checkbox {
  display: none;
}
.el-table__header .el-table-column--selection .cell:before {
  content: "是否上架";
}
.el-table__expanded-cell .el-table::before {
  content: "";
  position: absolute;
  background-color: #fff;
  z-index: 1;
}
.el-table__expanded-cell[class*="cell"] {
  padding: 0;
  padding-left: 50px;
}
</style>