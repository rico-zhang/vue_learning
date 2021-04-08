<template>
  <div class="home">
    <router-view></router-view>
    <tabbar></tabbar>
  </div>
</template>

<script>
import Tabbar from '../components/Tabbar.vue';

export default {
  components: {
    Tabbar,
  },
};
</script>
