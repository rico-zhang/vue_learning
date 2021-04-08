<template>
  <div class="demo">
    <button @click="handleClick">click me</button>
    <transition mode="out-in">
      <component :is="cmpName"></component>
    </transition>
  </div>
</template>

<script>
import MulTransition31 from "./MulTransition3-1";
import MulTransition32 from "./MulTransition3-2";
export default {
  data() {
    return {
      cmpName: "MulTransition31",
    };
  },
  methods: {
    handleClick() {
      if (this.cmpName == "MulTransition31") this.cmpName = "MulTransition32";
      else this.cmpName = "MulTransition31";
    },
  },
  components: {
    MulTransition31,
    MulTransition32,
  },
};
</script>
<style scoped>
.box {
  background-color: red;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: all 1s;
}

.v-enter-to,
.v-leave {
  opacity: 1;
}
</style>