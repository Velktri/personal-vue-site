<template>
  <div id="app" >
    <page-header :headerData="HeaderData"/>
    <router-view />
  </div>
</template>

<script>
import siteHeader from './components/Layout/Header.vue'

export default {
    name: 'app',

    components: {
        'page-header': siteHeader
    },

    data() {
        return {
            HeaderData: [
                { label: 'Home', route: '/', bIsIcon: false },
                { label: 'About', route: '/about', bIsIcon: false },
                { label: 'Projects', route: '/projects', bIsIcon: false },
                { label: 'Reference Journal', route: '/reference', bIsIcon: false },
            ]
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
