<template>
  <div class="demo">
    <button @click="handleClick">click me</button>
    <transition>
      <div class="box" v-if="show">hello world</div>
      <p class="box" v-else >hello rico</p>
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
    transition: all 3s;
}

.v-enter-to,
.v-leave{
    opacity: 1;
}
</style>