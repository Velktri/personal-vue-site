import Landing from './pages/Landing.vue'
import Reference from './pages/Reference.vue'

const routeData = {
    routes: [
        { path: '/', component: Landing },
        { path: '/reference', component: Reference },
    ],

    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    
    mode: 'history',
    
    base: (process.env.NODE_ENV === 'production') ? '/personal-vue-site/' : '/'
}

export default routeData