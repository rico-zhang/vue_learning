<template>
  <div class="menu-list">
    <a-menu
      :default-selected-keys="[
        $router.currentRoute.matched[1]
          ? $router.currentRoute.matched[1].name
          : '',
      ]"
      :default-open-keys="[$router.currentRoute.matched[0].name]"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
    >
      <template v-for="route of $store.state.menuRoutes">
        <a-sub-menu :key="route.name" v-if="!route.meta.hidden">
          <span slot="title"
            ><a-icon :type="route.meta.icon" /><span>{{
              route.meta.title
            }}</span></span
          >
          <template v-for="child of route.children">
            <a-menu-item v-if="!child.meta.hidden" :key="child.name">
              <router-link :to="{ name: child.name }">
                <a-icon :type="child.meta.icon" />{{
                  child.meta.title
                }}</router-link
              >
            </a-menu-item>
          </template>
        </a-sub-menu>
      </template>
    </a-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['collapsed']),
  },
};
</script>
