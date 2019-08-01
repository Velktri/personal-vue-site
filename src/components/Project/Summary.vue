<template>
    <div>
        <div class="border-all image" />
        <div class="caption border-bottom flex align-center justify-center">
            <div class="pa-1">
                {{ data.title }}
            </div>
        </div>
    </div>

        <!--<div class="summary-title">
            
        </div>
        <div class="summary-content">
            {{ data.summary }}
        </div>-->
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
$caption-height: 80px

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


.summary-content
    padding: 0.5rem
    text-align: left
    max-width: 100%

.caption
    background-color: rgba(0, 0, 0, 0.6)
    height: $caption-height
    width: 100%
    margin-top: calc(-1 * #{$caption-height})
    color: white

</style>