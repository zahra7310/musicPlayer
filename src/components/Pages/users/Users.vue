<script setup>
import SubHeader from "../../SubHeader.vue";
import userCartView from "./userCartView.vue";
</script>


<template>
  <SubHeader title="User"></SubHeader>
  <main>
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <h1 class="text-white">Users</h1>
      <div class="bg-white py-24 sm:py-32">
        <div
          class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3"
        >
          <div class="max-w-2xl">
            <h2
              class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Meet our leadership
            </h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
              vitae elementum enim vitae ullamcorper suspendisse.
            </p>
          </div>
          <div  v-if="loading" class="w-full mt-40 flex bottom-0 right-0 bg-white fixed w-ful flex-center h-full justify-content-center align-items">
            <img src="../../../assets/images/Loading_icon.gif">
          </div>
          <ul v-else
            role="list"
            class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >

            <li v-for="user in users" :key="user.id">
              <userCartView :user="user"></userCartView>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>




<script>

import axios from "axios";

export default {
  data() {
    const loading =true;
    let users={};
    return{
      users,loading
    }

  },
  mounted() {
    axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
           this.users = response.data;
           if(response){
             this.loading=false;
             console.log(this.loading);
           }
        }).catch((error)=>{
          console.log(error);
        });
  }
};
</script>
