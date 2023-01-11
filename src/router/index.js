import { createRouter, createWebHistory } from 'vue-router';
// const HomePage = () => import('../views/HomePage.vue');
import { defineAsyncComponent } from 'vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path: '/',
        name: 'Home',
        component: defineAsyncComponent(() => import(/* webpackChunkName: "Homepage" */ "../views/HomePage.vue"))
      }
  ]
})

export default router
