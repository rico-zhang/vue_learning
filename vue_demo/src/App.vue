<template>
  <div id="app">
    <reuse-transition/>
  </div>
</template>


<script>
// <base-leavel :leavel="1">标题</base-leavel>
//     <base-leavel :leavel="2">标题</base-leavel>
//     <base-leavel :leavel="3">标题</base-leavel>
//     <base-leavel :leavel="4">标题</base-leavel>
//     <base-leavel :leavel="5">标题</base-leavel>
//     <base-leavel :leavel="6">标题</base-leavel>
//     <base-data/>
import HelloWorld from "./components/HelloWorld.vue";
import BaseLeavel from "./components/BaseLeavel.vue";
import BaseData from "./components/BaseData.vue";
import BaseTransition from "./components/transition/single/BaseTransition10.vue";
import MulTransition from'./components/transition/multiple/MulTransition3.vue';
import ListTransition from './components/transition/list/ListTransition4.vue';
import ReuseTransition from './components/transition/reuse/ReuseTransition2.vue'

export default {
  name: "App",
  components: {
    HelloWorld,
    BaseLeavel,
    BaseData,
    BaseTransition,
    MulTransition,
    ListTransition,
    ReuseTransition
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
