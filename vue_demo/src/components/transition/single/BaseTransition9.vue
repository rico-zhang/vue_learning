<template>
  <div class="demo">
    <button @click="handleClick">click me</button>
    <transition
      :class="false"
      @before-enter="boforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
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
      x: 200,
    };
  },
  methods: {
    handleClick() {
      this.show = !this.show;
    },
    boforeEnter(el) {
      console.log("beforeEnter");
      el.style.transform = `translateX(${this.x}px)`;
    },
    enter(el, done) {
      // done.canceled=true; 取消动画  会在下一次动画开始时执行enterCancelled
      console.log("enter");
      const timer = setInterval(() => {
        this.x -= 10;
        if (this.x <= 0) {
          this.x = 0;
          clearInterval(timer);
          el.style.transform = `translateX(${this.x}px)`;
          done();
          return;
        }
        el.style.transform = `translateX(${this.x}px)`;
      }, 10);
    },
    afterEnter() {
      this.x = 200;
      console.log("afterEnter");
    },
    enterCancelled() {
      console.log("enterCancelled");
    },
    beforeLeave() {
      console.log("beforeLeave");
    },
    leave() {
      console.log("leave");
    },
    afterLeave() {
      console.log("afterLeave");
    },
    leaveCancelled() {
      console.log("leaveCancelled");
    },
  },
};
</script>

<style scoped>
/* 自定义class name */
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
</style>