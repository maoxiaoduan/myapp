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
        },
        {
            path: '/index',
            name: 'Index',
            component: () =>
                import ("../views/index.vue"),
            meta: {
                showFooter: true,
                showHeader: true
            }
        },
        {
            path: '/detail',
            name: 'Detail',
            component: () =>
                import ("../views/detail.vue"),
            meta: {
                showFooter: false,
                showHeader: false
            }
        },
        {
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

        },
        {
            path: '/login',
            name: 'Login',
            component: () =>
                import ("../views/login.vue"),
            meta: {
                showFooter: false,
                // requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
            }
        },
        {
            path: '/mine/address',
            name: 'Address',
            component: () =>
                import ("../views/mine/address.vue"),
            meta: {
                showFooter: false,
                // requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
            }
        }, {
            path: '/mine/details',
            name: 'Details',
            component: () =>
                import ("../views/mine/details.vue"),
            meta: {
                showFooter: false,
                // requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
            }
        }, {
            path: '/mine/add',
            name: 'Add',
            component: () =>
                import ("../views/mine/add.vue"),
            meta: {
                showFooter: false,
                // requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
            }
        }
    ],
    linkActiveClass: 'active'
})

export default router