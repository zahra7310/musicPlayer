<script setup>
import { mapState } from "vuex";
import podcasts from "../podcasts/podcasts.vue";
import geners from "../../section/geners.vue";
</script>

<template>
  <div>
    <div class="mx-auto max-w-7xl py-8 sm:py-2 px-10 sm:px-5 ">
    <h3
      class="text-2xl text-gray-300 w-full pt-3 py-8 font-semibold flex items-center"
    >
      Top on Shenidid
      <svg
        width="25"
        height="25"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        style="transform: rotate(0deg); color: #fff; margin-left: 5px"
      >
        <path
          fill="#ccc"
          fill-rule="nonzero"
          d="M12.92 12L8.37 7.25a1.36 1.36 0 0 1 0-1.864 1.225 1.225 0 0 1 1.786 0l5.495 5.735a1.282 1.282 0 0 1 0 1.758l-5.495 5.735a1.225 1.225 0 0 1-1.786 0 1.36 1.36 0 0 1 0-1.865L12.92 12z"
        ></path>
      </svg>
    </h3>
      <main class="grid">
        <div>
          <section class="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div
              v-for="(podcast, index) in $store.state.podcasts.slice(4, 8)"
              :key="podcast.id"
              class="bg-gray-900 shadow-lg rounded p-5 cursor-pointer"
              @click="goToPlayList(index)"
            >
              <div class="group relative">
                <img
                  class="w-full md:w-72 block rounded"
                  :src="podcast.img"
                  alt=""
                />
                <div
                  class="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly"
                >
                  <button
                    class="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                      />
                    </svg>
                  </button>

                  <button
                    class="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-three-dots"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="py-5 grid col-span-1 grid-flow-col">
                <div>
                  <h3 class="text-white text-lg">{{ podcast.name }}</h3>
                  <p class="text-gray-500">{{ podcast.singer }}</p>
                  <p class="text-gray-600">{{ podcast.detail }}</p>
                </div>
                <button
                  class="hover:scale-110 flex justify-end text-slate-500 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition"
                >
                  <!-- <img width="40" height="40" src="src/assets/images/icons/play.png"> -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-play-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
    <div class="mx-auto max-w-7xl py-8 sm:py-5 sm:px-10 px-10">
    <h3
      class="text-2xl text-gray-300  py-8 w-full pt-3 font-semibold flex items-center"
    >
      Podcasts
      <svg
        width="25"
        height="25"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        style="transform: rotate(0deg); color: #fff; margin-left: 5px"
      >
        <path
          fill="#ccc"
          fill-rule="nonzero"
          d="M12.92 12L8.37 7.25a1.36 1.36 0 0 1 0-1.864 1.225 1.225 0 0 1 1.786 0l5.495 5.735a1.282 1.282 0 0 1 0 1.758l-5.495 5.735a1.225 1.225 0 0 1-1.786 0 1.36 1.36 0 0 1 0-1.865L12.92 12z"
        ></path>
      </svg>
    </h3>
      <main class="grid">
        <div>
          <section class="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div
              v-for="(podcast, index) in $store.state.podcasts.slice(0, 4)"
              :key="podcast.id"
              class="bg-gray-900 shadow-lg rounded p-5 cursor-pointer"
              @click="goToPlayList(index)"
            >
              <div class="group relative">
                <img
                  class="w-full md:w-72 block rounded"
                  :src="podcast.img"
                  alt=""
                />
                <div
                  class="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly"
                >
                  <button
                    class="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                      />
                    </svg>
                  </button>

                  <button
                    class="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-three-dots"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="py-5 grid col-span-1 grid-flow-col">
                <div>
                  <h3 class="text-white text-lg">{{ podcast.name }}</h3>
                  <p class="text-gray-500">{{ podcast.singer }}</p>
                  <p class="text-gray-600">{{ podcast.detail }}</p>
                </div>
                <button
                  class="hover:scale-110 flex justify-end text-slate-500 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition"
                >
                  <!-- <img width="40" height="40" src="src/assets/images/icons/play.png"> -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-play-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
    <div class="mx-auto max-w-7xl py-8 sm:py-5 sm:px-10 px-10">
      <geners/>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    let showPlayList = false;
    return {
      showPlayList,
    };
  },
  methods: {
    goToPlayList(index) {
      this.$store.state.musicIndex = index;
      this.$store.state.currentPlay = this.$store.state.podcasts[index];
      this.$router.push({ path: "/podcasts" });
    },
  },
};
</script>
