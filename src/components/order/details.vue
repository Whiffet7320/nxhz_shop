<template>
  <div class="details-header">
    <div class="details">
      <div class="title">
        <p>订单详情页</p>
        <span @click="backTo">返回上一页</span>
      </div>
      <div class="middle">
        <p class="tit1">收货信息</p>
        <div class="twoBox">
          <div class="middle-left">
            <p class="tit">收货人姓名：</p>
            <p class="tit">联系电话：</p>
            <p class="tit">详细地址：</p>
          </div>
          <div class="middle-right">
            <p class="tit">{{ myOrder.consignee }}</p>
            <p class="tit">{{ myOrder.mobile }}</p>
            <p class="tit">{{ myOrder.address }}</p>
          </div>
        </div>
      </div>
      <div class="bottom">
        <p class="tit1">订单信息</p>
        <table>
          <thead class="top">
            <tr>
              <th class="no1">SKU名称</th>
              <th class="no2">销售价</th>
              <th class="no3">库存</th>
              <th class="no4">销售单位</th>
            </tr>
          </thead>
          <tbody class="bottom">
            <tr v-for="(ele, index) in myOrder.order_goods" :key="index">
              <td>{{ ele.goods_name }}</td>
              <td>{{ ele.shop_price }}</td>
              <td>{{ ele.buy_number }}</td>
              <td>{{ ele.goods_sku_name }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="footer">
        <div class="twoBox">
          <div class="footer-one">
            <p class="tit active">订单状态：</p>
            <p class="tit">订单编号：</p>
            <p class="tit">第三方流水号：</p>
            <p class="tit">支付方式：</p>
            <p class="tit">商家名称：</p>
            <p class="tit">下单时间：</p>
            <!-- <p class="tit">收货人姓名：</p> -->
          </div>
          <div class="footer-two">
            <p class="tit active">{{ details.myOrder_status }}</p>
            <p class="tit">{{ myOrder.order_sn }}</p>
            <p class="tit">{{ myOrder.trade_no }}</p>
            <p class="tit">{{ myOrder.myUserPayType }}</p>
            <p class="tit">{{ myOrder.shop_name }}</p>
            <p class="tit">{{ myOrder.add_time }}</p>
            <!-- <p class="tit">{{ twoarr[0].g }}</p> -->
          </div>
          <div class="footer-three">
            <p class="tit">商品总额：</p>
            <p class="tit">优惠券/抵扣卷：</p>
            <p class="tit">支付金额：</p>
          </div>
          <div class="footer-four">
            <p class="tit">{{ myOrder.total_amount }}</p>
            <p class="tit">{{ myOrder.preference_amount }}</p>
            <p class="tit">{{ myOrder.real_pay_amount }}</p>
          </div>
        </div>
      </div>
      <div class="below">
        <div class="below-one">
          <p class="tit">快递名称：</p>
          <p class="tit">快递单号：</p>
        </div>
        <div class="below-two">
          <p class="tit">{{ myOrder.order_express }}</p>
          <!-- myOrder.order_express 可能会null -->
          <!-- <p class="tit">{{myOrder.order_express.express_number}}</p> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      myOrder: {},
      twoarr: [
        {
          a: "待支付",
          b: "330022000000",
          c: "330300000330",
          d: "支付宝",
          e: "顺丰食品",
          f: "2020/10/20 09:00:00",
          g: "2020/10/20 09:00:00",
          h: "100.00",
          i: "20.00",
          m: "60.00",
        },
      ],
      arr: [
        {
          t1: "黄色",
          t2: "100.00",
          t3: "3",
          t4: "斤",
        },
        {
          t1: "绿色",
          t2: "888.00",
          t3: "31",
          t4: "吨",
        },
        {
          t1: "绿色",
          t2: "888.00",
          t3: "31",
          t4: "吨",
        },
        {
          t1: "绿色",
          t2: "888.00",
          t3: "31",
          t4: "吨",
        },
        {
          t1: "绿色",
          t2: "888.00",
          t3: "31",
          t4: "吨",
        },
        {
          t1: "绿色",
          t2: "888.00",
          t3: "31",
          t4: "吨",
        },
        {
          t1: "绿色",
          t2: "888.00",
          t3: "31",
          t4: "吨",
        },
        {
          t1: "绿色",
          t2: "888.00",
          t3: "31",
          t4: "吨",
        },
        {
          t1: "绿色",
          t2: "888.00",
          t3: "31",
          t4: "吨",
        },
        {
          t1: "绿色",
          t2: "888.00",
          t3: "31",
          t4: "吨",
        },
        {
          t1: "绿色",
          t2: "888.00",
          t3: "31",
          t4: "吨",
        },
        {
          t1: "绿色",
          t2: "888.00",
          t3: "31",
          t4: "吨",
        },
      ],
    };
  },
  computed: {
    ...mapState(["details"]),
  },
  created() {
    // console.log(this.details.);
    this.$api.orderInfo(this.details.order_id).then((res) => {
      console.log(res.data.data);
      this.myOrder = res.data.data;
      this.myOrder.add_time = this.formatDate(new Date(res.data.data.add_time))

      if (this.myOrder.user_pay_type == 0) {
        this.myOrder.myUserPayType = "未知";
      } else if (this.myOrder.user_pay_type == 1) {
        this.myOrder.myUserPayType = "支付宝";
      } else if (this.myOrder.user_pay_type == 2) {
        this.myOrder.myUserPayType = "微信";
      } else if (this.myOrder.user_pay_type == 3) {
        this.myOrder.myUserPayType = "余额";
      }
    });
  },
  methods: {
    formatDate(now) {
      var year = now.getFullYear(); //取得4位数的年份
      var month = now.getMonth() + 1; //取得日期中的月份，其中0表示1月，11表示12月
      var date = now.getDate(); //返回日期月份中的天数（1到31）
      var hour = now.getHours(); //返回日期中的小时数（0到23）
      var minute = now.getMinutes(); //返回日期中的分钟数（0到59）
      var second = now.getSeconds(); //返回日期中的秒数（0到59）
      return (
        year +
        "-" +
        month +
        "-" +
        date +
        " " +
        hour +
        ":" +
        minute +
        ":" +
        second
      );
    },
    backTo() {
      this.$router.push({ name: "order" });
    },
  },
};
</script>
<style scoped>
.details-header {
  min-height: 100%;
  /* height: 100%; */
  width: 100%;
  box-sizing: border-box;
}
.details-header .el-tabs--border-card {
  min-height: 100%;
}
.el-tabs {
  height: 100%;
  width: 100%;
}
.el-tabs__content {
  padding: 0px !important;
  /* height: calc(100% - 41px); */
  height: auto;
  overflow: hidden;
  position: relative;
  clear: both;
}
.el-tabs--border-card > .el-tabs__header {
  height: 40px;
}
.el-tabs--border-card {
  border: 0px;
  width: 100%;
}

