<template>
    <div>
        <page-header :bIsFixed="true" :homeLink="HeaderHomeData" :headerData="HeaderData"/>

        <div class="flex column page-height landing">
            <div class="bg-top">
                <div class="flex wrap reverse align-center section-top container section-padding">
                    <div class="sm12 md12 lg4 mt-1">
                        <img class="profile-pic" src="../assets/male-profile.jpg" />
                    </div>

                    <div class="content-top sm12 md12 lg8 pa-0 mt-1">
                        <div class="pa-1 mx-1 text-block">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo laboriosam officia ab fuga! 
                            Quisquam, adipisci incidunt soluta inventore quis nam ab tempora tenetur quidem expedita deserunt, 
                            itaque cupiditate magnam, at et praesentium quasi. Doloremque odio magni non quas, animi quod.
                        </div>
                    </div>
                </div>
            </div>

            <section class="projects section-padding">
                <ul class="flex justify-center wrap container">
                    <li class="pa-1 ma-0" v-for="(element, i) in ProjectList" :key=i>
                        <summ :title="element" />
                    </li>
                </ul>
            </section>

            <section class="skills section-padding">
                <div class="container">
                    Area to intergrate skills from the linkedin API if its possible.
                </div>
                <img alt="Vue logo" src="../assets/logo.png">
            </section>

            <section class="about section-padding">
                <div class="container">
                    <div>
                        About Section
                    </div>
                    <img alt="Vue logo" src="../assets/logo.png">
                </div>
            </section>

            <footer class="footer section-padding">
                Footer and Contact
            </footer>
        </div>
    </div>
</template>

<script>
import summ from '@/components/Project/Summary.vue'
import siteHeader from '@/components/Layout/Header.vue'

export default {
    components: {
        summ,
        'page-header': siteHeader
    },

    name: 'Landing',

    data() {
        return {
            ProjectList: [
                "MMO Project",
                "Personal Site",
                "SaaS 3D editor",
                "3D Editor",
                "Platformer Game",
            ],

            HeaderHomeData: { label: 'Home', jump: 'landing', bIsLink: false },

            HeaderData: [
                { label: 'Projects', jump: 'projects', bIsIcon: false, bIsLink: false },
                { label: 'Skills', jump: 'skills', bIsIcon: false, bIsLink: false },
                { label: 'About', jump: 'about', bIsIcon: false, bIsLink: false },
                { label: 'Contact', jump: 'footer', bIsIcon: false, bIsLink: false },
                { label: 'Reference Journal', jump: '/reference', bIsIcon: false, bIsLink: true },
            ]
        }
    }
}
</script>

<style lang='sass'>

.content-top 
    padding: 20px
    line-height: 1.75rem
    text-align: justify
    font-size: 1.35rem
    font-family: Calibri, Cambria, Cochin, Georgia, Times, 'Times New Roman', sans-serif

.section-top
    //min-height: 550px
    min-height: calc(100vh - calc(#{$headerHeight} * 2))

.bg-top
    background-image: url(../assets/forest-haze-25.jpg)
    background-repeat: no-repeat
    background-size: cover
    background-position: center
    width: 100%

.profile-pic
    height: auto
    width: 90%
    max-width: 320px
    background-repeat: no-repeat
    background-size: cover
    background-position: center
    border-radius: 50%
    margin: auto

.projects-bg
    background-color: $cl-1

.projects
    width: 100%
    background-color: $cl-1

.section-padding
    padding: $headerHeight 0px

.skills
    background-color: $cd-3
    color: white
    height: 700px

.about
    background-color: $cd-1
    height: 700px

.footer
    flex-grow: 1
    background-color: $cl-3
    height: 700px
</style>
