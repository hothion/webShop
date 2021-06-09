import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);
Vue.config.productionTip = false
import VueDayjs from 'vue-dayjs-plugin'
Vue.use(VueDayjs)
import {store} from "./store";


import Dashboard from './components/Dashboard.vue'
import Navigation from './components/Navigation.vue'
import LoginAdmin from './components/LoginAdmin.vue';
import Chat from './components/Chat.vue';
import OrderManagement from './components/OrderManagement.vue'
import ProductManagement from './components/ProductManagement.vue'
import Profile from './components/Profile.vue';
import Notification from './components/Notification.vue';
import Statistic from './components/Statistic.vue';
import OrderMonth from "./components/OrderMonth";
import OrderWeeks from "./components/OrderWeeks";
import RanDomChart from "./components/RanDomChart";
//// Admin App
//import DashboardAdmin from "./components/admin/DashboardAdmin";
import NavigationAdmin from "./components/admin/NavigationAdmin";
import ShopManagement from "./components/admin/ShopManagement";
import UserManagement from "./components/admin/UserManagement";
import UserMonth from "./components/admin/UserMonth";
import ShopMonth from "./components/admin/ShopMonth";
import StatisticAdmin from "./components/admin/StatisticAdmin";
import NotificationAdmin from "./components/admin/NotificationAdmin";
const routes = [{
        name: 'login',
        path: '/login',
        component: LoginAdmin
    },
    {
        name: 'order-month',
        path: '/order-month',
        component: OrderMonth
    },
    {
        name: 'order-weeks',
        path: '/order-weeks',
        component: OrderWeeks
    },
    {
        name:'order-week2',
        path: '/order-week2',
        component: RanDomChart
    },
    {
        name: 'chat',
        path: '/chat',
        component: Chat
    },
    {
        name: 'statistic',
        path: '/statistic',
        component: Statistic
    },
    {
        name: 'dashboard',
        path: '/',
        component: Dashboard
    },
    {
        name: 'product',
        path: '/product',
        component: ProductManagement
    },
    {
        name: 'order',
        path: '/order',
        component: OrderManagement
    },
    {
        name: 'profile',
        path: '/profile',
        component: Profile
    },
    {
        name: 'notification',
        path: '/notification',
        component: Notification
    },
    {
        name: 'navigation',
        path: '/navigation',
        component: Navigation
    },
    {
        name: 'navigationAdmin',
        path: '/navigationAdmin',
        component: NavigationAdmin
    },
    {
        name: 'notificationAdmin',
        path: '/notificationAdmin',
        component: NotificationAdmin
    },
    {
        name: 'user',
        path: '/user',
        component: UserManagement
    },
    {
        name: 'user-month',
        path: '/user-month',
        component: UserMonth
    },
    {
        name: 'shop',
        path: '/shop',
        component: ShopManagement
    },
    {
        name: 'shop-month',
        path: '/shop-month',
        component: ShopMonth
    },
    {
        name: 'statisticAdmin',
        path: '/statisticAdmin',
        component: StatisticAdmin
    }
]

const dataUser = JSON.parse(localStorage.getItem('data'));
if(dataUser === 1){
    const router = new VueRouter({mode: 'history', routes: routes});
    new Vue({
        render: h => h(Navigation),
        router,
        store
    }).$mount('#app')
}else {
    const router = new VueRouter({mode: 'history', routes: routes});
    new Vue({
        render: h => h(LoginAdmin),
        router,
        store
    }).$mount('#app')
}
