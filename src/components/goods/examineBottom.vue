<template>
  <div class="testBottom">
    <el-table :data="myTableData" style="width: 100%" ref="multipleTable">
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
              <el-table-column
                prop="sale_attr_name"
                :show-overflow-tooltip="true"
                label="商品名称"
              >
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
              <el-table-column
                label='<@spring.message "flowemptransfer.description"/>'
                class-name="column-bg-color-editable"
                width="100"
                show-overflow-tooltip
              >
                <template scope="scope">
                  <div class="input-box">
                    <el-input
                      size="small"
                      @blur="handleInputBlur"
                      v-model="scope.row.storage"
                    ></el-input>
                  </div>
                  <!-- <span>{{ scope.row.description }}</span> -->
                </template>
              </el-table-column>
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
    //单元格点击后，显示input，并让input 获取焦点
    // handleCellClick: function (row, column, cell) {
    //   emptransfer.addClass(cell, "current-cell");
    //   if (emptransfer.getChildElement(cell, 3) !== 0) {
    //     var _inputParentNode = emptransfer.getChildElement(cell, 3);
    //     if (
    //       _inputParentNode.hasChildNodes() &&
    //       _inputParentNode.childNodes.length > 2
    //     ) {
    //       var _inputNode = _inputParentNode.childNodes[2];
    //       if (_inputNode.tagName === "INPUT") {
    //         _inputNode.focus();
    //       }
    //     }
    //   }
    // },
    //input框失去焦点事件
    // handleInputBlur: function (event) {
    //   //当 input 失去焦点 时,input 切换为 span，并且让下方 表格消失（注意，与点击表格事件的执行顺序）
    //   var _event = event;
    //   setTimeout(function () {
    //     var _inputNode = _event.target;
    //     if (emptransfer.getParentElement(_inputNode, 4) !== 0) {
    //       var _cellNode = emptransfer.getParentElement(_inputNode, 4);
    //       emptransfer.removeClass(_cellNode, "current-cell");
    //       emptransfer.removeClass(_cellNode, "current-cell2");
    //     }
    //   }, 200);
    // },
    getData() {
      this.$api.goodsList().then((res) => {
        this.$store.commit("goodsList", res.data.data);
        // console.log(res.data.data.data);
        this.total = res.data.data.total;
        this.per_page = res.data.data.per_page;
        console.log(res.data.data.data.length, this.per_page);
        this.$store.commit("per_page", this.per_page);
        this.$store.commit("total", res.data.data.data.length);
        this.tableData = res.data.data.data;
        this.tableData = res.data.data.data.filter(
          (data) =>
            !this.mySearch ||
            data.goods_name.toLowerCase().includes(this.mySearch.toLowerCase())
        );
        this.$store.commit("total", this.tableData.length);
        this.myTableData = this.tableData.splice((this.myPageNum - 1) * 9, 9);
        console.log(this.tableData, this.myPageNum);
        this.tableData.forEach((ele) => {
          // this.$set(ele.sku, "index", index);
          this.sku.push(ele.sku);
          // console.log(this.sku[index].index);
          // this.tableData2 = ele.sku;
        });
      });
    },
    handleClick(row) {
      console.log(row);
      this.$store.commit("edit", row);
      this.$router.push({ name: "Edit" });
    },
    select() {
      this.myTableData.forEach((ele, index) => {
        // console.log(ele.is_on_sale, index);
        if (ele.is_on_sale === 1) {
          this.$refs.multipleTable.toggleRowSelection(this.myTableData[index]);
        }
      });
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
    "$store.state.search": function () {
      this.mySearch = this.$store.state.search;
    },
    "$store.state.pageNum": function () {
      // console.log(this.$store.state.pageNum)
      this.myPageNum = this.$store.state.pageNum;
      this.getData();
      setTimeout(() => {
        this.select();
      }, 300);
    },
  },
  mounted() {
    setTimeout(() => {
      this.select();
    }, 300);
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
    // setTimeout(() => {
    //   console.log(
    //     that2.$refs.multipleTable.toggleRowSelection(that2.tableData[2])
    //   ); //外面的
    //   console.log(that2.tableData[2].sku[0]);
    //   console.log(
    //     that2.$refs.multipleTable.toggleRowSelection(that2.tableData[2].sku[0])
    //   ); //里面的
    //   // console.log(that2.$refs.multipleTable.toggleRowSelection(that2.tableData[2].sku[1]))
    // }, 1000);
    // setTimeout(() => {
    //   console.log(that2.tableData[2].sku[0]);
    //   // console.log(that2.$refs.multipleTable.toggleRowSelection())
    //   console.log(
    //     that2.$refs.multipleTable.toggleRowSelection(that2.tableData[2].sku[0])
    //   );
    //   // console.log(that2.$refs.multipleTable.toggleRowSelection(that2.tableData[2].sku[1]))
    // }, 2000);
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