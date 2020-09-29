import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        redirect: '/index'
    }, 
    {
        path: '/index',
        name: 'Index',
        component: () =>
            import ("../views/fruitlist.vue")
    }, {
        path: '/cart',
        name: 'Cart',
        component: () =>
            import ("../views/cart.vue")

    },
    {
        path:'/CartOrderFrom',
        component:()=>import('../views/CartOrderFrom.vue')
    },
     {
        path: '/mine',
        name: 'Mine',
        component: () =>
            import ("../views/mine.vue")

    },
],
    linkActiveClass: 'active'
})

export default router