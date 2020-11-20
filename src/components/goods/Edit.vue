<template>
  <el-form ref="form" :model="form" label-width="80px" class="shop-form" v-loading="loading">
    <div class="edit-formtwo">
      <div class="title">
        <p>订单详情页</p>
        <span @click="backTo">返回上一页</span>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="商品详情" :name="nameSort.nameF">
          <div class="from">
            <el-form-item label="商品名称 :">
              <el-input
                :placeholder="edit.goods_name"
                v-model="goods_name"
              ></el-input>
            </el-form-item>
            <el-form-item label="商品货号 :">
              <el-input
                :placeholder="edit.goods_id"
                v-model="goods_id"
                :disabled="true"
              ></el-input>
            </el-form-item>
            <el-form-item label="商品主图 :" class="myImg">
              <el-image :src="edit.goods_img" v-model="goods_img"> </el-image>

              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="" />
              </el-dialog>
              <!--  -->
            </el-form-item>
            <el-form-item label="商品轮播图 :">
              <el-image
                v-for="(ele, index) in edit.goods_images"
                :key="index"
                :src="ele.image_path"
                v-model="goods_img"
              >
              </el-image>
            </el-form-item>
            <el-form-item label="分类:" prop="region" class="region">
              <div class="block">
                <el-cascader
                  v-model="value"
                  :placeholder="value"
                  :options="myOptions2"
                  :props="{ checkStrictly: true }"
                  @change="handleChange"
                ></el-cascader>
              </div>
            </el-form-item>
            <!-- <el-form-item label="分类 :">
              <el-input :placeholder="edit.value" v-model="value"></el-input>
            </el-form-item> -->
            <el-form-item label="商品详情 :" class="inputDetails">
              <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4 }"
                :placeholder="edit.content"
                v-model="content"
                v-html="content"
              >
              </el-input>
            </el-form-item>
            <el-form-item label="排序 :">
              <el-input :placeholder="edit.sort" v-model="sort"></el-input>
            </el-form-item>
            <el-form-item label="是否上架 :">
              <!-- <el-input
                :disabled="true"
                :placeholder="edit.is_on_sale == 1 ? '上架' : '下架'"
                :v-model="is_on_sale == 1 ? '上架' : '下架'"
              ></el-input> -->
              <el-radio v-model="is_on_sale" :label="1"
                >上架</el-radio
              >
              <el-radio v-model="is_on_sale" :label="0"
                >下架</el-radio
              >
            </el-form-item>
            <!-- <el-form-item label="关联店铺 :">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item> -->
            <el-button type="primary" @click="preservation">保存</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="SKU设置" :name="nameSort.nameS">
          <el-table :data="skuList" style="width: 100%">
            <!-- <el-table-column prop="sale_attr_name" label="SKU Id">
              <template slot-scope="scope">
                <el-input v-model="scope.row.sku_id" placeholder=""></el-input>
              </template>
            </el-table-column> -->
            <el-table-column prop="sale_attr_name" label="SKU名称">
              <template slot-scope="scope">
                <el-input
                  v-model="scope.row.sale_attr_name"
                  placeholder=""
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="库存">
              <template slot-scope="scope">
                <el-input v-model="scope.row.storage" placeholder=""></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="address" label="成本价">
              <template slot-scope="scope">
                <el-input
                  v-model="scope.row.shop_price"
                  placeholder=""
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="address" label="销售价">
              <template slot-scope="scope">
                <el-input
                  v-model="scope.row.shop_price"
                  placeholder=""
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="address" label="SKU图">
              <template slot-scope="scope">
                <el-image
                  style="width: 60px; height: 60px"
                  :src="scope.row.goods_img"
                ></el-image>
              </template>
            </el-table-column>
            <el-table-column prop="address" label="销售单位" width="200">
              <template slot-scope="scope">
                <el-input v-model="scope.row.unit" placeholder=""></el-input>
              </template>
            </el-table-column>
            <el-table-column
              label="是否上架"
              class-name="column-bg-color-editable"
              show-overflow-tooltip
            >
              <template slot-scope="scope">
                <el-radio
                  v-model="scope.row.is_on_sale"
                  :label="1"
                  >上架</el-radio
                >
                <el-radio
                  v-model="scope.row.is_on_sale"
                  :label="0"
                  >下架</el-radio
                >
              </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="120">
              <template slot-scope="scope">
                <el-button
                  @click="SKUhandleClick(scope)"
                  type="text"
                  size="small"
                  >保存</el-button
                >
                <el-button type="text" size="small" @click="deleteSku(scope)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <el-button
            type="primary"
            icon="el-icon-circle-plus-outline"
            class="addBtn"
            @click="addRow(skuList)"
            circle
          ></el-button>
          <!-- <el-button type="primary" class="addBtn" @click="addRow(skuList)">新增</el-button> -->
        </el-tab-pane>
      </el-tabs>
    </div>
  </el-form>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      loading: true,
      radio:1,
      skuList: [],
      cyy: "123",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
      ],
      //
      dialogImageUrl: "",
      dialogVisible: false, //商品主图
      myOptions2: [],
      value2: "",
      edit: "",
      value: "",
      myOptions: [],
      goods_name: "",
      goods_id: "",
      is_on_sale: 1,
      goods_img: "",
      content: "",
      cat1_id: "",
      cat2_id: "",
      cat3_id: "",
      goods_images: [],
      sort: "",
      //
      data: {},
      activeName: "first",
      form: {
        name: "",
        region: "",
      },
      url:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
      myPlaceholder: "温州xx产品有限公司",
      centerDialogVisible: false,
      input: "",
      ruleForm: {
        old: "",
        new: "",
      },
      rules: {
        old: [
          { required: true, message: "请输入正确的旧密码", trigger: "blur" },
          {
            min: 6,
            max: 16,
            message: "长度在 6 到 16 个字符",
            trigger: "blur",
          },
        ],
        new: [
          { required: true, message: "请输入正确的新密码", trigger: "blur" },
          {
            min: 6,
            max: 16,
            message: "长度在 6 到 16 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  components: {},
  computed: {
    ...mapState(["goodsId", "nameSort"]),
  },
  created() {
    this.getData();
  },
  methods: {
    // 操作
    addRow(tableData) {
      tableData.push({});
    },
    deleteSku(scope) {
      // 删除按钮
      const skuObj = {
        sku_id: scope.row.sku_id,
        status: 0, //0删除
      };
      this.$api.skuChange(skuObj).then((res) => {
        console.log(res);
      });
      console.log(scope.$index);
      this.skuList.splice(scope.$index, 1);
      console.log(this.skuList);
    },
    SKUhandleClick(scope) {
      //保存按钮
      if (this.skuStorageArr[scope.$index]) {
        console.log(scope.row, scope.$index, this.skuStorageArr);
        let num = this.skuStorageArr[scope.$index].toString();
        let newStorage = (scope.row.storage - num).toString();
        console.log(num, newStorage);
        let myNewStorage = null;
        if (newStorage > 0) {
          myNewStorage = `+${newStorage}`;
          console.log(myNewStorage);
        } else {
          myNewStorage = newStorage;
        }
        // const skuObj = {
        //   sku_id: scope.row.sku_id,
        //   is_on_sale: "",
        //   storage: myNewStorage, //库存，传修改值。例如增加了就传 +20  。减少就传-20
        // };
        // this.$api.skuChange(skuObj).then((res) => {
        //   console.log(res);
        // });
        //
        // 编辑规格
        console.log(scope.row);
        const skuNewObj2 = {
          sku_id: scope.row.sku_id,
          // goods_id: this.goods_id, //添加必须传
          sale_attr_name: scope.row.sale_attr_name,
          // prime_cost:,
          // market_price:,
          shop_price: scope.row.shop_price,
          // goods_img:,
          // weight:,
          storage: myNewStorage,
          unit: scope.row.unit,
          is_on_sale: scope.row.is_on_sale,
        };
        this.$api.skuEdit(skuNewObj2).then((res) => {
          console.log(res);
        });
      } else {
        // 添加
        console.log(scope.row);
        const skuNewObj = {
          // sku_id:scope.row.sku_id,
          goods_id: this.goods_id, //添加必须传
          sale_attr_name: scope.row.sale_attr_name,
          // prime_cost:,
          // market_price:,
          shop_price: scope.row.shop_price,
          // goods_img:,
          // weight:,
          storage: scope.row.storage,
          unit: scope.row.unit,
          is_on_sale: scope.row.is_on_sale,
        };
        this.$api.skuEdit(skuNewObj).then((res) => {
          console.log(res);
        });
      }
      this.$message({
        message: "已保存",
        type: "success",
      });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    getData() {
      this.loading = true;
      this.$api.skuList(this.goodsId).then((res) => {
        //获取商品规格列表sku
        console.log(res.data.data, "sku");
        this.skuList = res.data.data;
        console.log(this.skuList);
        this.skuStorageArr = [];
        this.skuList.forEach((ele) => {
          // console.log(ele.storage)
          this.skuStorageArr.push(ele.storage);
        });
      });
      this.$api.allList().then((res) => {
        console.log(res.data.data);
        this.myOptions2 = res.data.data;
        const arr = JSON.parse(
          JSON.stringify(this.myOptions2)
            .replace(/cat_name/g, "label")
            .replace(/cat_id/g, "value")
            .replace(/child/g, "children")
        );
        this.myOptions2 = arr;
        console.log(this.myOptions2);
      });
      this.$api.goodsInfo(this.goodsId).then((res) => {
        console.log(res.data.data);
        this.edit = res.data.data;
        // this.value = this.edit.cat1
        console.log(this.edit);
        // this.cat1_id = this.edit.cat1_id;
        // this.cat2_id = this.edit.cat2_id;
        // this.cat3_id = this.edit.cat3_id;
        const arr = [],
          arr2 = [],
          arr3 = [];
        const obj = {};
        obj.label = this.edit.cat1.cat_name;
        obj.value = this.edit.cat1.cat_id;
        arr.push(obj);
        const obj2 = JSON.parse(
          JSON.stringify(this.edit.cat2)
            .replace(/cat_name/g, "label")
            .replace(/cat_id/g, "value")
        );
        arr2.push(obj2);
        obj.children = arr2;
        this.myOptions = arr;
        if(this.edit.cat2){
           this.value =
            this.myOptions[0].label + "/" + this.myOptions[0].children[0].label;
        }
        else if (this.edit.cat3) {
          console.log(11111111);
          const obj3 = JSON.parse(
            JSON.stringify(this.edit.cat3)
              .replace(/cat_name/g, "label")
              .replace(/cat_id/g, "value")
          );
          obj2.children = arr3;
          arr3.push(obj3);
          this.value =
            this.myOptions[0].label +
            "/" +
            this.myOptions[0].children[0].label +
            "/" +
            this.myOptions[0].children[0].children[0].label;
        } else {
          this.value =
            this.myOptions[0].label
        }
        console.log(this.myOptions);

        this.goods_name = this.edit.goods_name;
        this.goods_id = this.edit.goods_id;
        this.is_on_sale = this.edit.is_on_sale;
        this.goods_img = this.edit.goods_img;
        this.content = this.edit.content;
        this.sort = this.edit.sort;
        // this.cat1_id = this.edit.cat1_id;
        // this.cat2_id = this.edit.cat2_id;
        // this.cat3_id = this.edit.cat3_id;

        this.goods_images = this.edit.goods_images;
        this.loading = false
      });
    },
    // 保存按钮
    preservation() {
      if (!this.cat2_id) {
        this.cat2_id = 0;
        this.cat3_id = 0;
      } else if (!this.cat3_id) {
        this.cat3_id = 0;
      }
      let myObj = {
        goods_name: this.goods_name,
        goods_id: this.goods_id,
        is_on_sale: this.is_on_sale,
        goods_img: this.goods_img,
        content: this.content,
        cat1_id: this.cat1_id,
        cat2_id: this.cat2_id,
        cat3_id: this.cat3_id,
        goods_images: this.goods_images,
      };
      console.log(myObj);
      this.$api.goodsEdit(myObj).then((res) => {
        console.log(res.data);
      });
      // this.getData()
      this.$router.push({ name: "sell" });
    },
    handleChange(value) {
      console.log(value);
      this.cat1_id = value[0];
      this.cat2_id = value[1];
      this.cat3_id = value[2];
      this.edit.cat1_id = this.cat1_id;
      this.edit.cat2_id = this.cat2_id;
      this.edit.cat3_id = this.cat3_id;
    },
    backTo() {
      this.$router.push({ name: "sell" });
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    onSubmit() {
      console.log("submit!");
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
          this.centerDialogVisible = false;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.centerDialogVisible = false;
    },
  },
};
</script>
<style>
.inputDetails .el-form-item__content {
  width: 1000px;
}
.el-textarea p {
  width: 100%;
}
.el-textarea p img {
  width: 100%;
}
.cell.el-tooltip .el-radio {
  width: 60px !important;
}
.shop-form .addBtn {
  margin-top: 20px;
  /* float: right; */
  margin-left: 20px;
  height: 32px;
  width: 32px;
  position: relative;
}
.el-icon-circle-plus-outline {
  font-size: 40px;
  position: absolute;
  top: -4px;
  left: -4px;
}
.shop-form .cell {
  width: 70%;
}
.myImg .el-form-item__content {
  display: flex;
}
.shop-form .el-tabs__content {
  /* width: 100%;
  height: 100%; */
  margin-right: 60px;
}
.shop-form .el-form-item__content {
  width: 428px !important;
}
.edit-formtwo {
  /* height: 100%; */
  /* width: 600px; */
  /* position: absolute;
  top: 100px;
  left: 50%; */
  /* transform: translateY(10%); */
  /* margin-top: 140px; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  /* margin-left: 100px;
  margin-bottom: 100px; */
  margin: 26px 0 100px 60px;
}
.edit-formtwo .el-form-item__label {
  width: 120px !important;
}
.edit-formtwo .title {
  width: 100%;
  height: 116px;
  /* border: 1px solid; */
  display: flex;
  margin-left: 20px;
}
.edit-formtwo .title p {
  font-size: 40px;
  margin-right: 54px;
  margin-left: 20px;
}
.edit-formtwo .title span {
  font-size: 14px;
  color: #74c853;
  margin-top: 18px;
  cursor: pointer;
  height: 23px;
}
.btn-title {
  display: flex;
  position: relative;
  /* margin-left: -50px; */
  margin-bottom: 46px;
  margin-top: 26px;
  width: 560px;
  align-items: center;
}
.btn-title .backto {
  font-size: 14px;
  color: #74c853;
  margin-top: 18px;
  cursor: pointer;
  height: 23px;
}
.shop-title {
  /* position: absolute;
  top: 50%; */
  /* transform: translateY(-50%); */
  font-size: 40px;
}

.myBtn {
  /* height: 30px;
  line-height: 6px; */
  position: absolute;
  top: 50%;
  left: 33%;
  margin-left: 20px;
  transform: translateY(-50%);
}
.shop-form .el-form-item {
  display: flex;
}
.shop-form .el-form-item__content {
  width: 320px;
  margin-left: 30px !important;
}
.shop-form {
  /* padding-bottom: 100px; */
}
.el-image {
  width: 140px;
  height: 140px;
}
.el-input__inner {
  /* width: 60%; */
}
.demo-ruleForm {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.demo-ruleForm .el-form-item.is-required {
  /* transform: translateX(6%); */
}
.el-form-item.modal-footerBtn {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.el-form-item.modal-footerBtn .el-form-item__content {
  /* display: flex !important;
  justify-content: space-between;
  margin-left: 0px !important; */
}
.el-form-item.modal-footerBtn
  .el-form-item__content
  .el-button.el-button--primary {
  position: absolute;
  right: 10%;
}
.el-dialog.el-dialog--center {
  height: 300px;
}
/* .el-form.shop-form{
  display: flex;
  height: 1000px;
}
.shop-header .el-tabs__content{
  height: 1000px;
  display: flex;
}
.shop-header .el-tab-pane{
  height: 100%;
} */
.el-tabs__nav-wrap.is-top {
  width: 152px;
}
</style>