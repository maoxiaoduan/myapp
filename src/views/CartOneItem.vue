<!--  -->
<template>
  <div class="cart-one-item">
    <div class="left">
      <img src="../assets/logo.png" alt="" />
    </div>
    <div class="right">
      <div class="text">
        <h3 class="title">{{ title }}</h3>
        <p class="content">{{ content }}</p>
      </div>
      <div class="price">
        ￥
        <span class="price-number">{{ price }}</span>
      </div>
      <div class="cart-btn">
        <i class="el-icon-remove-outline"></i>
        <span class="inputText">10000</span>
        <i class="el-icon-circle-plus-outline"></i>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  props: ["itemId", "imgUrl", "title", "content", "price", "count"],
  components: {},
  data() {
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
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
.cart-one-item {
  position: relative;
  height: 130px;
  width: 100%;
  font-size: 0;
  border-bottom: 1px solid #e4e7ed;
  background-color: #fff;
}
.cart-one-item > div {
  font-size: 14px;
  display: inline-block;
  vertical-align: middle;
}
.left {
  width: 40%;
  height: 100%;
}
.left > img {
  height: 80%;
  transform: translateY(10%);
}
.right {
  box-sizing: border-box;
  position: relative;
  height: 100%;
  width: 60%;
  top: -20px;
  text-align: left;
  padding-left: 10px;
  .text {
    position: absolute;
    line-height: 30px;
    top: 50%;
    transform: translateY(-50%);
  }
  .price {
    position: absolute;
    top: 100px;
    .price-number {
      color: #ff65af;
      font-size: 18px;
      font-weight: 600;
    }
  }
  .cart-btn {
    display: inline-block;
    position: absolute;
    bottom:-10px;
    right: 10px;
  }
}
.el-icon-remove-outline,
.el-icon-circle-plus-outline {
  font-size: 18px;
}
.el-icon-remove-outline {
  color: #ff65af;
}
.el-icon-circle-plus-outline {
  color: #ff65af;
//   background-color:#ff65af ;
}
.cart-btn {
  .inputText {
    display: inline-block;
    width: 50px;
    text-align: center;
  }
}
</style>