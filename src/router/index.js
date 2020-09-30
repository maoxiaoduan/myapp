import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        redirect: '/index',
        meta: {
            showFooter: true,
        }
    }, {
        path: '/index',
        name: 'Index',
        component: () =>
<<<<<<< HEAD
            import ("../views/fruitlist.vue"),
        meta: {
            showFooter: true,
        }

=======
            import ("../views/index.vue")
>>>>>>> 81c28415441b27dcc578c2917f01ae125ccb6249
    }, {
        path: '/showcat',
        name: 'Showcat',
        component: () =>
            import ("../views/showcat.vue"),
        meta: {
            showFooter: true,
        }

    }, {
        path: '/mine',
        name: 'Mine',
        component: () =>
            import ("../views/mine.vue"),
        meta: {
            showFooter: true,
        }

    }, {
        path: '/login',
        name: 'Login',
        component: () =>
            import ("../views/login.vue"),
        meta: {
            showFooter: false,
        }
    }, {
        path: '/mine/address',
        name: 'Address',
        component: () =>
            import ("../views/mine/address.vue"),
        meta: {
            showFooter: false,
        }
    }, {
        path: '/mine/details',
        name: 'Details',
        component: () =>
            import ("../views/mine/details.vue"),
        meta: {
            showFooter: false,
        }
    }],
    linkActiveClass: 'active'
})

export default router