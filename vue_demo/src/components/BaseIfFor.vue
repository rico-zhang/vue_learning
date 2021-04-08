<script>
export default {
  props: {
    items: {
      type: Array,
      require: true,
    },
  },

  render(h) {
    if (this.items.length > 0) {
      return h(
        "ul",
        this.items.map((item) =>
          h(
            "li",
            {
              key: item,
              ref: "li",
              refInFor: true
            },
            item
          )
        )
      );
    } else {
      return h("p", "no items");
    }
  },
};

</script>