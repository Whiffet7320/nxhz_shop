import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.productionTip = false;


const routes = [
    // {
    //     path: '/home',
    //     name: 'home',
    //     component: () => import('./components/home.vue')
    // },
    {
        path: '/login',
        name: 'login',
        component: () => import('./components/login.vue')
    },
    {
        path: '/shop',
        name: 'shop',
        component: () => import('./components/shop/index.vue')
    },
    {
        path: '/goods',
        name: 'goods',
        component: () => import('./components/goods/index.vue'),
        children: [
            {
                path: 'sell',
                name: 'sell',
                component: () => import('./components/goods/sell.vue')
            },
            {
                path: 'Edit',
                name: 'Edit',
                component: () => import('./components/goods/Edit.vue')
            },
            {
                path: 'examine',
                name: 'examine',
                component: () => import('./components/goods/examine.vue')
            }
        ]
    },
    {
        path: '/order',
        name: 'order',
        redirect: 'order/testContent',
        component: () => import('./components/order/index.vue'),
        meta:[
            {title:'订单管理',url:'/order/testContent',flag:true},
            {title:'订单列表',url:'/order/testContent',flag:true},
            // {title:'订单',url:'/order/details',flag:true},
            // {title:'评论列表',url:'/order/commentList',flag:true}
        ],
        children: [
            {
                path: 'testContent',
                name: 'testContent',
                component: () => import('./components/order/testContent.vue')
            },
            {
                path: 'details',
                name: 'details',
                component: () => import('./components/order/details.vue')
            },
            {
                path: 'commentList',
                name: 'commentList',
                component: () => import('./components/order/commentList.vue')
            },
            {
                path: 'listDetails',
                name: 'listDetails',
                component: () => import('./components/order/listDetails.vue')
            }
        ]
    },
    {
        path: '/test',
        name: 'test',
        redirect: 'test/text2',
        component: () => import('./components/shop/test.vue'),
        children: [
            {
                path: 'text2',
                name: 'text2',
                component: () => import('./components/shop/text2.vue')
            },
        ]
    },
    {
        path: '/operate',
        name: 'operate',
        redirect: '/operate/operatetest',
        component: () => import('./components/operate/test.vue'),
        children: [
            {
                path: 'operatetest',
                name: 'operatetest',
                component: () => import('./components/operate/testContent.vue')
            },
            {
                path: 'toGrant', //发放优惠券 详情
                name: 'toGrant',
                component: () => import('./components/operate/toGrant.vue')
            },
            {
                path: 'record',
                name: 'record',
                component: () => import('./components/operate/record.vue')
            },
            {
                path: 'demo',
                name: 'demo',
                component: () => import('./components/demo/index')
            },
        ]
    },
    {
        path: 'webSocket',//聊天室(客服)
        name: 'webSocket',
        component: () => import('./components/webSocket/webSocket.vue')
        // component:()=>import('./components/webSocket/ossImage.vue')
    },
    // {
    //     path: 'details',
    //     name: 'details',
    //     component: () => import('./components/order/details.vue')
    // },
]

const router = new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: 'active'
})


export default router
