import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes, mode, base } from './routes'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
    mode,
    routes,
    base
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
