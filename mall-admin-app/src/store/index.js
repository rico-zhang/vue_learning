import Vue from 'vue';
import Vuex from 'vuex';
import { getUserCookie, setUserCookie, removeUserCookie } from '@/utils/userCookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 用于切换菜单的闭合状态，false:不闭合  true:闭合
    collapsed: false,

    // 用户信息
    /* {
      userName: '',
      appkey: '',
      role: '',
      eamail: '',
    }, */
    user: getUserCookie(),
    // 菜单路由
    menuRoutes: [],
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    setUserInfo(state, userInfo) {
      state.user = userInfo;
      setUserCookie(userInfo);
    },
    logout(state) {
      state.user = {
        username: '', appkey: '', role: '', email: '',
      };
      removeUserCookie();
    },
    changeMenuRoutes(state, menuRoutes) {
      state.menuRoutes = menuRoutes;
    },
  },
  actions: {
    changeCollapsed({ commit }) {
      commit('changeCollapsed');
    },
    setUserInfo({ commit }, userInfo) {
      commit('setUserInfo', userInfo);
    },
    logout({ commit }) {
      commit('logout');
    },
    changeMenuRoutes({ commit }, menuRoutes) {
      commit('changeMenuRoutes', menuRoutes);
    },
  },
  modules: {
  },
});
