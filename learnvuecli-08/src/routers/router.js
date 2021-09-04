import VueRouter from 'vue-router'
const Home=import('../components/Home.component')
const About=import('../components/About.component')



Vue.use('VueRouter')

const routes=[
{ 
    path: '/Home',
    component: Home,
},
{
    path: '/About',
    component: About,

},
]

const router =  new VueRouter({
    routes,
})

export default router