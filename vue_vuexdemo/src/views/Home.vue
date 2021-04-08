<template>
  <div class="home">
    <button @click="handleClick">click</button>
    首页 {{ count }} {{ doubleCount }}
    {{ addNumCount(3) }}
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  created() {
    console.log(this.$store.state);
  },
  computed: {
    //    ...mapState(['count'])

    // ...mapState({
    //   count: (state) => state.count,
    // }),

    ...mapState({
      count: "count",
    }),
    ...mapGetters(["doubleCount", "addNumCount"]),
  },
  methods: {
    handleClick() {
      //   this.$store.state.count++;
      this.$store.commit("countIncrement");
      //
      //   this.countIncrement();
    },
    ...mapMutations(["countIncrement"]),
  },
};
</script>