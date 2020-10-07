import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import Cookies from 'js-cookie';
import Vuex from 'vuex';
import iView from 'iview';
import request from './utils/request';
import axios from 'axios';
import store1 from './store/index'


Vue.config.productionTip = false;
Vue.prototype.$http = request;
Vue.prototype.$http = axios;
Vue.use(Vuex);
Vue.use(ElementUI);

const ADD_COUNT = 'ADD_COUNT'; // 用常量代替事件类型，使得代码更清晰
const REMOVE_COUNT = 'REMOVE_COUNT';
//注册状态管理全局参数
var store = new Vuex.Store({
    state: {
        token: '',
        userID: '',
    },
    mutations: {
        //写法与getters相类似
        //组件想要对于vuex 中的数据进行的处理
        //组件中采用this.$store.commit('方法名') 的方式调用，实现充分解耦
        //内部操作必须在此刻完成(同步)
        [ADD_COUNT](state, token) { // 第一个参数为 state 用于变更状态 登录
            sessionStorage.setItem("token", token);
            state.token = token;
        },
        [REMOVE_COUNT](state, token) { // 退出登录

            sessionStorage.removeItem("token", token);

            state.token = token;
        },
    }
});

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start(); //loadong 效果
    store.state.token = sessionStorage.getItem('token'); //获取本地存储的token
    if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
        if (store.state.token !== "") { // 通过vuex state获取当前的token是否存
            next();
        } else {
            next({
                path: '/login',
                query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    } else {
        next();
    }
})

// router.afterEach(route => {
//     iView.LoadingBar.finish();
// });


new Vue({
    render: h => h(App),
    router,
    Cookies,
    store1
}).$mount('#app')