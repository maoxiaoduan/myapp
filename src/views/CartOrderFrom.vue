<!--  -->
<template>
  <div class="order-from">
    <header>
      <span class="toCart" @click="toCart">
        <i class="el-icon-arrow-left"></i>
      </span>
      <h3>填写订单</h3>
    </header>
    <main>
      <div class="order-from-item">
        <div class="goods">
          <div class="left"><img src="" alt="" />10000</div>
          <div class="right">
            <p>10000</p>
          </div>
        </div>
         <div class="goods">
          <div class="left"><img src="" alt="" />10000</div>
          <div class="right">
            <p>10000</p>
          </div>
        </div>
      </div>
      <div class="order-from-item">
        <p>
          合计：
          <span class="price">￥10000</span>
        </p>
      </div>
      <div class="order-from-item adress">
        <span>地址：</span>
        <el-select v-model="selectAddress" :placeholder="addressPlaceHolder">
          <el-option
            v-for="(item, index) in address"
            :key="index"
            :label="item.name + item.phone + item.city + item.detailAdd"
            :value="index"
          >
          </el-option>
        </el-select>
      </div>
    </main>
    <footer class="order-form-footer">
      <div>
        <span class="price-wrap">付款<span class="price">￥10000</span></span>
        <el-button type="danger" class="text-right" @click="toPay"
          >去支付<i class="el-icon-arrow-right el-icon--right"></i
        ></el-button>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      addressPlaceHolder: "请选择地址",
      selectAddress: 0,
    };
  },
  //监听属性 类似于data概念
  computed: {
    address() {
      return this.$store.state.address;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    toCart() {
      this.$router.push({
        path: "/cart",
      });
    },
    toPay() {
      alert("支付成功");
      this.$router.push({
        path: "/index",
      });
    },
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
.order-from {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1001;
  background-color: #f5f5f5;
  header {
    position: relative;
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    .toCart {
      i {
        position: absolute;
        left: 10px;
        font-size: 20px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    h3 {
      font-size: 20px;
      line-height: 50px;
      text-align: center;
      font-weight: 900;
    }
  }
  main {
    margin-top: 10px;
    text-align: left;
    .order-from-item {
      padding: 10px;
      background-color: #fff;
      margin-top: 20px;
    }
    .goods {
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #eee;
      clear: both;
      .left {
        float: left;
        height: 100%;
        img {
          height: 100%;
        }
      }
      .right {
        float: right;
      }
    }
    .address {
    }
    .price {
      color: #ff65af;
      font-size: 18px;
      font-weight: 600;
      float: right;
    }
  }
  .order-form-footer {
    position: fixed;
    width: 100%;
    height: 40px;
    line-height: 40px;
    bottom: 0;
    border-top: 1px solid #eee;
    left: 0;
    text-align: right;
    background-color: #fff;
    .price-wrap {
      float: left;
      padding-left: 10px;
      font-size: 18px;
    }
    .price {
      color: #ff65af;
      font-weight: 600;
    }
  }
  .el-button--danger {
    background-color: #ff65af;
    border: none;
    border-radius: 0;
  }
}
</style>