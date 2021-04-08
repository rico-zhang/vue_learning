<template>
  <div class="demo">
    <button @click="handleClick">click me</button>
    <transition 
    enter-active-class="animate__animated  animate__bounceInUp"
    leave-active-class="animate__animated  animate__bounceOutDown"
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
/* 使用animate css 类库
https://daneden.github.io/animate.css/

npm install animate.css --save

注意在main.js中 import "animate.css"
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


</style>