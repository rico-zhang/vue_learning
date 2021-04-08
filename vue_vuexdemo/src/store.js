import Vuex from "vuex";
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: true,
    state: {
        count: 0,
        studentList: []
    },
    getters: {
        doubleCount(state) {
            return state.count * 2;
        },
        addNumCount(state) { return (num) => num + state.count },
        studentCount: state => state.studentList.length,
        studentMinorList: state => state.studentList.filter(item => item.age < 18)
    },
    mutations: {
        countIncrement: state => state.count++
    }
});
export default store;