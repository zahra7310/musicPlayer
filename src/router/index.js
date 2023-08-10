import { createRouter, createWebHistory } from 'vue-router'
import dashboardView from '../components/Pages/dashboard/dashboardView.vue'
import PostsView from '../components/Pages/posts/PostsView.vue'
import PostTemplate from '../components/Pages/posts/PostTemplate.vue'
import PostViewCart from '../components/Pages/posts/PostViewCart.vue'
import podcasts from '../components/Pages/podcasts/podcasts.vue'
import navbar from '../components/Pages/sidebar/navbar.vue'
import music from '../components/Pages/music/music.vue'
import musicCard from '../components/Pages/music/musicCard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: dashboardView
    },
    {
      path:'/posts',
      name:'posts',
      component:PostTemplate,
      children:[
        {
          path:'',
          name:'postsview',
          component:navbar,
        },
        {
          path:':id',
          name:'PostViewCart',
          component:PostViewCart,
        }
      ]
    },
    {
      path:'/music',
      name:'music',
      component:music,
    },
    {
      path:'/music/:id',
      name:'musicCard',
      component:musicCard,
    },
    {
      path:'/podcasts',
      name:'podcasts',
      component:podcasts,
    }
  ]
})

export default router
