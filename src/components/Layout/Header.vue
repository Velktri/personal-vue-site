<template>
<div class="header-color">
    <ul class="flex container header">
        <li v-for="(headerElement, i) in headerData" :key="i" >
            <router-link :to="headerElement.route"> {{ headerElement.label }} </router-link>
        </li>
    </ul>
</div>

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
.header {
    height: 60px;
}

.header-color {
    background-color: darkcyan;
}

.flex {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
}

li {
    list-style: none;
    padding: 5px 10px;
}

ul {
    margin: 0px;
    padding: 0px;
}

ul a {
    text-decoration: none;
}

</style>
