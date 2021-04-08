import Vue from 'vue';
import Vuex from 'vuex';
import api from '../api/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sideList: [],
    showContent: false,
    size: 5,
    goodsList: [],
    type: null,
    counterMap: {},
  },
  mutations: {
    setSideList(state, list) {
      state.sideList = list;
    },
    setShowContent(state, bool) {
      state.showContent = bool;
    },
    setGoodsList(state, list) {
      state.goodsList = [...state.goodsList, ...list];
    },
    resetGoodsList(state) {
      state.goodsList = [];
    },
    setGoodsType(state, type) {
      state.type = type;
    },
    setCounterMap(state, map) {
      state.counterMap = map;
    },
    storageChange(state, { id, value }) {
      if (state.counterMap[id]) {
        if (value === -1 && state.counterMap[id] === 1) {
          Vue.delete(state.counterMap, id);
        } else {
          Vue.set(state.counterMap, id, state.counterMap[id] + value);
        }
      } else {
        Vue.set(state.counterMap, id, 1);
      }
      localStorage.setItem('goods', JSON.stringify(state.counterMap));
    },

  },
  actions: {
    async getSideList({ commit }, type) {
      commit('setShowContent', false);
      const value = await api.getSideList(type);
      commit('setSideList', value);
      commit('setShowContent', true);
    },
    async getGoodsList({ state, commit }, options) {
      const { page, sort } = options;
      const type = options.type || state.type;
      const { list, total } = await api.getGoodsList(type, page, state.size, sort);
      commit('setGoodsList', list);
      commit('setGoodsType', type);
      return total <= state.goodsList.length;
    },
  },
  modules: {
  },
});
