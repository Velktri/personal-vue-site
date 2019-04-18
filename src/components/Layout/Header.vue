<template>
    <ul class="container">
        <li v-for="(headerElement, i) in headerData" :key="i" >
            <router-link :to="headerElement.route"> {{ headerElement.label }} </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'page-header',

    props: {
        headerData: {
            type: Array,
            default: () => []
        }
    },

    data() {
        return {
            AccountMenu: [
                { label: 'Account', route: 'account' },
            ]
        }
    }
}
</script>

<style>
    .container {
        margin: auto;
    }
</style>
