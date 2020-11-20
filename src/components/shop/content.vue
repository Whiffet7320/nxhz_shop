<template>
  <el-form ref="form" :model="form" label-width="80px" class="shop-form">
    <div class="shop-formtwo">
      <div class="btn-title">
        <h1 class="shop-title">商铺信息</h1>
        <!-- 弹窗按钮 -->
        <el-button
          type="primary"
          class="myBtn"
          @click="centerDialogVisible = true"
          >修改密码</el-button
        >
      </div>
      <el-form-item label="店铺id :">
        <el-input :disabled="true" :placeholder="data.shop_id"></el-input>
      </el-form-item>
      <el-form-item label="店铺logo :">
        <el-image :src="data.shop_logo"> </el-image>
      </el-form-item>
      <el-form-item label="店铺实景图 :">
        <el-image :src="data.shop_real_pic"> </el-image>
      </el-form-item>
      <el-form-item label="APP店铺背景图 :">
        <el-image :src="data.shop_head_picture"> </el-image>
      </el-form-item>
      <el-form-item label="店铺名称 :">
        <el-input :disabled="true" :placeholder="data.shop_name"></el-input>
      </el-form-item>
      <!-- <el-form-item label="店铺图片 :">
        <el-image :src="data.shop_logo"> </el-image>
      </el-form-item> -->
      <el-form-item label="店铺类型 :">
        <el-input
          :disabled="true"
          :placeholder="data.category_id == 0 ? '入驻商家' : '自营商家'"
        ></el-input>
      </el-form-item>
      <el-form-item label="店铺状态 :">
        <el-input
          :disabled="true"
          :placeholder="data.category_id == 0 ? '禁用' : '正常'"
        ></el-input>
      </el-form-item>
      <el-form-item label="商家简介描述 :">
        <el-input
          type="textarea"
          :disabled="true"
          :autosize="{ minRows: 2, maxRows: 4 }"
          :placeholder="data.description"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="月销量 :">
        <el-input :disabled="true" :placeholder="data.month_sale_number"></el-input>
      </el-form-item>
      <el-form-item label="总销量 :">
        <el-input :disabled="true" :placeholder="data.sale_number"></el-input>
      </el-form-item>
      <el-form-item label="评分 :">
        <el-input :disabled="true" :placeholder="data.evaluate"></el-input>
      </el-form-item>

      <el-form-item label="联系人 :">
        <el-input :disabled="true" :placeholder="data.contacts_name"></el-input>
      </el-form-item>

      <el-form-item label="联系电话 :">
        <el-input
          :disabled="true"
          :placeholder="data.contact_number"
        ></el-input>
      </el-form-item>

      <el-form-item label="身份证号码 :">
        <el-input :disabled="true" :placeholder="data.idcard"></el-input>
      </el-form-item>
      <el-form-item label="身份证正面 :">
        <el-image :src="data.idcard_up"> </el-image>
      </el-form-item>
      <el-form-item label="身份证反面 :">
        <el-image :src="data.idcard_down"> </el-image>
      </el-form-item>
      <el-form-item label="身份证地址 :">
        <el-input :disabled="true" :placeholder="data.address"></el-input>
      </el-form-item>

      <el-form-item label="店铺地址 :">
        <el-input :disabled="true" :placeholder="data.shop_address"></el-input>
      </el-form-item>
    </div>
    <!-- 弹窗 -->
    <el-dialog
      title="修改密码"
      :visible.sync="centerDialogVisible"
      width="26%"
      center
    >
      <!-- <span>需要注意的是内容是默认不居中的</span> -->
      <!-- <span>旧密码：</span>
      <el-input placeholder="请输入内容" v-model="input" clearable> </el-input>
      <span>新密码：</span>
      <el-input placeholder="请输入内容" v-model="input" clearable> </el-input> -->

      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="旧密码" prop="old">
          <el-input v-model="ruleForm.old"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="new">
          <el-input v-model="ruleForm.new"></el-input>
        </el-form-item>
        <el-form-item class="modal-footerBtn">
          <el-button type="primary" @click="submitForm('ruleForm')"
            >保存</el-button
          >
          <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
        </el-form-item>
      </el-form>

      <!-- <span slot="footer" class="footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false"
          >确 定</el-button
        >
      </span> -->
    </el-dialog>
  </el-form>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      data: {},
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
    ...mapState(["user"]),
  },
  created() {
    this.$api
      .info()
      .then((res) => {
        console.log(res.data.data);
        this.data = res.data.data;
      })
      .catch((data) => {
        console.log(data);
      });
  },
  methods: {
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
.el-tabs__content {
  width: 100%;
  height: 100%;
}
.shop-formtwo {
  height: 100%;
  /* width: 600px; */
  /* position: absolute;
  top: 100px;
  left: 50%; */
  /* transform: translateY(10%); */
  margin-top: 140px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
}
.shop-formtwo .el-form-item__label {
  width: 120px !important;
}
.btn-title {
  /* display: flex; */
  position: relative;
  margin-left: -50px;
  margin-bottom: 46px;
  width: 560px;
}
.shop-title {
  /* position: absolute;
  top: 50%; */
  transform: translateY(-50%);
  font-size: 40px;
}
.myBtn {
  height: 30px;
  line-height: 6px;
  position: absolute;
  top: 14%;
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
</style>