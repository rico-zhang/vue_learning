<template>
  <div class="demo">
    <div class="btns">
      <button @click="addClick">add</button>
      <button @click="removeClick">remoev</button>
      <button @click="shuffleClick">shuffle</button>
    </div>

    <transition-group tag="ul">
      <li v-for="item of list" :key="item">{{ item }}</li>
    </transition-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      next: 11,
    };
  },
  methods: {
    addClick() {
      const index = Math.floor(Math.random() * this.list.length);
      this.list.splice(index, 0, this.next++);
    },
    removeClick() {
      const index = Math.floor(Math.random() * this.list.length);
      this.list.splice(index, 1);
    },
    shuffleClick() {
      this.list.sort(() => Math.random() - 0.5);
    },
  },
};
</script>
<style scoped>
li {
  list-style: none;
  display: inline-block;
  margin-right: 10px;
}
.btns {
  margin-bottom: 10px;
}
.btns button {
  margin-right: 10px;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.v-enter-active,
.v-leave-active {
  transition: all 1s;
}
.v-enter-leave,
.v-leave {
  opacity: 1;
  transform: translateY(0px);
}
.v-move {
  transition: transform 0.3s;
}
</style>