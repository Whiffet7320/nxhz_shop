<template>
  <div class="testBottom">
    <!-- <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="ID"> </el-table-column>
      <el-table-column prop="name" label="商品名称"> </el-table-column>
      <el-table-column prop="address" label="商品主图"> </el-table-column>
      <el-table-column prop="address2" label="分类"> </el-table-column>
      <el-table-column prop="address3" label="销售价"> </el-table-column>
      <el-table-column prop="address3" label="库存"> </el-table-column>
      <el-table-column type="selection" width="200"> </el-table-column>
      <el-table-column prop="address3" label="审核状态"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table> -->
    <el-table :data="tableData" style="width: 100%" ref="multipleTable">
      <el-table-column type="expand">
        <template>
          <!-- <el-form label-position="left" inline class="demo-table-expand"> -->
          <!-- <el-form-item label="商品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="所属店铺">
              <span>{{ props.row.shop }}</span>
            </el-form-item>
            <el-form-item label="商品 ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.shopId }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="商品描述">
              <span>{{ props.row.desc }}</span>
            </el-form-item> -->
          <el-table :data="sku[tableData[2].goods_id]" style="width: 100%" :show-header="false">
            <el-table-column prop="sku_id" label="ID"> </el-table-column>
            <el-table-column prop="name" label="商品名称"> </el-table-column>
            <el-table-column label="商品主图">
              <template slot-scope="scope">
                <img :src="scope.row.goods_img" style="height: 50px" />
              </template>
            </el-table-column>
            <el-table-column prop="address2" label="分类"> </el-table-column>
            <el-table-column prop="address3" label="销售价"> </el-table-column>
            <el-table-column prop="address3" label="库存"> </el-table-column>
            <el-table-column type="selection" width="200"> </el-table-column>
            <el-table-column prop="address3" label="审核状态">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <template>
                <el-button type="text" size="small">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
          <!-- </el-form> -->
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
        <template>
          <el-button
            type="text"
            size="small"
            @click="toggleSelection([tableData[1], tableData[2]])"
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
      sku:[]
    };
  },
  methods: {
    handleClick(row) {
      console.log(row);
      this.$store.commit("changeDetails", row);
      this.$router.push({ name: "details" });
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
    // oneoneone() {
    //   toggleSelection([tableData[1], tableData[2]]);
    // },
  },
  created() {
    this.$api.goodsList().then((res) => {
      console.log(res.data.data.data);
      this.tableData = res.data.data.data;
      this.tableData.forEach((ele,index) => {
        // console.log(ele.sku);
        this.$set(ele.sku,'index',index)
        this.sku.push(ele.sku)
        console.log(this.sku[index].index)
        // this.tableData2 = ele.sku;
      });
    });
  },
  mounted() {
    setTimeout(() => {
      this.tableData.forEach((ele, index) => {
        // console.log(ele.is_on_sale,index);
        this.$refs.multipleTable.toggleRowSelection(this.tableData[index]);
      });
    }, 300);
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