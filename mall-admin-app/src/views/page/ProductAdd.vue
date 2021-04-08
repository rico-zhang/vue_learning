<template>
  <div class="product-detail">
    <a-steps :current="current" class="product-step">
      <a-step v-for="item in steps" :key="item.title" :title="item.title" />
    </a-steps>
    <div class="steps-content">
      <keep-alive>
        <component
          :is="steps[current].cmpName"
          :form="form"
          @next="next"
          @prev="prev"
          @finish="finish"
        />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import BasicDetail from '@/components/BasicDetail.vue';
import SaleDetail from '@/components/SaleDetail.vue';

import productApi from '@/api/product';

export default {
  data() {
    return {
      current: 0,
      steps: [
        {
          title: '填写基本商品信息',
          cmpName: 'BasicDetail',
        },
        {
          title: '填写商品销售信息',
          cmpName: 'SaleDetail',
        },
      ],
      form: {
        title: '',
        desc: '',
        category: '',
        c_item: '',
        tags: [],
        price: 0,
        price_off: 0,
        unit: '',
        inventory: 0,
        images: [],
      },
    };
  },
  methods: {
    next() {
      this.current += 1;
    },
    prev() {
      this.current -= 1;
    },
    finish() {
      if (this.$route.params.id) {
        productApi.edit(this.form).then(() => {
          this.$message.success('修改成功');
          this.$router.push({ name: 'ProductList' });
        });
      } else {
        productApi.add(this.form).then(() => {
          this.$message.success('新增成功');
          this.$router.push({ name: 'ProductList' });
        });
      }
    },
  },
  components: {
    BasicDetail,
    SaleDetail,
  },
  created() {
    const { id } = this.$route.params;
    if (id) {
      // 如果有id 说明是编辑 没有id 说明是新增
      productApi.detail(id).then((res) => {
        this.form = res;
      });
    }
  },
};
</script>
<style scoped lang="less">
.product-detail {
  .product-step {
    width: 50%;
    margin: 20px auto;
  }
  .steps-content {
    margin-top: 16px;
    border: 1px dashed #e9e9e9;
    border-radius: 6px;
    background-color: #fafafa;
    min-height: 200px;
    text-align: center;
    padding-top: 80px;
  }

  .steps-action {
    margin-top: 24px;
  }
}
</style>
