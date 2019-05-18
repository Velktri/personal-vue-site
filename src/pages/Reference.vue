<template>
    <div class="flex">
        <Sidebar :data="SideBarData" />
        <div class="reference-content">
            Reference
        </div>

    </div>
</template>

<script>
import Sidebar from '@/components/Layout/Sidebar.vue'

export default {
    components: {
        Sidebar
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
            ]
        }
    }
}
</script>

<style lang="sass">
.reference-content
    min-height: $pageHeight
    width: 100%

</style>
