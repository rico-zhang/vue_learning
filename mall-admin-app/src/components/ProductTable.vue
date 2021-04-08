<template>
  <a-table
    :columns="columns"
    :data-source="tableData"
    :pagination="page"
    @change="changePage"
  >
    <div slot="operation" slot-scope="text, record">
      <a-button @click="editProduct(record)">编辑</a-button>
      <a-button @click="removeProduct(record)">删除</a-button>
    </div>
  </a-table>
</template>
<script>
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    align: 'center',
  },
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
    ellipsis: true,
    align: 'center',
  },
  {
    title: '描述',
    dataIndex: 'desc',
    key: 'desc',
    ellipsis: true,
    align: 'center',
  },
  {
    title: '类目',
    dataIndex: 'category',
    key: 'category',
    ellipsis: true,
    customRender(text, record) {
      return { children: record.categoryName };
    },
    align: 'center',
  },

  {
    title: '预售价格',
    dataIndex: 'price',
    key: 'price',
    align: 'center',
  },
  {
    title: '折扣价格',
    dataIndex: 'price_off',
    key: 'price_off',
    align: 'center',
  },
  {
    title: '标签',
    dataIndex: 'tags',
    key: 'tags',
    align: 'center',
  },
  {
    title: '限制购买数量',
    dataIndex: 'inventory',
    key: 'inventory',
    align: 'center',
  },
  {
    title: '上架状态',
    dataIndex: 'status',
    key: 'status',
    align: 'center',
  },
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    scopedSlots: { customRender: 'operation' },
    width: 200,
    align: 'center',
  },
];

export default {
  data() {
    return {
      columns,
    };
  },
  props: {
    data: {
      type: Array,
      default: () => [],
      require: true,
    },
    page: Object,
  },
  computed: {
    tableData() {
      return this.data.map((item) => Object.assign(item, { key: item.id }));
    },
  },
  methods: {
    changePage(page) {
      this.$emit('changePage', page);
    },
    editProduct(record) {
      this.$emit('edit', record);
    },
    removeProduct(record) {
      this.$emit('remove', record);
    },
  },
};
</script>
