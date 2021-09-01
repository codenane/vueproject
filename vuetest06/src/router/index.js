import Vue from 'vue'
import VueRouter from 'vue-router'

const Home =()=>import('../views/Home')
const About=()=>import ('../views/About.vue')
const Container=()=>import('../views/Container.vue')

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'Home'
  },
  {
    path: '/Home',
    component: Home
  },
  {
    path: '/About',
    component:About
  },
  {
    path: '/Container',
    component:Container
    
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  
})

export default router
