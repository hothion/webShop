import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);
Vue.config.productionTip = false

import Dashboard from './components/Dashboard.vue'
import Navigation from './components/Navigation.vue'
import LoginAdmin from './components/LoginAdmin.vue';
import Chat from './components/Chat.vue';
import OrderManagement from './components/OrderManagement.vue'
import ProductManagement from './components/ProductManagement.vue'
import Profile from './components/Profile.vue';
// import uploadAdmin from './components/uploadImageFireBase.vue';
import Notification from './components/Notification.vue';
import Statistic from './components/Statistic.vue';
const routes = [{
        name: 'login',
        path: '/login',
        component: LoginAdmin
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
        path: '/dashboard',
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
    }
]
const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, Navigation)).$mount('#app');