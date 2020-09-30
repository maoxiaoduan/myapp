import Vue from 'vue'
import App from './App.vue'
import router from './router'
<<<<<<< HEAD
import ElementUI from 'element-ui';
import Cookies from 'js-cookie'
// import { Button } from 'vant';
import Vuex from 'vuex'

=======
import request from './utils/request'

Vue.config.productionTip = false
Vue.prototype.$http = request
>>>>>>> 81c28415441b27dcc578c2917f01ae125ccb6249

Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(ElementUI);
// Vue.use(Button);
new Vue({
    render: h => h(App),
    router,
    Cookies
}).$mount('#app')