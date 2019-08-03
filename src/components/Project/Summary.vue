<template>
    <div>
        <div class="border-all image"> 
            <div class="caption border-bottom">
                <div class="caption-title font-shadow noSelect">
                    {{ data.title }}
                </div>

                <div class="growing-line" />

                <div class="summary-content font-shadow noSelect">
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
/* Styling */
$border-rounding: .5rem
$caption-height: 60px

/* Transitions */
$frame-collapse: 0.4s
$frame-rising: 0.7s


.border-bottom
    border-radius: 0 0 $border-rounding $border-rounding

.border-top
    border-radius: $border-rounding $border-rounding 0 0

.border-all
    border-radius: $border-rounding

.image
    width: 100%
    padding-bottom: 100%
    background-position: center
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

    -webkit-transition: height $frame-collapse, padding-bottom $frame-collapse, background-color $frame-collapse, padding-top $frame-collapse
    transition: height $frame-collapse, padding-bottom $frame-collapse, background-color $frame-collapse, padding-top $frame-collapse

.image:hover .caption
    height: 0px
    padding-bottom: 100%
    display: block
    background-color: rgba(0, 0, 0, 0.7)
    border-radius: $border-rounding
    transition: height $frame-rising, padding-bottom $frame-rising, background-color $frame-rising, padding-top $frame-rising

.caption-title
    padding: 20px 0


.growing-line
    transition: opacity 0.2s
    opacity: 0

.image:hover .growing-line
    opacity: 1
    border-bottom: 1px solid white
    transition: opacity 1s
    transition-delay: 0.2s


.summary-content
    padding: 1rem
    text-align: left
    max-width: 100%
    visibility: hidden
    opacity: 0
    transition: opacity 0.2s
    transition-delay: 0.2s

.image:hover .summary-content
    visibility: visible
    opacity: 1
    transition: opacity 1s
    transition-delay: 0.2s

</style>