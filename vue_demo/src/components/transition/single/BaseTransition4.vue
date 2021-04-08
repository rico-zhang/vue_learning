<template>
  <div class="demo">
    <button @click="handleClick">click me</button>
    <transition 
    enter-class="base-enter"
    enter-active-class="base-enter-active"
    enter-to-class="base-enter-to"
    leave-class="base-leave"
    leave-active-class="base-leave-active"
    leave-to-class="base-leave-to"
    >
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
/* 自定义class name */
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

.base-enter{
    opacity: 0;
    transform: translateX(200px);
}

.base-enter-active{
    transition: all 3s;
}

.base-enter-to{
    opacity: 1;
    transform: translateX(0);
}

.base-leave{
    opacity: 1;
    transform: translateY(0);
}

.base-leave-active{
    transition: all 3s;
}

.base-leave-to{
    opacity: 0;
    transform: translateY(200px);
}

</style>