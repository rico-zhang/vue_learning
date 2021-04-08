<template>
  <div class="demo">
    <button @click="handleClick">click me</button>
    <transition
      :duration="{ enter: 5000, leave: 8000 }"
      enter-active-class="animate__animated  animate__bounceInUp v-enter-active"
      leave-active-class="animate__animated  animate__bounceOutDown v-leave-active"
    >
      <div class="box" v-if="show">Hello World</div>
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
/*duration 的使用
 */
button {
  margin-bottom: 10px;
}
.box {
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  border: 1px solid red;
  color: red;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 30s;
}

.v-enter-to,
.v-leave {
  opacity: 1;
}
</style>