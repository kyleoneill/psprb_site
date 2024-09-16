import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookmarkingView from '../views/education/BookmarkingView.vue'
import ExplorationView from '../views/education/ExplorationView.vue'
import FleetDoctrinesView from "@/views/programs/FleetDoctrinesView.vue";
import BuybackView from "@/views/programs/BuybackView.vue";
import SRPView from "@/views/programs/SRPView.vue";
import FleetOperationsView from "@/views/education/FleetOperationsView.vue";

const router = createRouter({
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/programs/doctrines',
    //   name: 'fleet-doctrines',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/programs/FleetDoctrinesView.vue')
    // },
    {
      path: '/programs/doctrines',
      name: 'fleet-doctrines',
      component: FleetDoctrinesView
    },
    {
      path: '/programs/buyback',
      name: 'buyback',
      component: BuybackView
    },
    {
      path: '/programs/srp',
      name: 'srp',
      component: SRPView
    },
    {
      path: '/education/bookmarking',
      name: 'bookmarking',
      component: BookmarkingView
    },
    {
      path: '/education/fleet-ops',
      name: 'fleet-ops',
      component: FleetOperationsView
    },
    {
      path: '/education/exploration',
      name: 'exploration',
      component: ExplorationView
    },
  ]
})

export default router
