<template>
  <div class="form-group">
    <input
     ref="musicSearch"
      type="search"
      class="w-56 h-9 bg-white rounded-md"
      on:keyup="searchTrack"
    />
  </div>
</template>


<script>

export default {
    data(){
  
    },
    methods:{
        searchTrack(){
            console.log(this.$refs.musicSearch);
        }
    }
}
</script>
