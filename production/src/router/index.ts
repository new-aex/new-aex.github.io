import Vue from 'vue'
import VueRouter from 'vue-router'
import Timetable from '../pages/Timetable.vue'
import About from '../pages/About.vue'
import Add from '../pages/Add.vue'
import Archive from '../pages/Archive.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Timetable',
    component: Timetable,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    props: true
  },
  {
    path: '/add',
    name: 'Add',
    component: Add,
    props: true
  },
  {
    path: '/archive',
    name: 'Archive',
    component: Archive,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router