import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotfoundView from '../views/NotfoundView.vue'
import ProjetView from '../views/ProjetView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/:pathMatch(.*)*', 
      name: '404',
      component: NotfoundView
    },
    {
      path: '/projet', 
      name: 'projet',
      component: ProjetView
    },
  ]
})

export default router