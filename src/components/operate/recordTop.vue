<template>
  <div class="contentTop">
    <div class="left">
      <span>领取记录</span>
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
        <el-form-item label="领取状态:" prop="region" class="region">
          <el-select v-model="ruleForm.region" placeholder="已使用">
            <el-option label="已使用" value="fu"></el-option>
            <el-option label="未使用" value="fa"></el-option>
            <el-option label="已过期" value="shou"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="领取时间" required class="time">
          <el-col :span="12">
            <el-form-item prop="date1">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.date1"
                style="width: 100%"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="1">-</el-col>
          <el-col :span="10">
            <el-form-item prop="date2">
              <el-time-picker
                placeholder="选择时间"
                v-model="ruleForm.date2"
                style="width: 100%"
              ></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>

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
      <div class="phoneTime">
        <div class="phone">
          <span>搜索:</span>
          <el-input
            v-model="phoneInput"
            placeholder="用户手机号/订单号"
          ></el-input>
        </div>
        <div class="time">
          <div class="block">
            <span class="spanLeft">使用时间</span>
            <el-date-picker v-model="value1" type="date" placeholder="选择日期">
            </el-date-picker>
          </div>
          <div class="block">
            <span>-</span>
            <el-date-picker
              v-model="value2"
              align="right"
              type="date"
              placeholder="选择日期"
            >
            </el-date-picker>
          </div>
        </div>
      </div>
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
      value1: "",
      value2: "",
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.phoneInput = "";
      this.value1 = "";
      this.value2 = "";
    },
  },
};
</script>
<style>
.record-content .contentTop {
  display: flex;
  margin-left: 100px;
  margin-bottom: 40px;
}
.record-content .contentTop .left {
  margin-top: 26px;
  display: flex;
  /* width: 300px; */
}
.record-content .contentTop .left span {
  font-size: 40px;
  display: block;
  width: 160px;
}
.record-content .contentTop .right {
  margin-top: 30px;
  margin-left: 30px;
}
.record-content .contentTop .right .el-form .region .el-form-item__content{
  width: 178px;
}
.record-content .contentTop .right .el-form .time .el-form-item__content .el-form-item{
  width: 182px;
}
.record-content .contentTop .right .el-form .contentTop-btn{
  margin-left: 20px;
}
.record-content  .contentTop .right .phoneTime{
  display: flex;
}
.record-content  .contentTop .right .phoneTime .time{
  display: flex;
  /* margin-left: 14px; */
}
.record-content  .contentTop .right .phoneTime .time .block{
  display: flex;
  align-items: center;
  margin-right: 10px;
}
.record-content  .contentTop .right .phoneTime .time .block .spanLeft{
  font-size: 14px;
    color: #606266;
    margin-right: 20px;
    display: block;
    width: 60px;
    margin-left: 10px;
}
.record-content  .contentTop .right .phoneTime .time .block span{
  font-size: 14px;
    color: #606266;
    display: block;
    width: 30px;
}
.record-content  .contentTop .right .phoneTime .time .block .el-date-editor{
  width: 140px;
}
.record-content  .contentTop .right .phone {
  margin-left: 30px;
  display: flex;
  align-items: center;
}
.record-content  .contentTop .right .phone span {
  font-size: 14px;
  color: #606266;
  display: block;
  width: 108px;
}
.record-content  .contentTop .right .phone .el-input__inner {
  width: 180px;
}
</style>