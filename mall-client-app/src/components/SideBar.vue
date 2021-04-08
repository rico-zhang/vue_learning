<template>
  <div class="sidebar-wrapper" ref="side">
    <div
      v-for="(item, index) of sideList"
      :key="item"
      :class="{ active: index == activeIndex }"
      @touchend="scrollTo(index, $event)"
      @touchstart="move = false"
      @touchmove="move = true"
    >
      {{ index == 0 ? "全部" : item }}
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import tool from '../utils/tools';

export default {
  data() {
    return {
      activeIndex: 0,
      move: false,
    };
  },
  computed: {
    ...mapState({
      sideList: (state) => state.sideList,
    }),
  },
  methods: {
    ...mapMutations(['resetGoodsList']),
    ...mapActions(['getGoodsList']),
    scrollTo(index, e) {
      if (this.move) return;
      this.activeIndex = index;
      const { side } = this.$refs;
      const sonTop = e.target.getBoundingClientRect().top;
      const sonHeight = e.target.offsetHeight;
      const pTop = side.getBoundingClientRect().top;
      const pHeight = side.offsetHeight;
      //   side.scrollTop += sonTop + sonHeight / 2 - pTop - pHeight / 2;
      tool.moveTo(
        side.scrollTop,
        sonTop + sonHeight / 2 - pTop - pHeight / 2,
        side,
        'scrollTop',
      );
      this.resetGoodsList();
      this.getGoodsList({ type: this.sideList[index], page: 1, sort: 'all' });
    },
  },
  mounted() {
    this.resetGoodsList();
    this.getGoodsList({ type: this.sideList[0], page: 1, sort: 'all' });
  },
};
</script>

<style lang="less" scoped>
.sidebar-wrapper {
  position: fixed;
  left: 0;
  width: 79px;
  top: 135px;
  bottom: 50px;
  overflow: auto;
  background: #f8f8f8;
  div {
    width: 79px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    position: relative;
  }
  .active {
    font-weight: bold;
    color: #ff1a90;
  }
  .active::before {
    content: "";
    position: absolute;
    width: 6px;
    height: 18px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: #ff1a90;
  }
  &::-webkit-scrollbar {
    width: 0;
  }
}

</style>