.details-header .el-tab-pane {
  /* height: 1000px; */
  /* display: flex; */
  margin-left: 100px;
  justify-content: center;
}
.details {
  /* height: 500px; */
  width: 900px;
  /* position: absolute; */
  /* left: 50%; */
  /* transform: translateX(-50%); */
  /* padding-top: 70px; */
  /* border: 1px solid red; */
  /* overflow: scroll; */
  /* margin-left: 60px; */
  margin: 26px 0 100px 60px;
}
.details .title {
  width: 100%;
  height: 116px;
  /* border: 1px solid; */
  display: flex;
  margin-left: 20px;
}
.details .title p {
  font-size: 40px;
  margin-right: 54px;
  margin-left: 20px;
}
.details .title span {
  font-size: 14px;
  color: #74c853;
  margin-top: 18px;
  cursor: pointer;
  height: 23px;
}

.details .middle {
  width: 100%;
  height: 236px;
  /* border: 1px solid blue; */
}
.details .middle .twoBox {
  display: flex;
}
.details .middle p.tit1 {
  font-size: 26px;
  margin-right: 54px;
}
.details .middle .twoBox .middle-left {
  width: 150px;
  height: 150px;
  padding: 26px 0;
  border-bottom: 1px solid #bbbbbb;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.details .middle .twoBox .middle-right {
  width: calc(900px - 150px);
  height: 150px;
  padding: 26px 0;
  border-bottom: 1px solid #bbbbbb;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.details .bottom {
  width: 100%;
  /* height: 500px; */
  /* border: 1px solid palevioletred; */
  /* padding-top: 38px; */
}
.details .bottom p.tit1 {
  font-size: 26px;
  margin-right: 54px;
  padding: 38px 0;
  width: 100%;
  /* border: 1px solid greenyellow; */
}

.details table {
  width: 100%;
  text-align: center;
  border-spacing: 0;
  border-collapse: collapse;
}
.details table .top {
  background-color: #e8e8e8;
  color: #000;
}
.details table .bottom {
  background-color: #fff;
}
.details table .bottom td {
  border: 1px solid;
  /* background-color: rgba(245, 247, 250, 0.8); */
}
.details table {
  font-size: 14px;
  /* height: 36px; */
  line-height: 20px;
}
.details table .bottom tr {
  height: 40px;
}
.details table .bottom tr td {
  padding: 5px;
}
.details table .top tr {
  height: 40px;
}
.details table .top th {
  border: 1px solid #000;
}
.details table .top .no1 {
  width: 25%;
}
.details table .top .no2 {
  width: 25%;
}
.details table .top .no3 {
  width: 25%;
}
.details table .top .no4 {
  width: 25%;
}

.details .footer {
  margin-top: 50px;
  width: 100%;
  /* height: 236px; */
  border-bottom: 1px solid #bbbbbb;
}
.details .footer .twoBox {
  display: flex;
}

.details .footer .twoBox .footer-one,
.details .footer .twoBox .footer-two,
.details .footer .twoBox .footer-three,
.details .footer .twoBox .footer-four {
  height: 350px;
  padding: 26px 0;
  /* border-bottom: 1px solid #bbbbbb; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.details .footer .twoBox .footer-one {
  width: 150px;
}

.details .footer .twoBox .footer-three {
  padding-left: 120px;
  height: 150px;
  width: 150px;
}
.details .footer .twoBox .footer-four {
  height: 150px;
}
.details .footer .twoBox .active {
  color: #5394ff;
}

.details .below {
  display: flex;
  margin-top: 32px;
}
.details .below .below-one,
.details .below .below-two {
  height: 100px;
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>