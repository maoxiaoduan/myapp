<template>
  <div id="main">
    <div class="header">
      <van-nav-bar class="top"
        title="商品详情"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div id="content">
      <div class="proImg">
        <img :src="product.imgUrl" alt="" />
      </div>
      <div class="intro">
        <h3>{{ product.titile }}</h3>
        <p>{{ product.name }}</p>
        <i>￥</i><span>{{ product.price }}</span>
      </div>
      <div class="desc">
        <p>{{ product.titile }}</p>
        <p>{{ product.titile }}</p>
        <p>{{ product.titile }}</p>
        <p>{{ product.titile }}</p>
        <p>{{ product.titile }}</p>
        <p>{{ product.titile }}</p>
        <p>{{ product.titile }}</p>
        <p>{{ product.titile }}</p>
        <p>{{ product.titile }}</p>
        <p>{{ product.titile }}</p>
        <p>{{ product.titile }}</p>
        <p>{{ product.titile }}</p>
      </div>
    </div>
    <div class="goShopcart">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="cart-o" text="购物车" />
        <van-goods-action-icon icon="shop-o" text="店铺" />
        <van-goods-action-button
          color="#ff67b0"
          type="danger"
          text="加入购物车"
        />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar, GoodsAction, GoodsActionIcon, GoodsActionButton } from "vant";

Vue.use(NavBar);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      product: "",
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    getProById() {
      const id = this.$route.query.id;
      console.log(id);
      this.$http.get(`/main/getthis/${id}`).then((res) => {
        console.log(res);
        this.product = res.data.list;
        this.product.imgUrl = "http://localhost:8080/" + this.product.imgUrl;
      });
    },
  },
  created() {
    this.getProById();
  },
  mounted() {},
  watch: {},
  computed: {},
  filters: {},
};
</script>

<style scoped>
.header .top {
  width: 100%;
  height: 50px; 
  position: fixed;left: 0;top: 0;
}
#content {
  margin-top: 50px;
  /* height: 1000px; */
}
.proImg {
  height: 200px;
}
.proImg img {
  margin-left: 55px;
  display: block;
  width: 265px;
}
.goShopcart {
  position: absolute;
  bottom: 0px;
  left: 0px;
}
.intro {
  text-align: center;
  margin-top: 5px;
  margin-left: 18px;
  width: 90%;
  height: 140px;
  border: solid 1px #cecece;
}
.intro h3 {
  margin-top: 15px;
  margin-bottom: 25px;
}
.intro p {
  margin-bottom: 25px;
}
.intro span {
  color: #ff67b0;
}
.desc {
  text-indent: 18px;
  border: solid 1px #cecece;
}
.desc p {
  line-height: 30px;
}
</style>