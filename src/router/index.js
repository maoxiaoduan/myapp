import Vue from 'vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter)
const router=new vueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            redirect:'/index'
        },
        {
            path:'/index',
            component:()=>import('../views/index.vue'),
            meta:{
                keepalive:true
            }
        },
        {
            path:'/cart',
            component:()=>import('../views/cart.vue')
        },
        {
            path:'/mine',
            component:()=>import('../views/mine.vue')
        },
        {
            path:'/CartOrderFrom',
            component:()=>import('../views/CartOrderFrom.vue')
        },
    ],
    linkActiveClass:'active'

})
export default router