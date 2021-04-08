<template>
  <div class="main-header">
    <a-button
      type="primary"
      style="margin-bottom: 16px"
      @click="toggleCollapsed"
    >
      <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <div class="breakcrumb">
      <a-breadcrumb>
        <a-breadcrumb-item>
          {{ currentRoutes[0] ? currentRoutes[0].meta.title : "" }}
        </a-breadcrumb-item>
        <a-breadcrumb-item>
          {{ currentRoutes[1] ? currentRoutes[1].meta.title : "" }}
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <ul class="user-info">
      <li>
        {{ user.username }}
        <a-icon type="down" />
      </li>
      <li @click="logout">退出</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      currentRoutes: [],
    };
  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    toggleCollapsed() {
      this.$store.dispatch('changeCollapsed');
    },
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/login');
    },
  },
  watch: {
    $route: {
      handler() {
        this.currentRoutes = this.$router.currentRoute.matched;
      },
      immediate: true,
    },
  },
};
</script>

<style scoped lang="less">
.user-info {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  background: #fff;
}
</style>
