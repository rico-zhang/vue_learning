<template>
  <div class="basic-detail">
    <a-form-model
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 13 }"
      ref="ruleForm"
      :model="form"
      :rules="rules"
    >
      <a-form-model-item label="标题" required prop="title">
        <a-input v-model="form.title" />
      </a-form-model-item>
      <a-form-model-item label="商品描述" prop="desc">
        <a-input v-model="form.desc" />
      </a-form-model-item>
      <a-form-model-item label="商品类目" required prop="category">
        <a-select
          v-model="form.category"
          placeholder="请选择商品类目"
          @change="categoryChange"
        >
          <a-select-option v-for="c of categoryList" :value="c.id" :key="c.id">
            {{ c.name }}
          </a-select-option>
        </a-select>
        <a-select v-model="form.c_item" placeholder="请选择子类目">
          <a-select-option v-for="ci of categoryItems" :value="ci" :key="ci">
            {{ ci }}
          </a-select-option>
        </a-select>
      </a-form-model-item>

      <a-form-model-item label="商品标签" required prop="tags">
        <a-select
          mode="tags"
          placeholder="Please select"
          :default-value="['包邮,最晚次日达']"
          v-model="form.tags"
        >
          <a-select-option value="包邮,最晚次日达">
            包邮,最晚次日达
          </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="next()"> 下一步 </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
import categoryApi from '@/api/category';

export default {
  data() {
    return {
      categoryList: [],
      categoryItems: [],
      rules: {},
    };
  },
  props: ['form'],
  methods: {
    next() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$emit('next');
          return true;
        }
        return false;
      });
    },
    categoryChange() {
      this.form.c_item = '';
    },
  },
  created() {
    categoryApi.list().then((res) => {
      this.categoryList = res.data;
    });
  },
  watch: {
    'form.category': {
      handler() {
        this.categoryItems = this.categoryList.find(
          (item) => item.id === this.form.category,
        ).c_items;
      },
    },
  },
};
</script>
