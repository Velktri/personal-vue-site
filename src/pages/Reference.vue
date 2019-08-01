<template>
    <div>
        <page-header :bIsFixed="true" :homeLink="HeaderHomeData" />
        <div class="flex header-padding">
            <Sidebar :data="SideBarData" />
            <div class="reference-content">
                Reference
            </div>

        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Layout/Sidebar.vue'
import Header from '@/components/Layout/Header.vue'

export default {
    components: {
        Sidebar,
        'page-header': Header
    },

    
    data() {
        return {
            SideBarData: [
                'Test Driven Design',
                'React',
                'Vue',
                'Git',
                'Graphics',
                'CSS',
                'ASP.Net',
                'Nuxt',
                'Vulkan',
                'Design Patterns'
            ],

            HeaderHomeData: { label: 'Home', jump: '/', bIsIcon: true, bIsLink: true },
        }
    }
}
</script>

<style lang="sass">

.header-padding
    padding-top: $headerHeight

.reference-content
    height: 200vh
    min-height: $pageHeight
    width: 100%

</style>
