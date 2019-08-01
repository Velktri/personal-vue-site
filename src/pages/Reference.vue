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
                {
                    name: 'Test Driven Design',
                    children: []
                },
                {
                    name: 'React',
                    children: []
                },
                {
                    name: 'Vue',
                    children: [
                        {
                            name: 'Nuxt',
                            children: []
                        },
                    ]
                },
                {
                    name: 'Git',
                    children: []
                },
                {
                    name: 'Graphics',
                    children: [
                        {
                            name: 'OpenGL',
                            children: [
                                {
                                    name: 'Fixed Function Pipeline',
                                    children: []
                                },
                                {
                                    name: 'Modern OpenGl Pipeline',
                                    children: []
                                }
                            ]
                        },
                        {
                            name: 'Vulkan',
                            children: []
                        }
                    ]
                },
                {
                    name: 'CSS',
                    children: []
                },
                {
                    name: 'ASP.Net',
                    children: []
                },
                {
                    name: 'Design Patterns',
                    children: [
                        {
                            name: 'Singleton',
                            children: []
                        },
                        {
                            name: 'Command Pattern',
                            children: []
                        }
                    ]
                },
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
