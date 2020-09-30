import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        address:[
            {
                name: '王小明',
                phone: 13568978546,
                city: '广州',
                detailAdd: '天河区花城大道111号'
              },
              {
                name: '李小丽',
                phone: 13568911546,
                city: '北京',
                detailAdd: '朝阳区朝阳北路111号'
              },
        ],
        cartGoods:[
          {
             id:1,
             img:'../../assets/logo.png',
             title:'测试标题',
             content:'测试内容',
             price:'10000',
             count:'8'
          }
        ]
    }
})