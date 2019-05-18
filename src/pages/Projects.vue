<template>
    <div class="projects-bg">
        <div class="container page-height">
            <ul class="flex wrap pt-1">
                <li class="pa-1 ma-0" v-for="(element, i) in ProjectList" :key=i>
                    <summ :title="element" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import summary from '@/components/Project/Summary.vue'

export default {

    components: {
        'summ': summary
    },

    data() {
        return {
            ProjectList: [
                "MMO Project",
                "Personal Site",
                "SaaS 3D editor",
                "3D Editor",
                "Platformer Game",
            ]
        }
    }
}
</script>

<style lang="sass">
.projects-bg
    background-color: $cl-1

</style>
