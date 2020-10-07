import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import Cookies from 'js-cookie';
import Vuex from 'vuex';
import request from './utils/request';
import axios from 'axios';
import store from './store/index'

Vue.config.productionTip = false;
Vue.prototype.$http = request;
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.use(Vuex);
Vue.use(ElementUI);

new Vue({
    render: h => h(App),
    router,
    Cookies,
    store
}).$mount('#app')