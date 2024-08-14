import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import bg1 from '@/views/sub_bg/bg1.vue'
import bg2 from '@/views/sub_bg/bg2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue'),
  },
  {
    path: '/bg',
    name: 'bg',
    component: () => import('../views/backgroud.vue'),
    children:[
      {
        path:'/mem/bg1',
        name:'bg1',
        component:bg1,
      },
      {
        path:'/mem/bg2',
        name:'bg2',
        component:bg2,
        props:true,
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
