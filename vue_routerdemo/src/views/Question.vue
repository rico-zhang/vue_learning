<template>
  <div class="question" v-if="question">
    <div class="main">
      {{ question.title }}
    </div>
    <div class="other">
      <div
        class="prev"
        @click="otherQuestionClick(question.prevId)"
        v-if="question.prev"
        :title="question.prev"
      >
        {{ question.prev }}
      </div>
      <div
        class="next"
        @click="otherQuestionClick(question.nextId)"
        v-if="question.next"
        :title="question.next"
      >
        {{ question.next }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: null,
    };
  },
  methods: {
    otherQuestionClick(questionId) {
      console.log(questionId);
      this.$router.push({ name: "question", params: { id: questionId } });
    },
  },
  mounted() {
    // const { id } = this.$route.params;
    // this.$axios.get(`/question/${id}`).then((data) => {
    //   this.question = data;
    // });
  },
  watch: {
    '$route': {
      handler() {
        const { id } = this.$route.params;
        this.$axios.get(`/question/${id}`).then((data) => {
          this.question = data;
        });
      },
      immediate: true,
    },
  },
};
</script>

<style scoped>
.main {
  margin-bottom: 200px;
}
.other div {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #3385ff;
  text-decoration: underline;
  cursor: pointer;
}
.other::after {
  display: table;
  content: "";
  clear: both;
}
.other .prev {
  float: left;
}
.other .next {
  float: right;
}
</style>