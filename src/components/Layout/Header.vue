<template>
<div class="header-color">
    <div class="flex align-center container header">
        <ul class="flex align-center pl-2">
            <li class='pr-1' v-for="(headerElement, i) in headerData" :key="i" >
                <router-link class="header-fonts" :to="headerElement.route"> {{ headerElement.label }} </router-link>
            </li>
        </ul>

        <div class="spacer"></div>

        <a class="pr-1" href="https://velktri.github.io/personal-site" >
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


<style lang="sass">
.header
    height: $headerHeight

.header-fonts
    font-size: 1.2rem
    text-decoration-color: black

.header-color
    background-image: linear-gradient(to right, $c-5, $cd-1)

.header-icon
    height: 2rem

</style>
