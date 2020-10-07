<!--  -->
<template>
  <div class="details">
    <van-nav-bar
      title="修改"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-address-edit
      :area-list="areaList"
      show-postal:false
      show-delete
      show-set-default
      show-search-result
      :Props="value"
      :search-result="searchResult"
      :address-info="AddressInfo"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { AddressEdit, Toast, NavBar } from "vant";
import areaList from "../../common/area";
import store from "../../store/index";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    [AddressEdit.name]: AddressEdit,
    [Toast.name]: Toast,
    [NavBar.name]: NavBar,
  },
  data() {
    //这里存放数据areaList 这个是地址
    return {
      areaList,
      searchResult: [],
      store,
      list: store.state.address,
      AddressInfo: {},
      value: "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    addressData() {
      //拿到了store中的地址列表
      return this.$store.state.address;
    },
  },
  //方法集合
  methods: {
    getinit() {
      const id = this.$route.query.data;
      const dizhi = this.list[id];
      this.AddressInfo = {
        id: id,
        name: dizhi.name,
        tel: dizhi.tel,
        province: dizhi.province,
        city: dizhi.city,
        county: dizhi.county,
        areaCode: dizhi.area_code,
        address: dizhi.address,
        postal_code: dizhi.postal_code,
      };
      console.log(this.AddressInfo);
    },
    onClickLeft() {
      history.go(-1);
    },
    onSave() {},
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
    this.getinit();
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