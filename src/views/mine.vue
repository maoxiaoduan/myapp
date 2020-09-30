<!--  -->
<template>
  <div id="mine">
    <div v-if="showlogin">
      <el-row>
        <router-link to="/login">
          <el-button type="success">登录</el-button>
        </router-link>
      </el-row>
    </div>
    <div class="ls" v-if="!showlogin">
      <h3>当前用户：</h3>
      <!-- <transition name="v"> -->
      <router-link class="S2" to="/mine/address">
        <span class="S1">收货地址</span>
        <span class="S1">&gt;</span>
      </router-link>
      <!-- </transition> -->
      <el-row>
        <el-button class="btn" type="danger" @click="c1">退出登录</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      showlogin: false,
      name: "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    c1() {
      this.showlogin = true;
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
<style lang="scss" scoped>
#mine {
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.asd {
  position: absolute;
  top: -500%;
}

.ls {
  width: 100%;
  position: absolute;
  margin-top: -50px;
  left: 50%;
  text-align: center;
  transform: translateX(-50%);
  h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .S2 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border: 1px solid #cecece;
    border-right: none;
    margin: 10px 0;
    border-left: none;
    .S1 {
      height: 30px;
      line-height: 30px;
      display: inline-block;
      font-size: 15px;
      color: black;
      padding: 0 15px;
    }
  }
  .btn {
    width: 100%;
  }
}
</style>