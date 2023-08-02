
import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      podcasts:[
        {
          title: "Ep.",
          name: "Jungel Boogie",
          singer: "Funk",
          source:
            "https://shenidid.com/wp-content/uploads/2023/funk/01_Kool%20%20The%20Gang%20-%20Jungle%20Boogie.mp3",
          img: "src/assets/images/ly.webp",
          detail: "Full Stack Radio",
        },
        {
          title: "test2",
          name: "Butter",
          singer: "BTS",
          source:
            "https://files.musicfeed.ir/dir/2021/5/BTS%20Butter.mp3",
          img: "src/assets/images/jangel.jpeg",
          detail: "Full Stack Radio",
        },
        {
          title: "funk",
          name: "The Gang - Celebration",
          singer: "Funk",
          source:
            "https://shenidid.com/wp-content/uploads/2023/funk/02_Kool&TheGang-Celebration.mp3",
          img: "src/assets/images/butter.webp",
          detail: "Full Stack Radio",
        },
        {
          title: "funk",
          name: "Love Rollercoaster",
          singer: "Ohio",
          source:
            "https://shenidid.com/wp-content/uploads/04-Ohio-Players-Love-Rollercoaster.mp3",
          img: "src/assets/images/honey.jpg",
          detail: "lorem detail",
        },
        {
          title: "funk",
          name: "War Low Rider",
          singer: "Ohio",
          source:
            "https://shenidid.com/wp-content/uploads/05_War-Low-Rider.mp3",
          img: "src/assets/images/war.jpeg",
          detail: "lorem detail",
        },
        {
          title: "funk",
          name: "Rock Steady",
          singer: "Ohio",
          source:
            "https://shenidid.com/wp-content/uploads/06_rock-steady.mp3",
          img: "src/assets/images/Rocksteady.jpeg",
          detail: "lorem detail",
        },
        {
          title: "funk",
          name: "Word Up",
          singer: "Ohio",
          source:
            "https://shenidid.com/wp-content/uploads/07_Cameo-WordUp.mp3",
          img: "src/assets/images/camo.jpeg",
          detail: "lorem detail",
        },
        {
          title: "funk",
          name: "Stevie Wonder Superstition",
          singer: "Ohio",
          source:
            "https://shenidid.com/wp-content/uploads/09_stevie_wonder_superstition.mp3",
          img: "src/assets/images/stevie.jpeg",
          detail: "lorem detail",
        },
        {
          title: "funk",
          name: "Word Up",
          singer: "Ohio",
          source:
            "https://shenidid.com/wp-content/uploads/07_Cameo-WordUp.mp3",
          img: "src/assets/images/camo.jpeg",
          detail: "lorem detail",
        },
      ]
    }
  },
  mutations: {
  }
})

export default store