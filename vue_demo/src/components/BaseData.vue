<script>
import BaseChild from "./BaseChiild.vue";
import BaseIfFor from "./BaseIfFor.vue";
import BaseSlot from "./BaseSlot.vue";
import  BaseJSX  from "./BaseJSX.vue";
export default {
  data() {
    return {
      isc: "green",
    };
  },

  components: {
    BaseChild,
  },
  render(h) {
    return h(
      "div",
      {
        class: {
          bar: true,
          foo: false,
        },
        style: {
          backgroundColor: "red",
          height: "20px",
          color: this.isc,
        },
        attrs: {
          index: "1",
        },
        domProps: {
          id: "data1",
        },
        on: {
          click: function (e) {
            console.log(this, e);
          },
        },
      },
      [
        "xxx",
        h(BaseChild, {
          props: {
            name: "base-child组件",
          },
          nativeOn: {
            click: function (e) {
              console.log(e);
            },
          },
        }),
        h(BaseIfFor, {
          props: {
            items: [1, 2],
          },
        }),
        h(BaseSlot, [
          h("div", { slot: "default" }, "默认插槽"),
          h("div", { slot: "header" }, "具名header插槽"),
        ]),
        h(BaseJSX),
      ]
    );
  },
};
</script>