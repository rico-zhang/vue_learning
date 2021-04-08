<template>
  <div class="demo">
    <button @click="handleClick">click me</button>
    <reuse-transition1> 
        <div class="box" v-if="show" key="world">hello world</div>
        <div class="box" v-else key="rico">hello rico</div>
    </reuse-transition1>
  </div>
</template>

<script>
import ReuseTransition1 from "./ReuseTransition1.vue";
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
  components: {
    ReuseTransition1,
  },
};
</script>
<style scoped>
.box{
    background-color: red;
}
</style>