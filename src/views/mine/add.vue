<!--  -->
<template>
  <div class="details">
    <div class="content">
      <van-nav-bar
        title="新增地址"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
      <van-address-edit
        :area-list="areaList"
        show-postal:false
        show-delete:false
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
      />
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import { AddressEdit, Toast, NavBar } from "vant";
import areaList from "../../common/area";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    [AddressEdit.name]: AddressEdit,
    [Toast.name]: Toast,
    [NavBar.name]: NavBar,
  },
  data() {
    //这里存放数据
    return { areaList, searchResult: [], AddressInfo: {} };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    onClickLeft() {
           this.$router.push('/mine/address')

    },
    onSave(content) {
      let addr = new Object();
      // console.log("content");
      // console.log(content);
      // console.log(this.$route.query.data)
      let len = this.$route.query.data + 1;
      addr = {
        id: len,
        name: content.name,
        tel: content.tel,
        city: content.city,
        county: content.county,
        is_default: content.is_default,
        postal_code: content.postal_code,
        province: content.province,
        area_code: content.areaCode,
        address:
          content.province +
          content.city +
          content.county +
          content.addressDetail,
         address1: content.addressDetail,
      };
      let is_add = this.$store.state.address.push(addr);
      
      // 判断是否选中默认
      if (content.is_default) {
        this.chosenAddressId = len;
      }
      if (is_add) {
        this.show1 = false;
      }
      console.log(this.$store.state.address);
      this.$router.push('/mine/address')
    },
    onDelete() {},
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "万达广场",
            address: "郑州市二七区",
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.$route.query.data
  },
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