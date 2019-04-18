import Landing from './components/Landing.vue'
import About from './components/About.vue'

export const routes = [
    { path: '/', component: Landing },
    { path: '/about', component: About },
    //{ path: '/test', component: Test }
]

export const mode = 'history'