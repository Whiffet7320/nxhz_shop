<template>
  <div class="sell-contentTop">
    <div class="left">
      <span>商品列表</span>
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
        <el-form-item label="分类:" prop="region" class="region">
          <div class="block">
            <el-cascader
              v-model="selectValue"
              :options="myOptions"
              @change="handleChange"
              :props="{ checkStrictly: true }"
            ></el-cascader>
          </div>
        </el-form-item>

        <el-form-item label="关键字:" class="search">
          <el-input v-model="search" placeholder="请输入商品名称"></el-input>
        </el-form-item>

        <!-- <el-input v-model="search" size="mini" placeholder="输入关键字搜索" /> -->
        <el-form-item class="contentTop-btn">
          <el-button type="primary" @click="onSubmit" class="search"
            >搜索</el-button
          >
          <el-button class="reset" @click="resetForm('ruleForm')"
            >重置</el-button
          >
          <el-button type="success" class="toGrant" @click="toGrant"
            >新建</el-button
          >
        </el-form-item>
        <!-- </div> -->
      </el-form>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      search: "",
      ruleForm: {
        name: "",
        region: "",
        delivery: false,
        type: [],
        search: "",
      },
      value: [],
      myValue: [],
      myOptions: [],
      options: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致",
                },
                {
                  value: "fankui",
                  label: "反馈",
                },
                {
                  value: "xiaolv",
                  label: "效率",
                },
                {
                  value: "kekong",
                  label: "可控",
                },
              ],
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航",
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航",
                },
              ],
            },
          ],
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局",
                },
                {
                  value: "color",
                  label: "Color 色彩",
                },
                {
                  value: "typography",
                  label: "Typography 字体",
                },
                {
                  value: "icon",
                  label: "Icon 图标",
                },
                {
                  value: "button",
                  label: "Button 按钮",
                },
              ],
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框",
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框",
                },
                {
                  value: "input",
                  label: "Input 输入框",
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器",
                },
                {
                  value: "select",
                  label: "Select 选择器",
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器",
                },
                {
                  value: "switch",
                  label: "Switch 开关",
                },
                {
                  value: "slider",
                  label: "Slider 滑块",
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器",
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器",
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器",
                },
                {
                  value: "upload",
                  label: "Upload 上传",
                },
                {
                  value: "rate",
                  label: "Rate 评分",
                },
                {
                  value: "form",
                  label: "Form 表单",
                },
              ],
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格",
                },
                {
                  value: "tag",
                  label: "Tag 标签",
                },
                {
                  value: "progress",
                  label: "Progress 进度条",
                },
                {
                  value: "tree",
                  label: "Tree 树形控件",
                },
                {
                  value: "pagination",
                  label: "Pagination 分页",
                },
                {
                  value: "badge",
                  label: "Badge 标记",
                },
              ],
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告",
                },
                {
                  value: "loading",
                  label: "Loading 加载",
                },
                {
                  value: "message",
                  label: "Message 消息提示",
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框",
                },
                {
                  value: "notification",
                  label: "Notification 通知",
                },
              ],
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单",
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页",
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑",
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单",
                },
                {
                  value: "steps",
                  label: "Steps 步骤条",
                },
              ],
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框",
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示",
                },
                {
                  value: "popover",
                  label: "Popover 弹出框",
                },
                {
                  value: "card",
                  label: "Card 卡片",
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯",
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板",
                },
              ],
            },
          ],
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components",
            },
            {
              value: "sketch",
              label: "Sketch Templates",
            },
            {
              value: "jiaohu",
              label: "组件交互文档",
            },
          ],
        },
      ],
    };
  },
  computed: {
    ...mapState(["selectValue"]),
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      this.$store.commit("search", this.search);
      this.$store.commit("pageNum", 1);
      this.$store.commit("selectValue", this.myValue);
      // this.$router.go(0)
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.search = "";
      this.myValue = [];
      this.onSubmit();
    },
    toGrant() {
      //新建
      // this.$store.commit("edit", { sort: "0" });
      this.$store.commit("goodsId", ' ');
      this.$store.commit("nameSort", { nameF: "first", nameS: "second" });
      this.$router.push({ name: "Edit" });
    },
    handleChange(value) {
      console.log(value);
      this.myValue = value;
    },
  },
  created() {
    // this.$api.goodsList().then((res) => {
    //   console.log(res.data.data);
    // });
    this.$api.allList().then((res) => {
      console.log(res.data.data);
      this.myOptions = res.data.data;
      const arr = JSON.parse(
        JSON.stringify(this.myOptions)
          .replace(/cat_name/g, "label")
          .replace(/cat_id/g, "value")
          .replace(/child/g, "children")
      );
      // arr.child = JSON.parse(JSON.stringify(arr.child).replace(/child/g, 'children'))
      // arr.forEach(ele=>{
      //   // console.log(ele)
      //   const arr2 = JSON.parse(JSON.stringify(ele).replace(/child/g, 'children'))
      //     // console.log(arr2)
      //     ele = arr2
      //   ele.children.forEach(item=>{
      //     // console.log(item)
      //     // item.replace(/cat_name/g, 'value')
      //     const arr3 = JSON.parse(JSON.stringify(item).replace(/child/g, 'children'))
      //     // console.log(arr3)
      //     item = arr3
      //   })
      // })
      // arr.child.replace(/cat_name/g, 'value')

      // this.myOptions.forEach((ele,index)=>{
      //   // console.log(ele)
      //   console.log(this.options[index])
      //   if(this.options[index].label){
      //     this.options
      //   }
      //   this.options[index].label = ele.cat_name
      // })
      this.myOptions = arr;
      console.log(this.myOptions);
      console.log(this.myValue);
    });
  },
};
</script>
<style>
.sell-contentTop {
  display: flex;
  margin-left: 100px;
  margin-bottom: 40px;
}
.sell-contentTop .left {
  margin-top: 26px;
  display: flex;
  /* width: 300px; */
}
.sell-contentTop .left span {
  font-size: 40px;
  display: block;
  width: 200px;
}
.sell-contentTop .right {
  margin-top: 30px;
  margin-left: 30px;
}
.sell-contentTop .right .el-form {
  display: flex;
}
.sell-contentTop .right .el-form .region {
  display: flex;
}
.sell-contentTop .right .el-form .region .el-form-item__content {
  display: flex;
  /* flex-direction: column; */
}
.sell-contentTop .right .el-form .region .el-form-item__content {
  width: 230px;
}
.sell-contentTop .right .el-form .search .el-form-item__label {
  width: 62px !important;
}
.sell-contentTop .right .el-form .contentTop-btn {
  margin-left: 20px;
}
.sell-contentTop .right .operate-contentTop .right .phone {
  margin-left: 30px;
  display: flex;
  align-items: center;
}
.sell-contentTop .right .phone span {
  font-size: 14px;
  color: #606266;
  display: block;
  width: 108px;
}
.sell-contentTop .right .phone .el-input__inner {
  width: 190px;
}
.sell-contentTop .toGrant {
  margin-left: 40px;
}
</style>