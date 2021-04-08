<template>
  <div class="demo">
    <button @click="handleClick">click me</button>
    <transition-group>
      <div v-if="show" key="world" class="box">HelloWorld</div>
      <div v-if="show" key="rico" class="box">HelloRico</div>
    </transition-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  methods: {
    handleClick() {
      this.show = !this.show;
    },
  },
};
</script>
<style scoped>
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: all 1s;
}
.v-enter-leave,
.v-leave {
  opacity: 1;
}
</style>