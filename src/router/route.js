import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    linkActiveClass: "active",
    history: createWebHashHistory(),
    routes: [
        { path: '/', redirect: '/colum' },
        { path: '/colum', component: () => import('@/components/Colum/index.vue') },
        { path: '/pie', component: () => import('@/components/pie/index.vue') },
        { path: '/line', component: () => import('@/components/line/index.vue') },
        { path: '/clound', component: () => import('@/components/CloundText/index.vue') },
        { path: '/china', component: () => import('@/components/China/index.vue') },
        { path: '/china/plane', component: () => import('@/components/China/plane.vue') }
    ]
},



)
export default router