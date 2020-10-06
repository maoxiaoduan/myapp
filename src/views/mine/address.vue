<!--  -->
<template>
  <div class="address">
    <van-nav-bar
      title="收货地址列表"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { AddressList, Toast, NavBar } from "vant";
// Vue.use(AddressList);
import store from '../../store/index'
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    [AddressList.name]: AddressList,
    [Toast.name]: Toast,
    [NavBar.name]: NavBar,
  },
  data() {
    //这里存放数据
    return {
      store,
      chosenAddressId: "1",
      list: store.state.address,
      // [
      //   {
      //     id: "1",
      //     name: "张三",
      //     tel: "13000000000",
      //     address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
      //     isDefault: true,
      //   }
      // ],
      disabledList: [
        {
          id: "3",
          name: "王五",
          tel: "1320000000",
          address: "浙江省杭州市滨江区江南大道 15 号",
        },
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    
    onClickLeft() {
      history.go(-1);
      console.log(this.list)
    },
    onAdd() {
    // history.go('/details')
    this.$router.push('/mine/details')
    //   Toast("/mine/details");
    },
    onEdit(item, index) {
    this.$router.push('/mine/details?='+ index)

    },
    goBack() {
      history.go(-1);
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
//@import url(); 引入公共css类

</style>