import VueRouter from 'vue-router';

import Vue from 'vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: () => import('./views/Home.vue')
    },
    {
        path: '/learn',
        component: () => import('./views/Learn.vue')
    },
    {
        path: '/student',
        component: () => import('./views/Student.vue')
    },
    {
        path: '/personal',
        component: () => import('./views/Personal.vue')
    },
    {
        path: '/activity',
        component: () => import('./views/Activity.vue')
    },
    {
        path: '/about',
        component: () => import('./views/About.vue')
    },
]
export default new VueRouter({ routes, mode: 'hash' });