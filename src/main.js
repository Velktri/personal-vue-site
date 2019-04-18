import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes, mode } from './routes'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
    mode,
    routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
