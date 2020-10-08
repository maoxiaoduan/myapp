<template>
  <div id="main">
    <div id="content">
      <div class="nav">
        <ul>
          <li
            @click="changeLi($event, '5f72d50e2bfe2f07cccefd1e')"
            ref="navall"
          >
            全部
          </li>
          <li
            v-for="item in typeList"
            :key="item._id"
            ref="navli"
            @click="changeLi($event, item._id)"
          >
            {{ item.kind }}
          </li>
        </ul>
      </div>
      <transition>
        <div class="proList">
          <ul>
            <li
              v-for="(item, index) in proList"
              :key="item._id"
              @click="goDetail(item._id)"
            >
              <div class="left">
                <img :src="item.imgUrl" />
              </div>
              <div class="right">
                <h3>{{ item.titile }}</h3>
                <p>{{ item.name }}</p>
                <i>￥</i><span>{{ item.price }}</span>
                <div class="btn1" @click="changeFlag(index)" ref="btn1"></div>
                <div class="btn2" ref="btn2">
                  <div class="minus" @click="doMinus(index)">-</div>
                  <div class="num">{{ num }}</div>
                  <div class="plus" @click="doPlus">+</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  name: "",
  props: {},
  components: {
    Header,
    Footer,
  },

  data() {
    return {
      curIndex: "",
      num: 0,
      typeList: [],
      proList: [],
    };
  },
  methods: {
    getType() {
      this.$http.get("/fruit/getkind").then((res) => {
        this.typeList = res.data.Kindlist;
      });
    },
    changeFlag(index) {
      for (let i = 0; i < this.$refs.btn1.length; i++) {
        this.$refs.btn1[i].style.display = "block";
      }
      for (let i = 0; i < this.$refs.btn2.length; i++) {
        this.$refs.btn2[i].style.display = "none";
      }
      this.$refs.btn1[index].style.display = "none";
      this.$refs.btn2[index].style.display = "block";
    },
    doMinus(index) {
      if (this.num > 0) {
        this.num--;
      } else {
        this.$refs.btn1[index].style.display = "block";
        this.$refs.btn2[index].style.display = "none";
      }
    },
    doPlus() {
      this.num++;
    },
    changeLi(e, id) {
      for (let i = 0; i < this.$refs.navli.length; i++) {
        this.$refs.navli[i].className = "";
      }
      this.$refs.navall.className = "";
      e.target.className = "active";
      const typeId = id;
      this.getProducts(typeId);
    },
    getProducts(typeid) {
      if (typeid == "5f72d50e2bfe2f07cccefd1e") {
        this.$http.get("/main/all").then((res) => {
          this.proList = res.data.list;
        });
      } else {
        const newList = [];
        this.$http.get("/main/all").then((res) => {
          this.proList = res.data.list;
          for (let i = 0; i < this.proList.length; i++) {
            if (typeid == this.proList[i].kind._id) {
              newList.push(this.proList[i]);
            }
          }
          this.proList = newList;
        });
      }
    },
    goDetail(proid) {
      this.$router.push({
        path: "/detail",
        query: {
          id: proid,
        },
      });
    },
  },
  created() {
    this.getType();
    this.getProducts("5f72d50e2bfe2f07cccefd1e");
  },
  mounted() {
    this.$refs.navall.className = "active";
  },
  watch: {},
  computed: {},
  filters: {},
};
</script>

<style scoped>
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(150px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.8s ease;
}
#content {
  /* height: calc(100% - 110px); */
  margin: 50px 0px 60px 0px;
  overflow-y: auto;
}
/* 导航栏 */
.nav {
  position: relative;
  left: 0;
  top: 0;
  z-index: 1;
}
.nav ul {
  background-color: #f6f7fb;
  width: 100%;
  justify-content: space-between;
  position: fixed;
  display: flex;
  overflow-x: auto;
  height: 45px;
}
.nav ul li {
  width: 80px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav .active {
  background-color: #fffffd;
  box-shadow: 3px 3px #efeef3;
  color: #6a9cd1;
}

/* 商品列表框 */
.proList {
  position: relative;
  margin-top: 50px;
  /* z-index: -50; */
}
.proList ul li {
  border-bottom: #f0f0f0 solid 2px;
  display: flex;
}
.left {
  width: 40%;
  height: 110px;
}
.left img {
  width: 100%;
  height: 100%;
}
.right {
  flex: 1;
  position: relative;
  width: 60%;
  text-align: left;
  padding-left: 10px;
}
.right h3 {
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 15px;
}
.right p {
  margin-bottom: 12px;
}
.right span {
  font-size: 20px;
  color: #ff5da4;
}
.right .btn1 {
  position: absolute;
  bottom: 8px;
  right: 15px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ff67b0;
  display: block;
}
.right .btn2 {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 8px;
  right: 5px;
  width: 65px;
  height: 20px;
  display: none;
}
.right .minus {
  font-size: 12px;
  text-align: center;
  float: left;
  width: 15px;
  height: 15px;
  line-height: 15px;
  border-radius: 50%;
  border: #ff67b0 solid 1px;
  color: #ff67b0;
}
.right .num {
  margin-left: 10px;
  margin-right: 10px;
  float: left;
  height: 15px;
}
.right .plus {
  float: left;
  font-size: 12px;
  text-align: center;
  width: 17px;
  height: 17px;
  line-height: 17px;
  border-radius: 50%;
  background-color: #ff67b0;
  color: #fff;
}
</style>