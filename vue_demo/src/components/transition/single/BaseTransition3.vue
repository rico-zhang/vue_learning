<template>
  <div class="demo">
    <button @click="handleClick">click me</button>
    <transition>
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
/* 
动画 animation
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


.v-enter-active {
 animation: move 3s ;
}

.v-leave-active {
  animation: move 3s reverse;
}


@keyframes move {
  0% {
    opacity: 0;
    transform: translateX(200px);
  }
  50% {
    opacity: 0.5;
    transform: translateX(100px);
  }
  100% {
    opacity: 0.1;
    transform: translateX(0);
  }
}
</style>