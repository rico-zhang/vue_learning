<template>
  <div class="demo">
    <input type="text" v-model="query" />
    <transition-group
      tag="ul"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <li v-for="item of queryList" :key="item.name">{{ item.name }}</li>
    </transition-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      query: "",
      list: [
        { name: "rico" },
        { name: "jscheng" },
        { name: "shanshan" },
        { name: "chensicheng" },
      ],
    };
  },
  computed: {
    queryList() {
      return this.list.filter((item) => item.name.includes(this.query));
    },
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter(el, done) {
      Velocity(
        el,
        { opacity: 1, height: "24px" },
        { duration: 300, complete: done }
      );
    },
    leave(el, done) {
      Velocity(
        el,
        { opacity: 0, height: "0px" },
        { duration: 300, complete: done }
      );
    },
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  margin-block-start: 0;
  padding-inline-start: 0px;
}
/* .v-enter,
.v-leave-to {
  opacity: 0;
  height: 0px;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
.v-enter-leave,
.v-leave {
  opacity: 1;
  height: 24px;
} */
</style>