<template>
    <div class="sum-container">
        <div class="pt-2">
            {{ title }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'summary',

    props: {
        title: {
            type: String,
            default: '',
            required: true
        },
    }
}
</script>

<style lang='sass'>
.sum-container 
    width: 300px
    height: 300px
    border-radius: .5rem

    background-color: $cl-3

</style>