<template>
  <div>
    <audio
      ref="player"
      :src="curentPodcast.source ? curentPodcast.source : podcasts[1].source"
      preload="auto"
      autoplay
    ></audio>
    <div
      class="mx-auto max-w-7xl mb-12  px-4 sm:px-6 lg:px-8 mt-7 rounded-xl shadow-xl"
    >
      <div
        class="bg-gray-900 border-slate-100 transition-all duration-500 dark:bg-slate-800 transition-all duration-500 dark:border-slate-500 border-b rounded-t-xl p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8"
      >
        <div class="flex items-center space-x-4">
          <img
            :src="curentPodcast.img ? curentPodcast.img : podcasts[1].img"
            loading="lazy"
            decoding="async"
            alt=""
            class="flex-none rounded-lg bg-slate-100"
            width="88"
            height="88"
          />
          <div class="min-w-0 flex-auto space-y-1 font-semibold">
            <p
              class="text-cyan-500 transition-all duration-500 dark:text-cyan-400 text-sm leading-6"
            >
              <abbr title="Episode"
                >{{ curentPodcast.title ? curentPodcast.title : "music" }}
              </abbr>
              {{ curentPodcast.name ? curentPodcast.name : "musicname" }}
            </p>
            <h2
              class="text-slate-500 transition-all duration-500 dark:text-slate-400 text-sm leading-6 truncate"
            >
             {{curentPodcast.singer }}
          </h2>
            <p
              class="text-slate-500 transition-all duration-500 dark:text-slate-50 text-lg"
            >
              {{ curentPodcast.detail}}
            </p>
          </div>
        </div>
        <div class="space-y-2">
          <div class="relative">
            <div
              id="progress-bar"
              class="bg-slate-100 transition-all duration-500 dark:bg-slate-700 flex h-1 rounded-full overflow-hidden"
            >
              <input
                class="bg-cyan-500 transition-all duration-500 dark:bg-cyan-400 w-1/2 h-1"
                v-model="playbackTime"
                type="range"
                min="0"
                :max="audioDuration"
                id="position"
                name="position"
              />
            </div>
            <!-- <div
              class="ring-cyan-500 transition-all duration-500 dark:ring-cyan-400 ring-2 absolute left-1/2 top-1/2 w-4 h-4 -mt-2 -ml-2 flex items-center justify-center bg-white rounded-full shadow"
            >
              <div
                class="w-1.5 h-1.5 bg-cyan-500 transition-all duration-500 dark:bg-cyan-400 rounded-full ring-1 ring-inset ring-slate-900/5"
              ></div>
            </div> -->
          </div>
          <div
            class="flex justify-between text-sm leading-6 font-medium tabular-nums"
          >
            <span
              v-html="elapsedTime()"
              class="text-cyan-500 transition-all duration-500 dark:text-slate-100"
            >
            </span>
            <div
              v-html="totalTime()"
              class="text-slate-500 transition-all duration-500 dark:text-slate-400"
            ></div>
          </div>
        </div>
      </div>
      <div
        class="h-10 bg-slate-50 text-slate-500 transition-all duration-500 dark:bg-slate-600 transition-all duration-500 dark:text-slate-200 rounded-b-xl flex items-center"
      >
        <div class="flex-auto flex items-center justify-evenly">
          <button
            type="button"
            class="hidden sm:block lg:hidden xl:block"
            aria-label="Previous"
            @click="previousMusic"
          >
            <svg width="24" height="24" fill="none">
              <path
                d="m10 12 8-6v12l-8-6Z"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M6 6v12"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <button
          @click="toggleAudio()"
          type="button"
          class="bg-white h-16 w-16 text-slate-900 transition-all duration-500 dark:bg-slate-100 transition-all duration-500 dark:text-slate-700 flex-none -my-2 mx-auto w-20 h-20 rounded-full ring-1 ring-slate-900/5 shadow-md flex items-center justify-center"
          aria-label="Pause"
        >
          <span v-show="!isPlaying">
            <img 
              width="30"
              height="30"
              src="src/assets/images/icons/icons-play.png"
            />
          </span>
          <span v-show="isPlaying">
            <svg width="30" height="32" fill="currentColor">
              <rect x="6" y="4" width="4" height="24" rx="2"></rect>
              <rect x="20" y="4" width="4" height="24" rx="2"></rect>
            </svg>
          </span>
        </button>
        <div class="flex-auto flex items-center justify-evenly">
          <button
            type="button"
            class="hidden sm:block lg:hidden xl:block"
            aria-label="Next"
            @click="nextMusic"
          >
            <svg width="24" height="24" fill="none">
              <path
                d="M14 12 6 6v12l8-6Z"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M18 6v12"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "vue";
