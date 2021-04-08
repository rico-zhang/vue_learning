<template>
  <ul class="tree">
    <li class="tree-node" v-for="(node, index) of data" :key="node.label">
      <i
        class="iconfont"
        :class="
          node.children
            ? isShowArr[index]
              ? 'icon-caret-down'
              : 'icon-youjiantou'
            : ''
        "
      ></i>
      <span class="node-label" @click="labelClick(index)">{{
        node.label
      }}</span>
      <keep-alive>
        <base-tree v-if="isShowArr[index]" :data="node.children" />
      </keep-alive>
    </li>
  </ul>
</template>
<script>
export default {
  name: "base-tree",
  props: {
    data: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      isShowArr: [],
    };
  },
  methods: {
    labelClick(index) {
      this.$set(this.isShowArr, index, !this.isShowArr[index]);
    },
  },
};
</script>

<style scoped>
@import url("http://at.alicdn.com/t/font_2399286_wkdh1o9n1ne.css");

ul {
  list-style: none;
}

.tree-node {
  font-size: 14px;
  cursor: pointer;
}
.tree-node .iconfont {
  color: #c0c4cc;
  font-size: 12px;
  margin-right: 5px;
  vertical-align: middle;
}
.tree-node .node-label {
  font-size: 14px;
  color: #606266;
  vertical-align: middle;
}
</style>
