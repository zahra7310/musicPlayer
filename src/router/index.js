import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Users from '../components/Pages/users/Users.vue'
import ShowUser from '../components/Pages/users/ShowUser.vue'
import Template from '../components/Pages/users/Template.vue'
import dashboardView from '../components/Pages/dashboard/dashboardView.vue'
import PostsView from '../components/Pages/posts/PostsView.vue'
import PostTemplate from '../components/Pages/posts/PostTemplate.vue'
import PostViewCart from '../components/Pages/posts/PostViewCart.vue'
import podcasts from '../components/Pages/podcasts/podcasts.vue'
import navbar from '../components/Pages/sidebar/navbar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: dashboardView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: Template,
      children:[
        {
          path: '',
          name: 'users',
          component: Users,
        },
        {
          path: ':id',
          name: 'showuser',
          component: ShowUser,
        },
      ]
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
      path:'/podcasts',
      name:'podcasts',
      component:podcasts,
    }
    
  ]
})

export default router
