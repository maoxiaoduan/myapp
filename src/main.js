import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import Cookies from 'js-cookie'
// import { Button } from 'vant';
import Vuex from 'vuex'


Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(ElementUI);
// Vue.use(Button);
new Vue({
    render: h => h(App),
    router,
    Cookies
}).$mount('#app')