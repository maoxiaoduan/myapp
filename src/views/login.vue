<!--  -->
<template>
  <div class="login">
    <div class="header">
      <span @click="goBack">&lt;</span>
      <h3>登录</h3>
    </div>
    <div class="content">
      <div class="wrap">
        <div class="con-t">
          <input
            class="CON-T CON1"
            v-model="name"
            placeholder="请输入账户"
          /><br />
          <input
            class="CON-T CON2"
            v-model="password"
            placeholder="请输入密码"
          />
        </div>
        <div class="con-b">
          <el-row>
            <el-button type="success" @click="setcook()">登录</el-button>
            <el-button>注册</el-button>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Cookies from 'js-cookie'
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      name: "",
      password: "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    goBack() {
      history.go(-1);
    },
    setcook() {
      Cookies.set(this.name, this.password, { expires: 7 });
        this.$router.push("/mine");
      // this.$cookies.set(keyName, value[ , expireTimes[, path[, domain[, secure]]]])
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
.login {
  height: 100%;
}
.header {
  height: 50px;
  background: #cecece;
  span {
    display: inline-block;
    width: 50px;
    text-align: center;
    height: 50px;
    line-height: 50px;
    color: rgb(116, 108, 108);
    font-size: 25px;
    vertical-align: middle;
  }
  h3 {
    display: inline-block;
    font-weight: bold;
    text-align: center;
    width: calc(100% - 50px);
    height: 50px;
    line-height: 50px;
    vertical-align: middle;
    font-size: 20px;
  }
}
.content {
  text-align: center;
  .wrap {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-50%);
    .con-t {
      .CON-T {
        margin: 10px;
      }
    }
  }
}
</style>