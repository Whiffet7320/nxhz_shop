<template>
  <div class="contentTop">
    <div class="left">
      <span>优惠券列表</span>
    </div>
    <div class="right">
      <el-form
        :model="ruleForm"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm demo-form-inline contentTop-form"
        :inline="true"
      >
        <!-- <div class="inline-box"> -->
        <el-form-item label="订单状态:" prop="region">
          <el-select v-model="ruleForm.region" placeholder="订单状态">
            <el-option label="待付款" value="fu"></el-option>
            <el-option label="待发货" value="fa"></el-option>
            <el-option label="待收货" value="shou"></el-option>
            <el-option label="待评价" value="ping"></el-option>
            <el-option label="交易完成" value="wancheng"></el-option>
            <el-option label="交易关闭" value="guanbi"></el-option>
          </el-select>
        </el-form-item>
      <div class="phone">
        <span>搜索:</span>
        <el-input
          v-model="phoneInput"
          placeholder="用户手机号/订单号"
        ></el-input>
      </div>
        <el-form-item class="contentTop-btn">
          <el-button type="primary" @click="onSubmit" class="search"
            >搜索</el-button
          >
          <el-button class="reset" @click="resetForm('ruleForm')"
            >重置</el-button
          >
        </el-form-item>
        <!-- </div> -->
      </el-form>
      <!-- <div class="phone">
        <span>搜索:</span>
        <el-input
          v-model="phoneInput"
          placeholder="用户手机号/订单号"
        ></el-input>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      phoneInput: "",
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style>
.phone {
  display: flex;
  /* align-items: center; */
  margin-top: 6px;
}
.phone span {
  color: #606266;
  font-size: 14px;
  display: block;
  width: 50px;
  line-height: 30px;
}
.phone .el-input__inner {
  width: 200px;
  height: 30px;
}
.contentTop {
  height: 160px;
  /* border: 1px solid; */
  width: 900px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding-top: 70px;
  display: flex;
}
.contentTop .left {
  height: 100%;
  width: 200px;
  /* border: 1px solid blue; */
}
.contentTop .left span {
  font-size: 30px;
}
.contentTop .right {
  height: 100%;
  width: 700px;
  /* border: 1px solid blue; */
}
.contentTop .right .el-form.demo-form-inline.el-form--inline {
  display: flex;
}
.contentTop .right .el-form.demo-form-inline.el-form--inline .el-form-item {
  display: flex;
  justify-content: start;
  /* margin-right: 0px !important; */
}
.contentTop
  .right
  .el-form.demo-form-inline.el-form--inline
  .el-form-item
  .el-form-item__label {
  margin-left: -30px;
}
.contentTop
  .right
  .el-form.demo-form-inline.el-form--inline
  .el-form-item
  .el-input.el-input--suffix {
  width: 92%;
}
.contentTop .right .el-input.el-input--suffix .el-input__inner {
  width: 100%;
  height: 30px;
}
.el-select-dropdown.el-popper {
  width: 110px;
}
.contentTop-form .el-scrollbar__view.el-select-dropdown__list {
  width: 50%;
}
.contentTop
  .right
  .el-form.demo-form-inline.el-form--inline
  .el-form-item
  .el-form-item__label {
  margin-right: 0px;
}
.contentTop .right .el-select {
  width: 110px;
}
.contentTop-btn .el-form-item__content {
  display: flex;
  align-items: center;
}
.phone.el-form-item {
  display: block !important;
}
.search.el-button--primary {
  color: #fff;
  background-color: #7cbf61;
  border-color: #7cbf61;
  height: 28px;
  padding-top: 7px;
  border-radius: 0px;
  font-size: 12px;
}
.reset.el-button--default {
  color: #a0a89d;
  background-color: #fff;
  border-color: #a0a89d;
  height: 28px;
  padding-top: 7px;
  border-radius: 0px;
  font-size: 12px;
}
.contentTop .time {
  /* margin-left: 10px; */
}
.contentTop .time .el-form-item__content {
  width: 280px;
}
.contentTop .time .el-form-item__content .el-date-editor.el-input {
  width: 102% !important;
}
.contentTop .el-form-item.time.is-required .el-form-item__label::before {
  content: "" !important;
}
.contentTop .el-date-editor--time .el-input__inner {
  width: 108% !important;
}
</style>