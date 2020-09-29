<!--  -->
<template>
<div class='wrap'>
    <div class="nav">
        
      </div>
    <ul>
        <li v-for="item in GoodsInfo" :key="item._id">
            <div class="tu"  :key='url'>
                <img  :src="item.imgUrl" alt="">
            </div>
            <div class="right">
                <div class="text">
                    <h3>{{item.name}}</h3>
                    <p>{{item.title}}</p>
                    <i>￥<span>{{item.price}}</span></i>
                </div>
                <div class="shopbtn">加入购物车</div>
            </div>
        </li>
      
</ul>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import axios from 'axios'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
return {
    GoodsInfo:[],
    // imgUrl:[]

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    getGoodsInfo(){
        axios.get('http://192.168.15.16:5000/main/all').then(mon=>{
            console.log(mon.data.list)
            this.GoodsInfo=mon.data.list
            for (let i = 0; i < mon.data.list.length; i++) {
                   mon.data.list[i].imgUrl='http://192.168.15.16:5000/'+mon.data.list[i].imgUrl
            }
    
         
               
        })
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    this.getGoodsInfo()
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
.wrap{
       margin-top: 80px;
       margin-bottom: 40px;
        .nav{
            width: 100%;
            height: 40px;
            background-color:#000;
        }     
        ul{
            li{
                height: 130px;
                width: 100%;
                border-bottom: 1px solid #cecece;
                display:flex;
                .tu{
                    height: 100%;
                    flex:3;
                    img{
                        width: 104px;
                        height: 104px;
                       margin-left: 20px;
                       margin-top: 10px;
                    }
                }
                .right{
                    display: flex;
                    flex:7;
                    padding-left: 10px;
                    .text{
                        margin-top: 25px;
                        margin-left: 20px;
                        flex: 4;
                        h3{
                            font-weight: 600;
                            margin-bottom: 15px;
                        }
                        p{
                            font-size: 10px;
                            margin-bottom: 15px;
                        }
                        i{
                            span{
                                color: #ff65ff;
                                font-size: 20px;
                                font-weight: 600px;
                            }
                        }
                    }
                    .shopbtn{
                        flex: 3;
                        
                        width: 100px;
                        height: 30px;
                        background: orange;
                        border-radius: 50px;
                        color: #ffffff;
                        text-align: center;
                        line-height: 30px;
                        margin-top: 85px;
                    }
                }
            }
        }
    }

</style>