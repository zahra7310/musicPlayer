<script setup>
import userCartView from "./userCartView.vue"
</script>


<template>
  <userCartView :user="user"></userCartView>
</template>
<script>
import axios from "axios";
import { useRoute } from "vue-router";
export default {
  data() {
   
    let user = {};
    return {
      user,
    };
  },
  mounted() {
    const Route=useRoute();
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${Route.params.id}`)
      .then((response) => {
        this.user = response.data;
        if (response) {
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>


