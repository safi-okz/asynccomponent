// import { ref, computed } from 'vue'
import { defineStore } from 'pinia';
import axios from 'axios';

const url = 'http://18.134.150.58:3000';
// const token = sessionStorage.getItem('token');

export const useHomeStore = defineStore('Home', {
  state:() =>({
      restaurant: [],
      loading: false
  }),
  getters: {
    restaurantGet(state){
      return state.restaurant
    }
  },
  actions: {
   async userHomeAction(){
      this.loading = true;
      let shops = [];

      const response = await axios.get(`${url}/api/v1/shop/locationbasehome?lat=0&lon=0`, {
        headers: {
            // Authorization: `Bearer ${token}`
        }
    });

    shops = await response.data.shops;
    this.restaurant = shops.filter((el) => el.type === "restaurant" || el.type === "resturant");
    this.loading = false;
      // axios.get(`${url}/api/v1/shop/locationbasehome?lat=0&lon=0`, {
      //     headers: {
      //         // Authorization: `Bearer ${token}`
      //     }
      // }).then(response => {
      //     shops = response.data.shops;
      //     this.restaurant = shops.filter((el) => el.type === "restaurant" || el.type === "resturant");
      //     this.loading = false;
      // }).catch(error => console.log('Error Message ', error.message));
  }
  }
})
