import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "./views/Home.vue";
//改为异步导入组件
// import Learn from "./views/Learn.vue";
// import Student from "./views/Student.vue";
// import About from "./views/About.vue";
// import Activity from "./views/Activity.vue";

Vue.use(VueRouter);

const routes = [{
    path: '/',
    redirect: '/home'
}, {
    path: '/home',
    component: Home,
    // alias:'/'
},
{
    path: '/learn',
    component: () => import('./views/Learn.vue')
}, {
    path: '/student',
    component: () => import('./views/Student.vue'),
    // components: {
    //     default: () => import('./views/Learn.vue'),
    //     student: () => import('./views/Student.vue')
    // }
}, {
    path: '/about',
    component: () => import('./views/About.vue')
}, {
    path: '/activity',
    redirect(to) {
        return { name: 'academic' }
    },
    component: () => import(/* webpackChunkName:'academic' */'./views/Activity.vue'),
    children: [
        // {
        //     path: '',
        //     component: () => import('./views/Academic.vue')
        // },
        {
            path: 'academic',
            name: 'academic',
            component: () => import(/* webpackChunkName:'academic' */ './views/Academic.vue')
        }, {
            path: 'personal',
            name: 'personal',
            component: () => import('./views/Personal.vue')
        }, {
            path: 'download',
            name: 'download',
            component: () => import('./views/Download.vue')
        }
    ]
}, {
    path: "/question/:id",
    name: "question",
    component: () => import('./views/Question.vue')
}
];

export default new VueRouter({ routes, mode: "history" })
