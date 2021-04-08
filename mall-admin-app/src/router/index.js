import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';

import getMenuRoute from '@/utils/permission';
import Home from '../views/layout/Home.vue';
import Login from '../views/layout/Login.vue';

Vue.use(VueRouter);

const asyncRouterMap = [{
  path: '/product',
  name: 'Product',
  meta: {
    title: '商品',
    icon: 'inbox',
    hidden: false,
  },
  component: Home,
  children: [{
    path: 'list',
    name: 'ProductList',
    meta: {
      title: '商品列表',
      icon: 'unordered-list',
      hidden: false,
    },
    component: () => import('@/views/page/ProductList.vue'),
  }, {
    path: 'add',
    name: 'ProductAdd',
    meta: {
      title: '添加商品',
      icon: 'file-add',
      hidden: false,
    },
    component: () => import('@/views/page/ProductAdd.vue'),
  }, {
    path: 'edit/:id',
    name: 'ProductEdit',
    meta: {
      title: '编辑商品',
      icon: 'file-add',
      hidden: true,
    },
    component: () => import('@/views/page/ProductAdd.vue'),
  }, {
    path: 'category',
    name: 'Category',
    meta: {
      title: '类目管理',
      icon: 'project',
      hidden: false,
    },
    component: () => import('@/views/page/Category.vue'),
  }],
}];

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页',
      icon: 'home',
      hidden: false,
    },
    children: [
      {
        path: '/index',
        name: 'Index',
        meta: {
          title: '统计',
          icon: 'number',
          hidden: false,
        },
        component: () => import('@/views/page/Index.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '登录',
      hidden: true,
    },
  },
];

const router = new VueRouter({
  routes,
});

let isAddRoutes = false;
router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    const { user } = store.state;
    if (user.appkey && user.appkey && user.role) {
      const menuRoutes = getMenuRoute(user.role, asyncRouterMap);
      if (!isAddRoutes) {
        isAddRoutes = true;
        // 这里待考虑 将router.addRoutes(menuRoutes);写在then外面就不行 首次进入http://localhost:8080/#/product/list 页面空白
        store.dispatch('changeMenuRoutes', routes.concat(menuRoutes)).then(() => {
          router.addRoutes(menuRoutes);
          next();
        });
      }
      return next();
    }
    return next('/login');
  } return next();
});

export default router;
