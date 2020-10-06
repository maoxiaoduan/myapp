import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        address: [{
                id: "1",
                name: '王小明',
                tel: 13568978546,
                city: '广州',
                address: '广州天河区花城大道111号',
                isDefault: true,
            },
            {
                id: "2",
                name: '李小丽',
                tel: 13568911546,
                city: '北京',
                address: '北京朝阳区朝阳北路111号'
            },
        ],
        cartGoods: [{
            id: 1,
            img: '../../assets/logo.png',
            title: '测试标题',
            content: '测试内容',
            price: '10000',
            count: '8'
        }]
    },
    // getters: {
    //     getCount(state) {
    //         // return state.address
    //     }
    // }
})