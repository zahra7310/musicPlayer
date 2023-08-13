<template>
 <div>
   <div class="float-right flex items-end justify-end p-3">
    <form>
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >Search</label
      >
      <div class="relative">
        <div
          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
        ></div>
        <input
          type="search"
          v-model="search"
          id="default-search"
          class="transition-all cursor-pointer block p-4 pl-2 text-sm text-white border border-gray-500 rounded-lg bg-gray-700 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          :class="searchResultShow? 'w-96' : 'w-60' "
          placeholder="Search Podcast, Music..."
          required
          v-on:keyup="searchTrack"
        />
        <button
          @click="searchTrack"
          class="text-white absolute right-2.5 bottom-2.5 bg-gray-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            class="w-4 h-4 text-white dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </div>
    </form>
   </div>
   <div
      v-show="searchResultShow"
      class="absolute right-3 pb-7 h-auto w-96 overflow-scroll rounded-lg bg-slate-950 top-20 p-2 z-10"
    >
      <div v-if="searchResultFind">
        <div
          @click="playActive(index)"
          v-for="(track, index) in searchResult"
          :key="track.id"
          class="mx-auto max-w-7xl px-4 sm:px-3 lg:px-3 mt-5 cursor-pointer"
        >
          <div class="hover:bg-slate-700 max-auto bg-gray-900 p-3 rounded-xl">
            <div class="flex items-center space-x-4">
              <img
                :src="track.img"
                loading="lazy"
                decoding="async"
                alt=""
                class="flex-none rounded-lg bg-slate-100"
                width="88"
                height="88"
              />
              <div class="min-w-0 flex-auto space-y-1 font-semibold">
                <h2
                  class="text-white transition-all duration-500 dark:text-cyan-400 text-sm leading-6"
                >
                  <abbr title="Episode" class="text-cyan-500">{{
                    track.title
                  }}</abbr>
                  {{ track.name }}
                </h2>
                <p
                  class="text-slate-500 transition-all duration-500 dark:text-slate-400 text-sm leading-6 truncate"
                >
                  {{ track.singer }}
                </p>
                <p
                  class="text-slate-500 transition-all duration-500 dark:text-slate-50 text-lg"
                >
                  {{ track.detail }}
                </p>
              </div>
              <div>
                <img
                  class="opacity-40"
                  src="/src/assets/images/icons/play.png"
                  width="35"
                  height="35"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p v-else>Not Found</p>
   </div>
 </div>
</template>


<script>
import {ref} from 'vue';

export default {
  data() {
    return {
      vm: this,
      searchText: ref(this.search),
      trackName: "",
      searchResult: [],
      serchResultItem: "",
      searchResultShow: false,
      searchResultFind: false,
    };
  },
  methods: {
    searchTrack(e) {
      e.preventDefault();
      this.searchResultShow = true;
      this.searchResult = [];
      for (let i = 0; i < this.$store.state.podcasts.length; i++) {
        this.searchText = this.search.toLowerCase();
        this.trackName = this.$store.state.podcasts[i]["name"].toLowerCase();
        if (this.trackName.includes(this.searchText)) {
          this.serchResultItem = this.$store.state.podcasts[i];
          this.searchResult.push(this.serchResultItem);
        }
      }
      console.log(this.searchResult);
      if (this.searchResult=="") {
        this.searchResultFind = false;
      } else {
        this.searchResultFind = true;
      }
    },
  },
  watch: {
    searchText(val) {
        if(val==""){
          this.searchResultShow=false;
          console.log(this.searchResultShow);
      }
    },
  }
}
</script>
