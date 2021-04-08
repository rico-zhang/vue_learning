<template>
  <div class="list-wrapper">
    <div class="list-header van-hairline--top-bottom">
      <div :class="{ active: type === 'all' }" @click="changeSoft('all')">
        综合
      </div>
      <div :class="{ active: type === 'sale' }" @click="changeSoft('sale')">
        销量
      </div>
      <div
        class="price"
        :class="{
          'price-up': type === 'price-up',
          'price-down': type === 'price-down',
        }"
        @click="changeSoft('price')"
      >
        价格
      </div>
    </div>
    <div class="list-content">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
          :immediate-check="false"
        >
          <good-card
            v-for="(item,index) of goodsList"
            :key="item.id + index"
            v-bind="item"
            :num="counterMap[item.id]"
          ></good-card>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import GoodCard from './GoodCard.vue';

export default {
  data() {
    return {
      type: 'price-up',
      refreshing: false,
      loading: false,
      finished: false,
      page: 1,
    };
  },
  methods: {
    ...mapMutations(['resetGoodsList']),
    ...mapActions(['getGoodsList']),
    changeSoft(type) {
      if (type === 'all') {
        this.type = 'all';
      } else if (type === 'sale') {
        this.type = 'sale';
      } else if (type === 'price') {
        if (this.type === 'price-up') {
          this.type = 'price-down';
        } else {
          this.type = 'price-up';
        }
      } else {
        this.type = 'all';
      }
      this.onRefresh();
    },
    async onRefresh() {
      // 清空列表数据
      this.page = 1;
      this.resetGoodsList();
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    async onLoad() {
      if (!this.refreshing) {
        this.page += 1;
      }
      this.finished = await this.getGoodsList({
        page: this.page,
        sort: this.type,
      });
      this.refreshing = false;
      this.loading = false;
    },
  },
  computed: {
    ...mapState(['goodsList', 'counterMap']),
  },
  components: {
    GoodCard,
  },
};
</script>

<style lang="less" scoped>
.list-wrapper {
  .list-header {
    width: 296px;
    position: relative;
    top: 0;
    left: 79px;
    box-sizing: border-box;
    padding: 0 8px;
    display: flex;
    justify-content: flex-end;
    > div {
      width: 50px;
      height: 25px;
      line-height: 25px;
      text-align: center;
      color: #cecece;
    }
    .active,
    .price-up,
    .price-down {
      color: #ff1a90;
      font-weight: bold;
    }
    .price {
      position: relative;
    }
    .price::after {
      content: "";
      border: 4px solid transparent;
      border-top-color: #aaa;
      position: absolute;
      bottom: 4px;
      right: 0;
    }
    .price::before {
      content: "";
      border: 4px solid transparent;
      border-bottom-color: #aaa;
      position: absolute;
      top: 4px;
      right: 0;
    }
    .price-up::before {
      border-bottom-color: #ff1a90;
    }
    .price-down::after {
      border-top-color: #ff1a90;
    }
  }
  .list-content {
    width: 296px;
    position: fixed;
    top: 170px;
    right: 0;
    bottom: 50px;
    overflow: auto;
  }
  .van-pull-refresh {
    overflow: unset !important;
  }
}
</style>
