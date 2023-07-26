<script setup>
import podcastCart from "./podcastCart.vue";
</script>

<template>
  <podcastCart :curentPodcast="curentPodcast"/>
  <div v-if="playList">
    <podcastCart :podcasts="podcasts"></podcastCart>
  </div>
  <div
    @click="playActive(index)"
    v-for="(podcast , index) in podcasts"
    :key="podcast.id"
    class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-7 cursor-pointer"
  >
    <div class="max-auto dark:bg-slate-800 p-6 rounded-xl">
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
          <p
            class="text-cyan-500 transition-all duration-500 dark:text-cyan-400 text-sm leading-6"
          >
            <abbr title="Episode">{{ podcast.title }}</abbr> {{ podcast.name }}
          </p>
          <h2
            class="text-slate-500 transition-all duration-500 dark:text-slate-400 text-sm leading-6 truncate"
          >
            Scaling CSS at Heroku with Utility Classes
          </h2>
          <p
            class="text-slate-900 transition-all duration-500 dark:text-slate-50 text-lg"
          >
            {{ podcast.detail }}
          </p>
          <div></div>
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
    let playList = false;
    let curentPodcast="";
    const podcasts = [
      {
        title: "Ep.",
        name: "music",
        singer: "jungel boogie",
        sorce:
          "https://shenidid.com/wp-content/uploads/2023/funk/01_Kool%20%20The%20Gang%20-%20Jungle%20Boogie.mp3",
        img: "https://tailwindcss.com/_next/static/media/full-stack-radio.afb14e4e.png",
        detail: "Full Stack Radio",
      },
      {
        title: "test2",
        name: "music",
        singer: "jungel boogie",
        sorce:
          "https://shenidid.com/wp-content/uploads/2023/funk/01_Kool%20%20The%20Gang%20-%20Jungle%20Boogie.mp3",
        img: "https://tailwindcss.com/_next/static/media/full-stack-radio.afb14e4e.png",
        detail: "Full Stack Radio",
      },
      {
        title: "test3",
        name: "music",
        singer: "jungel boogie",
        sorce:
          "https://shenidid.com/wp-content/uploads/2023/funk/01_Kool%20%20The%20Gang%20-%20Jungle%20Boogie.mp3",
        img: "https://tailwindcss.com/_next/static/media/full-stack-radio.afb14e4e.png",
        detail: "Full Stack Radio",
      },
    ];
    return {
      podcasts,
      playList,
      curentPodcast,
    };
  },
  methods:{
    playActive(index){
       console.log(index);
      this.curentPodcast = this.podcasts[index];
      console.log(this.curentPodcast);
    }
  }
};
</script>


