import Landing from './components/Landing.vue'
import About from './components/About.vue'

const routeData = {
    routes: [
        { path: '/', component: Landing },
        { path: '/about', component: About },
        //{ path: '/test', component: Test }
    ],
    
    mode: 'history',
    
    base: (process.env.NODE_ENV === 'production') ? '/personal-vue-site/' : '/'
}

export default routeData