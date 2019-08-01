<template>
<div class="header-color" :style="{ position: (bIsFixed) ? 'fixed': 'relative' }">
    <div class="container header">
        <div class="flex align-center justity-between header-start">
            <img @click="scrollOrLink(homeLink.jump, homeLink.bIsLink)" src="@/assets/logo.png" class="header-logo header-cursor noSelect">

            <div @click="dropDown()" style="font-size:24px" class="fa fa-bars header-icon header-cursor pr-1 noSelect"></div>
        </div>


        <ul class="flex header-ul">
            <li class='pr-1 header-list noSelect' v-for="(headerElement, i) in headerData" :key="i">
                <div @click="scrollOrLink(headerElement.jump, headerElement.bIsLink)" class="header-link header-cursor">
                    {{ headerElement.label }}
                </div>
            </li>
        </ul>
    </div>
</div>

</template>

<script>
export default {
    name: 'page-header',

    props: {
        homeLink: {
            type: Object,
            default: () => {}
        },

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
            ],

            bIsMobile: true
        }
    },

    mounted() {
        window.addEventListener('resize', this.handleResize)
        this.handleResize()
        this.initDropdown()
    },

    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize)
    },

    methods: {
        scrollOrLink(destination, bIsLink) {
            if (bIsLink) {
                this.$router.push(destination)
            } else {
                window.scrollBy({ 
                    top: document.querySelector('.' + destination).getBoundingClientRect().top, 
                    behavior: 'smooth' 
                })
            }
        },

        dropDown() {
            let hStyle = this.$el.querySelector('.header-ul').style
            if (hStyle.display === 'none') {
                hStyle.display = 'flex'
            } else {
                hStyle.display = 'none'
            }
        },

        handleResize() {
            if (window.innerWidth > 500) {
                this.$el.querySelector('.header-ul').style.display = 'flex'
                this.bIsMobile = false
            } else {
                if (!this.bIsMobile) {
                    this.$el.querySelector('.header-ul').style.display = 'none'
                    this.bIsMobile = true
                }
            }
        },

        initDropdown() {
            if (this.bIsMobile) {
                this.$el.querySelector('.header-ul').style.display = 'none'
            }
        }
    }
}
</script>


<style lang="sass">

@media screen and (max-width: 500px)
    .header-list
        background-color: rgba(0, 0, 0, 0.6)
        padding: .25rem 0
        display: flex
        align-items: center
        padding-left: 1rem

    .header-list:first-child
        padding-top: .75rem
        border-top: 1px solid white 

    .header-list:last-child
        padding-bottom: .75rem

    .header-icon
        display: flex
        color: white

    .header
        flex-flow: column

    .header-start
        width: 100%
        height: $headerHeight

    .header-ul
        flex-flow: column
        width: 100%
        display: none

@media screen and (min-width: 500px)
    .header-icon
        display: none

    .header-list
        display: flex

    .header
        flex-flow: row
        display: flex
        align-items: center
        justify-content: space-between

.header
    height: $headerHeight

.header-cursor
    cursor: pointer

.header-link
    font-size: 1.2rem
    color: white


.header-color
    background-color: rgba(0, 0, 0, 0.6)
    z-index: 10
    width: 100%

.header-logo
    height: 1.9rem
    padding-left: .6rem

.logoPic
    background-image: url("../../assets/logo.png")
    background-position: center
    background-repeat: no-repeat
    background-size: contain
    width: 31px
    height: 31px
    margin-left: .6rem

</style>
