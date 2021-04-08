<template>
  <div id="app">
    <div class="nav-box">
      <div class="logo" @click="handleClick">渡一教育</div>
      <div class="nav-list">
        <router-link to="/home">首页</router-link>
        <router-link to="/learn">课程学习</router-link>
        <router-link to="/student">学员展示</router-link>
        <router-link to="/about">关于</router-link>
        <router-link to="/activity">社区</router-link>
      </div>
    </div>
    <div class="container">
      <transition>
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    handleClick() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.nav-box {
  display: flex;
  justify-content: space-between;
  height: 60px;
  line-height: 60px;
  background-color: #3385ff;
  color: #fff;
}

.nav-list a {
  margin-left: 40px;
  color: inherit;
  text-decoration: none;
}

.container {
  margin-top: 60px;
}
.nav-box,
.container {
  padding-left: 200px;
  padding-right: 200px;
}
.router-link-active {
  font-weight: 700;
}

.v-enter {
  transform: translateX(300px);
}

.v-enter-active {
  transition: all 1s;
}

.v-enter-to {
  transform: translateX(0);
}
</style>
