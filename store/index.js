
import { createStore } from 'vuex'
import {ref} from 'vue'

const baseUrl= window.location.origin;
const store = createStore({
  state () {
    return {
      podcasts:[
        {
          id:'0',
          title: "Ep.",
          name: "Jungel Boogie",
          singer: "Funk",
          source:
            "https://shenidid.com/wp-content/uploads/2023/funk/01_Kool%20%20The%20Gang%20-%20Jungle%20Boogie.mp3",
          img: `src/assets/images/ly.webp`,
          detail: "Full Stack Radio",
        },
        {
          id:'1',
          title: "test2",
          name: "Butter",
          singer: "BTS",
          source:
            "https://files.musicfeed.ir/dir/2021/5/BTS%20Butter.mp3",
          img: "/src/assets/images/jangel.jpeg",
          detail: "Full Stack Radio",
        },
        {
          id:'2',
          title: "funk",
          name: "The Gang - Celebration",
          singer: "Funk",
          source:
            "https://shenidid.com/wp-content/uploads/2023/funk/02_Kool&TheGang-Celebration.mp3",
          img: "/src/assets/images/butter.webp",
          detail: "Full Stack Radio",
        },
        {
          id:'3',
          title: "funk",
          name: "Love Rollercoaster",
          singer: "Ohio",
          source:
            "https://shenidid.com/wp-content/uploads/2023/funk/04-Ohio-Players-Love-Rollercoaster.mp3",
          img: "/src/assets/images/honey.jpg",
          detail: "lorem detail",
        },
        {
          id:'4',
          title: "funk",
          name: "War Low Rider",
          singer: "Ohio",
          source:
            "https://shenidid.com/wp-content/uploads/2023/funk/05_War-Low-Rider.mp3",
          img: "/src/assets/images/war.jpeg",
          detail: "lorem detail",
        },
        {
          id:'5',
          title: "funk",
          name: "Rock Steady",
          singer: "Ohio",
          source:
            "https://shenidid.com/wp-content/uploads/2023/funk/06_rock-steady.mp3",
          img: "/src/assets/images/Rocksteady.jpeg",
          detail: "lorem detail",
        },
        {
          id:'6',
          title: "funk",
          name: "Word Up",
          singer: "Ohio",
          source:
            "https://shenidid.com/wp-content/uploads/2023/funk/07_Cameo-WordUp.mp3",
          img: "/src/assets/images/camo.jpeg",
          detail: "lorem detail",
        },
        {
          id:'7',
          title: "funk",
          name: "Stevie Wonder Superstition",
          singer: "Ohio",
          source:
            "https://shenidid.com/wp-content/uploads/2023/funk/09_stevie_wonder_superstition.mp3",
          img: "/src/assets/images/stevie.jpeg",
          detail: "lorem detail",
        },
        {
          id:'8',
          title: "funk",
          name: "Word Up",
          singer: "Ohio",
          source:
            "https://shenidid.com/wp-content/uploads/2023/funk/07_Cameo-WordUp.mp3",
          img: "/src/assets/images/camo.jpeg",
          detail: "lorem detail",
        },
      ],
      currentPlay:ref(),
      musicIndex:0
    }
  },
  mutations: {
  }
})

export default store