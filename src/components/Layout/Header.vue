<template>
<div class="header-color" :style="{ position: (bIsFixed) ? 'fixed': 'relative' }">
    <div class="flex align-center container header">
        <a class="pr-1" href="https://velktri.github.io/personal-site" >
            <img src="@/assets/react.svg" class="header-icon">
        </a>

        <div class="spacer"></div>

        <ul class="flex align-center pl-2">
            <li class='pr-1' v-for="(headerElement, i) in headerData" :key="i" >
                <router-link v-if="headerElement.bIsLink" class="header-link" :to="headerElement.jump"> {{ headerElement.label }} </router-link>
                <div v-else  @click="scrollTo(headerElement.jump)" class="header-link">{{ headerElement.label }}</div>
            </li>
        </ul>

        <!--<div @click="dropDown()" style="font-size:24px" class="fa fa-bars header-link"></div>-->
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
        },

        bIsFixed: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            AccountMenu: [
                { label: 'Account', jump: 'account' },
            ]
        }
    },

    methods: {
        scrollTo(inScroll) {
            window.scrollBy({ 
                top: document.querySelector('.' + inScroll).getBoundingClientRect().top, 
                behavior: 'smooth' 
            })
        },

        dropDown() {
            //console.log('drop down!')
        }
    }
}
</script>


<style lang="sass">

//@media screen and (max-width: 500px)

//@media screen and (min-width: 500px)


.header
    height: $headerHeight

.header-link
    font-size: 1.2rem
    color: white
    cursor: pointer

.header-color
    background-color: rgba(0, 0, 0, 0.5)
    width: 100%

.header-icon
    height: 2rem

</style>
