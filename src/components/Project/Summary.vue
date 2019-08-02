<template>
    <div>
        <div class="border-all image"> 
            <div class="caption border-bottom">
                <div class="caption-title">
                    {{ data.title }}
                </div>

                <div class="growing-line" />

                <div class="summary-content">
                    {{ data.summary }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'summ',

    props: {
        data: {
            type: Object,
            default: () => {},
            required: true
        },
    }
}
</script>

<style lang='sass'>
$border-rounding: .5rem
$caption-height: 60px
$transition-speed: 1s

.border-bottom
    border-radius: 0 0 $border-rounding $border-rounding

.border-top
    border-radius: $border-rounding $border-rounding 0 0

.border-all
    border-radius: $border-rounding

.image
    width: 100%
    background-position: center
    padding-bottom: 100%
    background-position: center center
    background-repeat: no-repeat
    background-size: cover
    background-image: url('../../assets/code.jpg')
    position: relative


.caption
    background-color: rgba(0, 0, 0, 0.5)
    height: $caption-height
    width: 100%
    color: white
    position: absolute
    bottom: 0
    padding-top: 0
    display: block

    -webkit-transition: height $transition-speed, padding-bottom $transition-speed, background-color $transition-speed, padding-top $transition-speed
    transition: height $transition-speed, padding-bottom $transition-speed, background-color $transition-speed, padding-top $transition-speed

.image:hover .caption
    height: 0px
    padding-bottom: 100%
    display: block
    background-color: rgba(0, 0, 0, 0.7)
    border-radius: $border-rounding


.caption-title
    padding: 20px 0

.image:hover .caption-title
    padding-top: 20px


.growing-line
    animation-delay: $transition-speed

.image:hover .growing-line
    border-bottom: 1px solid white


.summary-content
    padding: 1rem
    text-align: left
    max-width: 100%
    display: none
    transition: display 2s

.image:hover .summary-content
    display: block

</style>