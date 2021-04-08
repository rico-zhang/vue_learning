<template>
  <div class="product-list">
    <search-box :categoryList="categoryList" @submit="submit" />
    <a-button class="product-add-btn">
      <router-link :to="{ name: 'ProductAdd' }">新增商品</router-link>
    </a-button>
    <product-table
      :data="tableData"
      :page="page"
      @changePage="changePage"
      @edit="edit"
      @remove="remove"
    />
  </div>
</template>

<script>
import SearchBox from '@/components/Search.vue';
import ProductTable from '@/components/ProductTable.vue';

import productApi from '@/api/product';
import categoryApi from '@/api/category';

export default {
  data() {
    return {
      searchForm: {},
      tableData: [],
      defaultPage: {
        current: 1,
        pageSize: 5,
        showSizeChanger: true,
        total: 1,
        pageSizeOptions: ['5', '10', '20', '30', '40'],
      },
      page: {},
      categoryList: [],
      categoryMap: new Map(),
    };
  },
  components: {
    SearchBox,
    ProductTable,
  },
  methods: {
    submit(form) {
      this.searchForm = form;
      this.page = this.defaultPage;
      this.getTableData();
    },
    getTableData() {
      return productApi
        .list({
          page: this.page.current,
          size: this.page.pageSize,
          ...this.searchForm,
        })
        .then((res) => {
          this.page.total = res.total;
          this.tableData = res.data.map((item) => Object.assign(item, {
            categoryName: this.categoryMap.get(item.category),
          }));
        });
    },
    changePage(page) {
      this.page = page;
      this.getTableData();
    },
    getCategoryList() {
      return categoryApi.list().then((res) => {
        this.categoryList = res.data;
        const map = this.categoryList.map((item) => [item.id, item.name]);
        this.categoryMap = new Map(map);
      });
    },
    edit(record) {
      this.$router.push({ name: 'ProductEdit', params: { id: record.id } });
    },
    remove(record) {
      this.$confirm({
        title: '删除',
        content: () => (
          <div style="color:red">确认删除标题为{record.title}的产品吗</div>
        ),
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk: () => {
          productApi.remove({ id: record.id }).then(() => {
            this.getTableData();
          });
        },
        onCancel: () => {},
      });
    },
  },
  async created() {
    this.page = this.defaultPage;
    await this.getCategoryList();
    this.getTableData();
  },
};
</script>

<style scoped lang="less">
.product-list {
  position: relative;
  .product-add-btn {
    position: absolute;
    right: 10px;
    top: 14px;
  }
}
</style>
