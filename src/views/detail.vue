<template>
  <div id="main">
    <div class="header">
      <mt-header fixed title="商品详情" class="top">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
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
    getProById() {
      const id = this.$route.params.id;
      this.$http.get(`/main/getthis/${id}`).then((res) => {
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
  height: 50px;
}
#content {
  margin-top: 50px;
  height: 1000px;
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