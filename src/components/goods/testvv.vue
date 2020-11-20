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
              :data="props.row.sku"
              style="width: 100%"
              :show-header="false"
            >
              <el-table-column prop="sku_id" label="ID"> </el-table-column>
              <el-table-column prop="sale_attr_name" label="商品名称">
              </el-table-column>
              <el-table-column label="商品主图">
                <template slot-scope="scope">
                  <img :src="scope.row.goods_img" style="height: 50px" />
                </template>
              </el-table-column>
              <el-table-column prop="address2" label="分类"> </el-table-column>
              <el-table-column
                prop="shop_price"
                label="销售价"
              ></el-table-column>
              <el-table-column prop="storage" label="库存"> </el-table-column>
              <el-table-column type="selection" width="200"> </el-table-column>
              <el-table-column prop="address3" label="审核状态">
              </el-table-column>
              <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                  <el-button
                    @click="handleClick(scope.row)"
                    type="text"
                    size="small"
                    >编辑</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column prop="goods_id" label="ID"> </el-table-column>
      <el-table-column prop="goods_name" label="商品名称"> </el-table-column>
      <el-table-column label="商品主图">
        <template slot-scope="scope">
          <img :src="scope.row.goods_img" style="height: 50px" />
        </template>
      </el-table-column>
      <el-table-column prop="address2" label="分类"> </el-table-column>
      <el-table-column prop="address3" label="销售价"> </el-table-column>
      <el-table-column prop="address3" label="库存"> </el-table-column>
      <el-table-column type="selection" width="200"> </el-table-column>
      <el-table-column prop="address3" label="审核状态"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >编辑</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "12987122",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
          ImageUrl: "",
        },
        {
          id: "12987123",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
        {
          id: "12987125",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
        {
          id: "12987126",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
      ],
      tableData2: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      sku: [],
    };
  },
  methods: {
    handleClick(row) {
      console.log(row);
      this.$store.commit("edit", row);
      this.$router.push({ name: "Edit" });
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    toEdit() {
      this.$router.push({ name: "Edit" });
    },
    // oneoneone() {
    //   toggleSelection([tableData[1], tableData[2]]);
    // },
  },
  created() {
    this.$api.goodsList().then((res) => {
      this.$store.commit("goodsList", res.data.data);
      console.log(res.data.data.data);
      this.total = res.data.data.total;
      this.per_page = res.data.data.per_page;
      console.log(this.total, this.per_page);
      this.tableData = res.data.data.data;
      this.tableData.forEach((ele) => {
        // this.$set(ele.sku, "index", index);
        this.sku.push(ele.sku);
        // console.log(this.sku[index].index);
        // this.tableData2 = ele.sku;
      });
    });
  },
  mounted() {
    let that2 = this;
    // setTimeout(() => {
    //   let that = this;
    //   // that.tableData.forEach((ele,index) => {
    //   //   // console.log(ele.is_on_sale, index);
    //   //   if (ele.is_on_sale === 1) {
    //   //     console.log(that.tableData)
    //   //     that.$refs.multipleTable.toggleRowSelection(that.tableData[index]);
    //   //   }
    //   // });
    //   console.log(that.tableData[2].sku[1],that.tableData[2])
    //   // console.log(that.$refs.multipleTable.toggleRowSelection(that.tableData[2].sku[1]))
    //   that.sku.forEach((ele) => {
    //     // console.log(that.sku[index]);
    //     // console.log(that.$refs.multipleTable.toggleRowSelection(that.tableData[index]),index)
    //     // console.log(that.$refs.multipleTable.toggleRowSelection(that.sku[index]))
    //     // that.$refs.multipleTable.toggleRowSelection(that.tableData[1]);
    //     ele.forEach((item)=>{
    //       // console.log(item.is_on_sale,index)
    //       if(item.is_on_sale === 1){
    //         // console.log(ele[index])
    //         // console.log(that.sku[0][0])
    //         // that.$refs.multipleTable.toggleRowSelection(ele[index]);
    //         // that.$refs.multipleTable.toggleRowSelection(that.sku[0][0]);
    //         // that.$refs.multipleTable.toggleRowSelection(that.tableData[1]);
    //       }
    //     })
    //   });
    // }, 300);
    setTimeout(() => {
      console.log(
        that2.$refs.multipleTable.toggleRowSelection(that2.tableData[2])
      ); //外面的
      console.log(that2.tableData[2].sku[0]);
      console.log(
        that2.$refs.multipleTable.toggleRowSelection(that2.tableData[2].sku[0])
      ); //里面的
      // console.log(that2.$refs.multipleTable.toggleRowSelection(that2.tableData[2].sku[1]))
    }, 1000);
    setTimeout(() => {
      console.log(that2.tableData[2].sku[0]);
      // console.log(that2.$refs.multipleTable.toggleRowSelection())
      console.log(
        that2.$refs.multipleTable.toggleRowSelection(that2.tableData[2].sku[0])
      );
      // console.log(that2.$refs.multipleTable.toggleRowSelection(that2.tableData[2].sku[1]))
    }, 2000);
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