<template>
    <div class="academic">
        <ul>
            <router-link tag="li"  :to='{name:"question",params:{id:question.id}}'
            v-for="question of questionList" 
            :key="question.id">{{question.title}}</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            questionList:[]
        }
    },
    mounted(){
     this.$axios.get('/question').then(data=>{
        this.questionList = data;
     })
    }
}
</script>

<style scoped>
li{
    margin-bottom: 15px;
    cursor: pointer;
}

li:hover{
    text-decoration: underline;
    color: blue;
}
</style>