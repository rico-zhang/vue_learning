<script>
export default {
  props: {
    leavel: {
      type: Number,
      require: true,
    },
  },
  render(h) {
    return h("h" + this.leavel,this.$slots.default);
  },
};
</script>