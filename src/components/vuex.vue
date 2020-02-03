<template>
    <div>
        <!-- 这是modules state -->
        <!-- count和number模块 -->
        {{$store.state.count.count}}-
        {{$store.state.number.number}}

        <!-- 这是单份的 -->
        <!-- <button @click="increment">+</button>
        {{$store.state.count}}
        {{$store.getters.getState}}
        <button @click="decrement">-</button> -->
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    // 1，基本使用，派发action
    // methods: {
    //     increment(){
    //         this.$store.dispatch('increment')
    //     },
    //     decrement(){
    //         this.$store.dispatch('decrement')
    //     }
    // }

    // 2，使用mapActions，只用派发action的方法
    // methods: mapActions([
    //     'increment',
    //     'decrement'
    // ])

    // 3，使用mapActions，除了使用派发action的方法，还要使用其他方法，要展开mapActions的返回结果
    methods: {
        ...mapActions(["increment", "decrement"])
    }
};
</script>

<style scoped>
</style>