<template>
<div class="header-color">
    <div class="flex container header">
        <ul class="flex">
            <li v-for="(headerElement, i) in headerData" :key="i" >
                <router-link class="header-fonts" :to="headerElement.route"> {{ headerElement.label }} </router-link>
            </li>
        </ul>

        <div class="spacer"></div>

        
        <a href="https://velktri.github.io/personal-site" >
            <img src="@/assets/react.svg" class="header-icon">
        </a>
    </div>
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

.header-fonts {
    font-size: 1.2rem;
}

.header-color {
    background-color: darkcyan;
}

.spacer {
    flex-grow: 1;
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

.header-icon {
    height: 2rem;
}

</style>
