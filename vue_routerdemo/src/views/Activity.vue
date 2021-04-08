<template>
  <div class="activity">
    <router-link :to="{ name: 'academic' }">学术讨论</router-link>
    <router-link :to="{ name: 'personal' }">个人中心</router-link>
    <router-link :to="{ name: 'download' }">下载</router-link>
    <div class="activity-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
a {
  margin-right: 10px;
  padding: 10px;
  text-decoration: none;
}
a.router-link-exact-active {
  background-color: #3385ff;
  color: #fff;
}

.activity-view{
    margin-top: 50px;
    padding-left: 10px;
}
</style>