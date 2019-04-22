import Landing from './pages/Landing.vue'
import About from './pages/About.vue'
import Projects from './pages/Projects.vue'
import Reference from './pages/Reference.vue'

const routeData = {
    routes: [
        { path: '/', component: Landing },
        { path: '/about', component: About },
        { path: '/reference', component: Reference },
        { path: '/projects', component: Projects }
    ],
    
    mode: 'history',
    
    base: (process.env.NODE_ENV === 'production') ? '/personal-vue-site/' : '/'
}

export default routeData