<template>
  <div class="demo">
    <button @click="handleClick">click me</button>
    <transition mode="out-in">
      <div class="box" v-if="show" key="world">hello world</div>
      <div class="box" v-else key="rico">hello rico</div>
    </transition>
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
.box{
    background-color: red;
}
.v-enter,
.v-leave-to{
    opacity: 0;
}
.v-enter-active,
.v-leave-active{
    transition: all 1s;
}

.v-enter-to,
.v-leave{
    opacity: 1;
}
</style>