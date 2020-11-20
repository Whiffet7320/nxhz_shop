import axios from 'axios';
import urls from './url.js';

// const appkey = {
//     appkey:'cy2ku_1554116083631'
// }

const myPost = axios.create({
    baseURL: urls.baseUrl,
    method: 'post',
    headers: {
        'token': sessionStorage.getItem("token")
    },
})
const myGet = axios.create({
    baseURL: urls.baseUrl,
    method: 'get',
})
export default {
    login(obj) {
        return myPost({
            url: urls.login,
            params: {
                ...obj
            },
            // 要在这里写 headers,从sessionStorage中拿,并给headers设置token
            headers: {
                'token': sessionStorage.getItem("token")
            },
        })
    },
    info() {
        return myGet({
            url: urls.info,
            headers: {
                'token': sessionStorage.getItem("token")
            },
        })
    },
    goodsList(obj) {
        return myGet({
            url: urls.goodsList,
            params: {
                ...obj
            },
            headers: {
                'token': sessionStorage.getItem("token")
            },
        })
    },
    allList() {//所有商品分类
        return myGet({
            url: urls.allList,
            headers: {
                'token': sessionStorage.getItem("token")
            },
        })
    },
    orderList() {
        return myGet({
            url: urls.orderList,
            headers: {
                'token': sessionStorage.getItem("token")
            },
        })
    },
    orderInfo(order_id) {
        return myGet({
            url: urls.orderInfo,
            params: {
                order_id
            },
            headers: {
                'token': sessionStorage.getItem("token")
            },
        })
    },
    infoChange(obj) {//修改用户
        return myPost({
            url: urls.infoChange,
            params: {
                ...obj
            },
            headers: {
                'token': sessionStorage.getItem("token")
            },
        })
    },
    orderChange(obj) {
        return myPost({
            url: urls.infoChange,
            params: {
                ...obj
            },
            headers: {
                'token': sessionStorage.getItem("token")
            },
        })
    },
    shipping() {
        return myGet({
            url: urls.shipping,
            params: {
            },
            headers: {
                'token': sessionStorage.getItem("token")
            },
        })
    },
    goodsEdit(obj) {//添加编辑商品
        return myPost({
            url: urls.goodsEdit,
            params: {
                ...obj
            },
            headers: {
                'token': sessionStorage.getItem("token")
            },
        })
    },
    goodsInfo(goods_id) {//获取商品信息
        return myGet({
            url: urls.goodsInfo,
            params: {
                goods_id
            },
            headers: {
                'token': sessionStorage.getItem("token")
            },
        })
    },
    goodsChange(obj) {//商品 删除下架
        return myPost({
            url: urls.goodsChange,
            params: {
                ...obj
            },
            headers: {
                'token': sessionStorage.getItem("token")
            },
        })
    },
    skuList(goods_id) {//获取商品规格列表
        return myGet({
            url: urls.skuList,
            params: {
                goods_id
            },
            headers: {
                'token': sessionStorage.getItem("token")
            },
        })
    },
    skuChange(obj) {//修改规格属性 上下架&删除&修改库存
        return myPost({
            url: urls.skuChange,
            params: {
                ...obj
            },
            headers: {
                'token': sessionStorage.getItem("token")
            },
        })
    },
    skuEdit(obj) {//添加规格 添加&编辑
        return myPost({
            url: urls.skuEdit,
            params: {
                ...obj
            },
            headers: {
                'token': sessionStorage.getItem("token")
            },
        })
    },
    // 聊天室
    bindShop(client_id) {//绑定client_id到shop_id
        return myPost({
            url: urls.bindShop,
            params: {
                client_id
            },
            headers: {
                'token': sessionStorage.getItem("token")
            },
        })
    },
    userList() {
        return myGet({//获取聊天用户列表
            url: urls.userList,
            params: {
            },
            headers: {
                'token': sessionStorage.getItem("token")
            },
        })
    },
    userSay(obj) {
        return myPost({
            url: urls.userSay,
            params: {
                ...obj
            },
            headers: {
                'token': sessionStorage.getItem("token")
            },
        })
    },
    userHistory(obj) {//获取消息历史记录
        return myPost({
            url: urls.userHistory,
            params: {
                ...obj
            },
            headers: {
                'token': sessionStorage.getItem("token")
            },
        })
    },
    ossststoken() {
        return myGet({//oss上传获取ststoken
            url: urls.ossststoken,
            params: {
            },
            headers: {
                'token': sessionStorage.getItem("token")
            },
        })
    }
}