import Vue from 'vue'
import App from './App.vue'
import router from './router'
import request from './utils/request'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(MintUI)
Vue.use(Vant)

Vue.config.productionTip = false
Vue.prototype.$http = request

new Vue({
    render: h => h(App),
    router
}).$mount('#app')