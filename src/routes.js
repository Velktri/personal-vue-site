import Landing from './components/Landing.vue'
import About from './components/About.vue'

export const routes = [
    { path: '/', component: Landing },
    { path: '/about', component: About },
    //{ path: '/test', component: Test }
]

export const mode = 'history'

export const base = (process.env.NODE_ENV === 'production') ? '/personal-vue-site' : '/'