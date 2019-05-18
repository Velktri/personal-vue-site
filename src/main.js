import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes'
import store from './store'
import '@/styles/global.sass'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter(routes)

new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app')