export default {
  props: {
    curentPodcast: Object,
     activePlay: Boolean,
  },
  name: "PodcastCart",
  data() {
     let toggleMusic = ref(this.activePlay);
    let audioCurrentDuration = ref();

    return {
      toggleMusic,
      audioCurrentDuration,
      playbackTime: 0,
      audioDuration: 100,
      audioLoaded: false,
      isPlaying: false,
    };
  },
  beforeMount() {
    const podcasts = this.$store.state.podcasts;
    return {
      podcasts,
    };
  },
  emit: ["togglePlay", "nextTrack", "previousTrack"],
  methods: {
    playMusic() {
      this.toggleAudio();
      this.$emit("togglePlay");
      this.toggleMusic = this.activePlay;
      if (this.toggleMusic) {
        this.$refs.player.play();
      } else {
        this.$refs.player.pause();
      }
    
   },
    nextMusic() {
      this.$emit("nextTrack");
      this.toggleAudio() 
    },
    previousMusic() {
      this.$emit("previousTrack");
    },
    initSlider() {
      var audio = this.$refs.player;
      if (audio) {
        this.audioDuration = Math.round(audio.duration);
      }
    },
    convertTime(seconds) {
      const format = (val) => `0${Math.floor(val)}`.slice(-2);
      var hours = seconds / 3600;
      var minutes = (seconds % 3600) / 60;
      return [minutes, seconds % 60].map(format).join(":");
    },
    totalTime() {
      var audio = this.$refs.player;
      if (audio) {
        var seconds = audio.duration;
        return this.convertTime(seconds);
      } else {
        return "00:00";
      }
    },
    elapsedTime() {
      var audio = this.$refs.player;
      if (audio) {
        var seconds = audio.currentTime;
        this.audioCurrentDuration = this.convertTime(seconds);
        return this.convertTime(seconds);
      } else {
        return "00:00";
      }
    },
    playbackListener(e) {
      var audio = this.$refs.player;
      this.playbackTime = audio.currentTime;
      audio.addEventListener("ended", this.endListener);
      audio.addEventListener("pause", this.pauseListener);
    },
    //Function to run when audio is paused by user
    pauseListener() {
      this.isPlaying = false;
      this.listenerActive = false;
      this.cleanupListeners();
    },
    //Function to run when audio play reaches the end of file
    endListener() {
      this.isPlaying = false;
      this.listenerActive = false;
      this.cleanupListeners();
    },
    //Remove listeners after audio play stops
    cleanupListeners() {
      var audio = this.$refs.player;
      audio.removeEventListener("timeupdate", this.playbackListener);
      audio.removeEventListener("ended", this.endListener);
      audio.removeEventListener("pause", this.pauseListener);
      //console.log("All cleaned up!");
    },
    toggleAudio() {
      var audio = this.$refs.player;
      if (audio.paused) {
        audio.play();
        this.isPlaying = true;
      } else {
        audio.pause();
        this.isPlaying = false;
      }
    },
  },
  mounted: function () {
    this.isPlaying=true;
    if (this.isPlaying) {
        var audio = this.$refs.player;
        this.initSlider();
        if (!this.listenerActive) {
          this.listenerActive = true;
          audio.addEventListener("timeupdate", this.playbackListener);
        }
      }
    this.$nextTick(function () {
      var audio = this.$refs.player;
      audio.addEventListener(
        "loadedmetadata",
        function (e) {
          this.initSlider();
        }.bind(this)
      );
      audio.addEventListener(
        "canplay",
        function (e) {
          this.audioLoaded = true;
        }.bind(this)
      );
    });
    this.$watch("isPlaying", function () {
      if (this.isPlaying) {
        var audio = this.$refs.player;
        this.initSlider();
        if (!this.listenerActive) {
          this.listenerActive = true;
          audio.addEventListener("timeupdate", this.playbackListener);
        }
      }
    });
    this.$watch("playbackTime", function () {
      var audio = this.$refs.player;
      var diff = Math.abs(this.playbackTime - this.$refs.player.currentTime);

      if (diff > 0.01) {
        this.$refs.player.currentTime = this.playbackTime;
      }
    });
    this.$watch("curentPodcast",function(){
      this.playbackListener();
      this.isPlaying = true;
    })
  },
};
</script>
