<template>
  <div class="student-list">
    <hr />
    <div>学生总人数:{{studentCount}}</div>
    <hr />
    <div>学生列表：</div>
    <ul v-for="{ name, age, id } of studentList" :key="id">
      <li>姓名：{{ name }} 年龄：{{ age }}</li>
    </ul>
    <hr />
    <div>未成年学生列表：</div>
    <ul v-for="{ name, age, id } of studentMinorList" :key="'minor'+id">
      <li>姓名：{{ name }} 年龄：{{ age }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(["studentList"]),
    ...mapGetters(["studentCount", "studentMinorList"]),
  },
};
</script>

<style scoped>
.student-list {
  margin-bottom: 15px;
}

.student-list li {
  margin-bottom: 15px;
}
</style>