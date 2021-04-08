

<script>
/*
<template> 
  <div class="slot">
    <slot name="header"></slot>
    <slot></slot>
  </div>
</template> */
export default {
  render(h) {
    return h(
      "div",
      {
        class: "slot",
      },
      [this.$slots.header, this.$slots.default]
    );
  },
};
</script>