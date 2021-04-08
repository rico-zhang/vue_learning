<template>
  <div class="classify-wrapper">
    <div class="search-btn">
      <van-icon name="search"></van-icon>
      <div>苹果特价一元一斤</div>
    </div>
    <one-tab></one-tab>
    <template v-if="showContent">
      <side-bar></side-bar>
      <goods-list></goods-list>
    </template>
    <van-loading size="2rem" vertical v-else />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import OneTab from '../components/OneTab.vue';
import SideBar from '../components/SideBar.vue';
import GoodsList from '../components/GoodsList.vue';

export default {
  computed: {
    ...mapState(['showContent']),
  },
  components: {
    OneTab,
    SideBar,
    GoodsList,
  },
};
</script>

<style scoped lang="less">
.classify-wrapper {
  width: 375px;
  .search-btn {
    width: 355px;
    height: 33px;
    line-height: 33px;
    background-color: #eee;
    margin: 11px auto 0;
    border-radius: 10px;
    font-size: 14px;
    text-align: center;
    color: #a1a1a1;
    > * {
      display: inline-block;
      vertical-align: middle;
    }
  }
}
</style>
