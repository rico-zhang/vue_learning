<template>
  <div class="demo">
    <button @click="handleClick">click me</button>
    <transition >
        <div class="box" v-if="show">Hello World</div>
    </transition>
  </div>
</template>
<script>
export default {
    data(){
        return {
            show:true
        }
    },
    methods:{
        handleClick(){
            this.show = !this.show;
        }
    }
}
</script>

<style scoped>
/* 基本使用 */
button{
    margin-bottom: 10px;
}
.box {
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    border: 1px solid red;
    color: red;
}

.v-enter{
    opacity: 0;
    transform: translateX(200px);
}

.v-enter-active{
    transition: all 3s;
}

.v-enter-to{
    opacity: 1;
    transform: translateX(0);
}

.v-leave{
    opacity: 1;
    transform: translateY(0);
}

.v-leave-active{
    transition: all 3s;
}

.v-leave-to{
    opacity: 0;
    transform: translateY(200px);
}

</style>