import { createRouter, createWebHistory } from 'vue-router'
import ToDoApp from '../views/ToDoApp.vue'

const routes = [
  {
    path: '/',
    name: 'ToDoApp',
    component: ToDoApp
  },
  {
    path: '/completed',
    name: 'completed',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Completed.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
