<template>
  <div class="demo">
    <button @click="handleClick">click me</button>
    <reuse-transition1> 
        <div v-if="show">hello world</div>
    </reuse-transition1>

     <reuse-transition1> 
        <div v-if="show">hello world</div>
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