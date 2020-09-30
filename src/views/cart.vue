<!--  -->
<template>
  <div class="cart">
    <header class="cart-header"  v-if="cartGoods.length>0">
      <h3>我的购物车</h3>
    </header>
    <main class="cart-body"  >
      <div class="wrap">
        <ul class="goods-wrap">
        <li v-for='item in cartGoods'  :key='Math.random()+item'>
            <cart-one-item
              :itemId="item.id"
              :imgUrl='item.img'
              :title='item.title'
              :content='item.content'
              :price='item.price'
              :count='item.count'
            >
            </cart-one-item>
          </li> 
        </ul>
        <ul class="price-wrap">
          <div class="amount">
            商品总价
            <span class="float-right">￥10000</span>
          </div>
            <!--红包 -->
          <div class="red-packet">
            红包：
            <el-select v-model="redPacket" :placeholder="redPacketPlaceholder">
              <el-option
                v-for="item in redPackets"
                :key="item.id"
                :label="item.label"
                :value="item.money"
                :disabled="item.disabled"
              >
              </el-option>
            </el-select>
          </div>
          <!-- 支付 -->
          <div class="pay">
            <div>
              商品实付：
               <span class="float-right">￥10000</span>
            </div>
            <div>
                <span>运费（实付满49免邮）：</span>
                <span class="float-right">
                    <span v-show="needPostage">{{postage}}</span>
                    <!-- <span v-show='!needPostage'>免邮</span> -->
                </span>
            </div>
            <div>
              <span>合计</span>
               <span class="float-right">￥10000</span>
            </div>
          </div>
        </ul>
      </div>
    </main>
    <footer class="cart-footer"  v-if="cartGoods.length >0">
      <div class="toPay">
        <el-button type="danger" class="text-right" @click="goOrderFrom">去结算<i class="el-icon-arrow-right el-icon--right"></i></el-button>
      </div>
    </footer>
    <div class="empty-wrap"   v-if="cartGoods.length === 0">
        你还没有添加任何商品哦~
    </div>
  </div>
 
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
  import CartOneItem from './CartOneItem'
export default {
  components: {
    'cart-one-item':CartOneItem
  },
  data() {
    //这里存放数据
    return {
      redPacket:'',
   
      redPacketPlaceholder: "无可用红包",
      redPackets: [
        {
          id: 1,
          money: 10,
          limit: 70,
          label: "10元红包(满70可用)",
          disabled: true,
        },
        {
          id: 2,
          money: 20,
          limit: 100,
          label: "20元红包(满100可用)",
          disabled: true,
        },
        {
          id: 3,
          money: 30,
          limit: 150,
          label: "30元红包(满150可用)",
          disabled: true,
        },
      ],
       postage:'￥6',
       needPostage: true,


    };

  },  
  computed: {
    //获取商品列表，然后传给子元素
    cartGoods(){
      return this.$store.state.cartGoods;
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    //判断红包是否可用
    /* isRedPacketDisabled(limit){
      } */
      //去结算页面
      goOrderFrom(){
        this.$router.push({
          path:'/CartOrderFrom'
        })
      }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.float-right {
  float: right;
}
.cart {
    font-size: 14px;
  height: 100%;
}
.cart-header {
    background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-bottom: 1px solid #eee;
  font-weight: 900;
}
.cart-body {
  padding-top: 40px;
  padding-bottom: 100px;
  background-color: #f5f5f5;

}
.wrap {
  padding-top: 10px;
  .price-wrap {
    margin-top: 10px;
    background-color: #fff;
    padding: 15px 10px;
    text-align: left;
    line-height: 40px;
    border-bottom: 1px solid #eee;
  }
}
.cart-footer{
  position: fixed;
  width: 100%;
  height: 40px;
  line-height: 40px;
  bottom: 60px;
  border: 1px solid #eee;
  left: 0;
  text-align: right;
  .el-button--danger{
    background-color: #ff65af;
    border: none;
    border-radius: 0;
  }
}
.empty-wrap{
  position: absolute;
  height: 50px;
  width: 100%;
  top: 50%;
  margin-top: -25px;
  text-align: center;
}
</style>