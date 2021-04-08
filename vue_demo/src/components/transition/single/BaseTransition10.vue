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
    };
  },
  methods: {
    handleClick() {
      this.show = !this.show;
    },
    boforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      Velocity(el, { opacity: 1 }, { duration: 500 });
      Velocity(el, { rotateZ: 10 }, { duration: 300 });
      Velocity(el, { rotateZ: -10 }, { duration: 300 });
      Velocity(el, { rotateZ: 0 }, { duration: 300, complete: done });
    },
    afterEnter() {
      console.log("after");
    },
    enterCancelled() {},
    beforeLeave(el) {
        el.style.transformOrigin="left top";
    },
    leave(el,done) {
      Velocity(el, { translateX: '15px',rotateZ:"50deg"}, { duration: 500 });
      Velocity(el, { rotateZ:"100deg"}, { duration: 500,loop:2 });
      Velocity(el, { rotateZ:"45deg",translateX: '30px',translateY: '30px',opacity:0}, { duration: 500,complete:done });
        
    },
    afterLeave() {},
    leaveCancelled() {},
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