<template>
  <div class="contentBotton">
    <table>
      <thead class="top">
        <tr>
          <th class="no1">订单号</th>
          <th class="no2">手机号</th>
          <th class="no3">商品信息</th>
          <th class="no4">商家名称</th>
          <th class="no5">支付金额</th>
          <th class="no6">订单状态</th>
          <th class="no7">操作</th>
        </tr>
      </thead>
      <tbody class="bottom">
        <tr v-for="(ele, index) in tableData" :key="index">
          <td>{{ ele.date }}</td>
          <td>{{ ele.name }}</td>
          <td>{{ ele.address }}</td>
          <td>{{ ele.address2 }}</td>
          <td>{{ ele.address3 }}</td>
          <td>{{ ele.address4 }}</td>
          <td>
            <button class="btn edit" @click="details(ele)">详情</button>
            <!-- <router-link :to="{ name: 'details'}" tag="button" class="btn edit" >详情</router-link> -->
            <button
              v-if="ele.address4 == '待发货'"
              class="btn del"
              @click="deleteStu(ele)"
            >
              发货
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <el-pagination background layout="prev, pager, next" :total="1000">
    </el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "陈奕迅",
          name: "13736795777",
          address: "上海市普陀区金沙江路 1519 弄",
          address2: "韵丰食品123",
          address3: "8888.88",
          address4: "待发货",
        },
        {
          date: "XXXXXXXXXX",
          name: "13736795777",
          address: "8888.88",
          address2: "韵丰食品123",
          address3: "8888.88",
          address4: "待发货",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          address2: "韵丰食品",
          address3: "8888.88",
          address4: "待发货",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          address2: "韵丰食品",
          address3: "8888.88",
          address4: "交易完成",
        },
        {
          date: "陈奕迅",
          name: "13736795777",
          address: "上海市普陀区金沙江路 1519 弄",
          address2: "韵丰食品123",
          address3: "8888.88",
          address4: "待发货",
        },
        {
          date: "XXXXXXXXXX",
          name: "13736795777",
          address: "8888.88",
          address2: "韵丰食品123",
          address3: "8888.88",
          address4: "待发货",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          address2: "韵丰食品",
          address3: "8888.88",
          address4: "待发货",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          address2: "韵丰食品",
          address3: "8888.88",
          address4: "交易完成",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          address2: "韵丰食品",
          address3: "8888.88",
          address4: "待发货",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          address2: "韵丰食品",
          address3: "8888.88",
          address4: "交易完成",
        },
      ],
    };
  },
  methods: {
    details(ele) {
      this.$store.commit("changeDetails", ele);
      this.$router.push({ name: "details" });
    },
  },
};
</script>
<style>
.contentBotton {
  position: absolute;
  /* height: calc(100% - 2px); */
  width: 900px;
  border: 1px solid red;
  top: 230px;
  left: 50%;
  transform: translateX(-50%);
}

.contentBotton table {
  width: 100%;
  text-align: center;
}
.contentBotton table .top {
  background-color: #e3e8ee;
  color: #646987;
}
.contentBotton table .bottom {
  background-color: #fff;
}
.contentBotton table .bottom td {
  /* border: 1px solid; */
  background-color: rgba(245, 247, 250, 0.8);
}
.contentBotton table {
  font-size: 14px;
  /* height: 36px; */
  line-height: 20px;
}
.contentBotton table .bottom tr {
  height: 40px;
}
.contentBotton table .bottom tr td {
  padding: 5px;
}
.contentBotton table .top tr {
  height: 40px;
}
.contentBotton table .top .no1 {
  width: 15%;
}
.contentBotton table .top .no2 {
  width: 12%;
}
.contentBotton table .top .no3 {
  width: 20%;
}
.contentBotton table .top .no4 {
  width: 18%;
}
.contentBotton table .top .no5 {
  width: 10%;
}
.contentBotton table .top .no6 {
  width: 10%;
}
.contentBotton table .top .no7 {
  width: 15%;
}
.contentBotton table .btn {
  border: none;
  padding: 4px 16px;
  color: #fff;
  font-size: 12px;
  margin: 0px 2px;
}
.contentBotton table .btn.edit {
  color: #7cbf61;
  background-color: #dbeed3;
  cursor: pointer;
}
/* .contentBotton table .btn.edit:hover{
    background-color: #255625;
    color: #fff;
} */
.contentBotton table .btn.del {
  background-color: #5fa838;
  color: #fff;
  cursor: pointer;
}
/* .contentBotton table .btn.del:hover{
    background-color: #c9302c
} */

.el-pagination.is-background{
  float: right;
  margin-top: 16%;
}
</style>