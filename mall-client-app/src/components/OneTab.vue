<template>
  <div class="one-tab-wrapper" ref="oneTab">
    <div
      v-for="(item, index) of menuList"
      :key="item.title + index"
      class="tab-item"
      :class="{ active: activeIndex == index }"
      @touchend="scrollTo(index, $event)"
      @touchstart="move = false"
      @touchmove="move = true"
    >
      <div class="img-wrapper">
        <img :src="item.imgUrl" :alt="item.title" />
      </div>
      <div class="tab-title">
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import tool from '../utils/tools';

export default {
  data() {
    return {
      activeIndex: 0,
      move: false,
      menuList: [
        {
          title: '图书玩具',
          imgUrl:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg',
        },
        {
          title: '酒水冲调',
          imgUrl:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg',
        },
        {
          title: '时令水果',
          imgUrl:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg',
        },
        {
          title: '安心乳品',
          imgUrl:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg',
        },
        {
          title: '休闲零食',
          imgUrl:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg',
        },
        {
          title: '新鲜蔬菜',
          imgUrl:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg',
        },
        {
          title: '图书玩具',
          imgUrl:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg',
        },
        {
          title: '图书玩具',
          imgUrl:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg',
        },
        {
          title: '图书玩具',
          imgUrl:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg',
        },
        {
          title: '图书玩具',
          imgUrl:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg',
        },
        {
          title: '图书玩具',
          imgUrl:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg',
        },
      ],
    };
  },
  methods: {
    ...mapActions(['getSideList']),
    scrollTo(index, e) {
      if (this.move) return;
      this.activeIndex = index;
      const { oneTab } = this.$refs;
      const itemWidth = e.target.offsetWidth;
      const itemLeft = e.target.getBoundingClientRect().left;
      const wrapperWidth = oneTab.offsetWidth;
      //   oneTab.scrollLeft += itemWidth / 2 + itemLeft - wrapperWidth / 2;
      tool.moveTo(
        oneTab.scrollLeft,
        itemWidth / 2 + itemLeft - wrapperWidth / 2,
        oneTab,
        'scrollLeft',
      );
      this.getSideList(this.menuList[index].title);
    },
  },
  mounted() {
    this.getSideList(this.menuList[this.activeIndex].title);
  },
};
</script>

<style scoped lang="less">
.one-tab-wrapper {
  width: 375px;
  height: 104px;
  display: flex;
  overflow: auto;
  .tab-item {
    width: 50px;
    height: 70px;
    padding: 10px 5px;
    .img-wrapper {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid #fff;
      border-radius: 23px;
      img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
      }
    }

    .tab-title {
      text-align: center;
      font-size: 12px;
      margin-top: 5px;
    }
    &.active {
      .img-wrapper {
        border-color: #d13193;
      }
      .tab-title {
        color: #fff;
        background-color: #d13193;
        font-weight: bold;
        border-radius: 30px;
      }
    }
  }
  &::-webkit-scrollbar {
    width: 0;
    background: none;
  }
}
</style>
