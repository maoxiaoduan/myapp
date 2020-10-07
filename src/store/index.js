import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        address: [
            //  {
            //         id: "1",
            //         name: '王小明',
            //         tel: 13568978546,
            //         province: '广东省',
            //         city: '广州市',
            //         county: '荔湾区',
            //         address: '广州天河区花城大道111号',
            //         postalCode: '120000',
            //         isDefault: true,
            //     },
            //     {
            //         id: "2",
            //         name: '李小丽',
            //         tel: 13568911546,
            //         province: '北京市',
            //         city: '北京市',
            //         county: '朝阳区',
            //         address: '北京朝阳区朝阳北路111号',
            //         postalCode: '120000',
            //     },
            {
                id: '1',
                name: '张三',
                tel: '13000000000',
                province: '江苏',
                city: '无锡',
                county: '崇安区',
                area_code: '120000',
                address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
                postal_code: '123456',
                isDefault: true,
            }
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
    mutations: {
        addCouponData(state, data) {
            state.couponData.push(data);
        },
        handleCouponData(state, data) {
            state.couponData.splice(data.index, 1, data.couponData);
        },
        deleteCouponData(state, index) {
            state.couponData.splice(index, 1);
        }
    }
})