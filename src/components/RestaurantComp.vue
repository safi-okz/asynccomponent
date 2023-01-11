<template>
    <!-- <div v-if="rests ">
        <h2>gggg...........</h2>
    </div> -->
    <!-- <div v-if="rests !== undefined"> -->
        <div v-for="rest in restt" :key="rest">
        <h3>{{rest.name}}</h3>
        <img :src="rest.image" alt="">
        </div>
    <!-- </div> -->
    <h1>Hhhhhhhhhh</h1>
</template>

<script setup>
// import { computed } from '@vue/reactivity';
import {useHomeStore } from '../stores/counter';
import { onBeforeMount, computed } from 'vue'

const { restaurant, restaurantGet, loading, userHomeAction } =  useHomeStore();

// const restt = ref([]);
// setTimeout(() => {
//     restt.value = restaurant;
// }, 2000)
const restt = computed(() => {
    // const res = setTimeout(() => {
    //     console.log('rest ', restaurant);
        return restaurantGet
    // }, 2000)
    // console.log(res)
    // return res;
});

// const load = computed(() => {
//     return loading;
// })
// onBeforeMount(async () => {
//  await userHomeAction();
// })
// const props = defineProps(['rest', 'loading']);
</script>