<script setup>
import podcastCart from "./podcastCart.vue";
import { ref } from "vue";
</script>

<template>
  <div class="pb-10 float-right w-full">
    <div v-if="currentPlay">
      <podcastCart
      :curentPodcast="currentPlay"
      :podcasts="podcasts"
      :activePlay="activePlay"
      @togglePlay="togglePlay"
      @nextTrack="nextTrack"
      @previousTrack="previousTrack"
    />
    </div>
    <div
      @click="playActive(index)"
      v-for="(podcast, index) in podcasts"
      :key="podcast.id"
      class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-5 cursor-pointer"
    >
      <div class="hover:bg-slate-700 max-auto bg-gray-900 p-6 rounded-xl">
        <div class="flex items-center space-x-4">
          <img
            :src="podcast.img"
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
              <abbr title="Episode" class="text-cyan-500">{{ podcast.title }}</abbr>
              {{ podcast.name }}
          </h2>
            <p
              class="text-slate-500 transition-all duration-500 dark:text-slate-400 text-sm leading-6 truncate"
            >
              {{ podcast.singer }}
          </p>
            <p
              class="text-slate-500 transition-all duration-500 dark:text-slate-50 text-lg"
            >
              {{ podcast.detail }}
            </p>
          </div>
          <div>
            <img class="opacity-40" src="/src/assets/images/icons/play.png" width="35" height="35">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: { podcastCart },
  name: "podcasts",
  data() {
    const currentPlay = this.$store.state.currentPlay;
    let activePlay = true;
    const podcasts = this.$store.state.podcasts;
    const musicIndex = this.$store.state.musicIndex;
    return {
      podcasts,
      activePlay,
      currentPlay,
      musicIndex,
    };
  },
  methods: {
    playActive(index) {
      this.activePlay = false;
      this.musicIndex = index;
      this.currentPlay = this.podcasts[index];
    },
    togglePlay() {
      this.activePlay = !this.activePlay;
      console.log(this.activePlay);
    },
    nextTrack() {
      console.log(this.musicIndex);
      this.activePlay = false;
      if (this.musicIndex >= 0 && this.musicIndex < this.podcasts.length - 1) {
        this.musicIndex += 1;
        this.currentPlay = this.podcasts[this.musicIndex];
      }
    },
    previousTrack() {
      this.activePlay = false;
      if (this.musicIndex > 0 && this.musicIndex <= this.podcasts.length) {
        this.musicIndex -= 1;
        this.currentPlay = this.podcasts[this.musicIndex];
      }
    },
  },
};
</script>


