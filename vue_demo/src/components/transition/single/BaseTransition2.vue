<template>
  <div class="demo">
    <button @click="handleClick">click me</button>
    <transition name="box1">
        <div class="box" v-if="show">Hello World</div>
    </transition>
     <transition name="box2">
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
/* 
name别名
 */
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

.box1-enter{
    opacity: 0;
    transform: translateX(200px);
}

.box1-enter-active{
    transition: all 3s;
}

.box1-enter-to{
    opacity: 1;
    transform: translateX(0);
}

.box1-leave{
    opacity: 1;
    transform: translateY(0);
}

.box1-leave-active{
    transition: all 3s;
}

.box1-leave-to{
    opacity: 0;
    transform: translateY(200px);
}


.box2-enter{
    opacity: 0;
    transform: translateX(200px);
}

.box2-enter-active{
    transition: all 3s;
}

.box2-enter-to{
    opacity: 1;
    transform: translateX(0);
}

.box2-leave{
    opacity: 1;
    transform: translateY(0);
}

.box2-leave-active{
    transition: all 3s;
}

.box2-leave-to{
    opacity: 0;
    transform: translateY(200px);
}
</style>