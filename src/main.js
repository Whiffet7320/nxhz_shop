import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import api from './api/index'
import store from './store'
import axios from 'axios'
// import VueNativeSock from 'vue-native-websocket'

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$api = api

Vue.prototype.$myAxios = axios
Vue.prototype.$bus = new Vue()

//进入页面创建websocket连接
function initWebSocket() {
  console.log(this)
  var _this;
  if(!this){
    _this = Vue.prototype
  }else{
    _this = this;
  }
  // console.log(_this)
  
  //判断页面有没有存在websocket连接
  if (window.WebSocket) {
    let ws = new WebSocket("ws://192.168.2.200:8282");
    console.log(ws)
    _this.ws = ws;
    ws.onopen = function () {
      console.log("服务器连接成功");
      _this.ws.send({ test: "12345" });
    };
    ws.onclose = function () {
      console.log("服务器连接关闭");
    };
    ws.onerror = function () {
      console.log("服务器连接出错");
    };
    ws.onmessage = function (e) {
      //接收服务器返回的数据
      let resData = JSON.parse(e.data);
      console.log(resData);
      let isDotNumList = [];
      if (resData.type == "say") {
        console.log("say说");
        store.commit('overallIsDot',true)
        isDotNumList.push(Number(resData.data.send_id.slice(2)))
        store.commit('isDotNum',isDotNumList)
        console.log(resData.data);
        console.log(Number(resData.data.send_id.slice(2)));
        // this.isDotList.push(Number(resData.data.send_id.slice(2)));
        _this.isDotList = Number(resData.data.send_id.slice(2));

      } else if (resData.type == "init") {
        store.commit('client_id',resData.client_id)
        _this.$api.bindShop(resData.client_id).then((res) => {
          //绑定client_id到shop_id
          console.log(res.data.info);
        });
      }
      if(_this.getLeftUserList){
        _this.getLeftUserList();
      }
    };
  }
}
initWebSocket();
Vue.prototype.$initWebSocket = initWebSocket

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

