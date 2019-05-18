<template>
    <div class="flex column page-height">
        <div class="bg-top">
            <div class="flex align-center section-top container">
                <div class="content-top">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo laboriosam officia ab fuga! 
                    Quisquam, adipisci incidunt soluta inventore quis nam ab tempora tenetur quidem expedita deserunt, 
                    itaque cupiditate magnam, at et praesentium quasi. Doloremque odio magni non quas, animi quod.
                    {{ testData }}
                </div>

                <div class="image-top">
                    picture
                </div>
            </div>
        </div>

        <div class="section-mid">
            Mid Section
        </div>

        <div class="footer">
            footer
        </div>
    </div>
</template>

<script>
export default {
    name: 'Landing',

    data() {
        return {
            testData: 'Im a Test!'
        }
    }
}
</script>

<style lang='sass'>
.content-top 
    padding: 20px
    line-height: 2.5rem
    text-align: justify
    font-size: 1.5rem
    font-family: Calibri, Cambria, Cochin, Georgia, Times, 'Times New Roman', sans-serif

.section-top 
    height: 500px

.bg-top
    background-color: $c-2
    width: 100%

.image-top
    max-width: 300px
    min-width: 300px
    height: 300px
    background-color: lighten(red, 30%)

.section-mid
    min-height: 500px
    width: 100%
    background-color: $cl-1

.footer
    height: 100%
    width: 100%
    background-color: $cl-3
</style>
