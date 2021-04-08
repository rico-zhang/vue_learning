<template>
    <div class="student">
        学员展示
        <student-add/>
        <student-list/>
    </div>
</template>

<script>

import StudentAdd from '@/components/StudentAdd.vue'
import StudentList from '@/components/StudentList.vue'
export default {
    components:{
        StudentAdd,
        StudentList
    }
}
</script>