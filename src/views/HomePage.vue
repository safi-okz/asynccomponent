<template>
    <div>
        <h1>Safi Ullah</h1>
        <AsyncUser ></AsyncUser>                
    </div>
</template>

<script setup>
import { onMounted, defineAsyncComponent } from 'vue';
import {useHomeStore } from '../stores/counter';
import Loading from '../components/Loading.vue';
import ErrorComp from './ErrorComp.vue';
// import RestaurantComp from '../components/RestaurantComp.vue

const AsyncUser = defineAsyncComponent({

   loader: () => import('../components/RestaurantComp.vue'),
   loadingComponent: Loading,
   suspensible: false,
   errorComponent: ErrorComp,
   delay: 200,
   timeout: 3000
}
)

const { restaurant, loading, userHomeAction } = useHomeStore()
// console.log('rest ', restaurant);
// onMounted(async () => {
 await userHomeAction();
// })
</script>