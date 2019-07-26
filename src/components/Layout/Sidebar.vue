<template>
    <aside class="sidebar-layout">
        <ul class="sidebar-list pt-1">
            <li v-for="(element, i) in data" :key=i>
                {{ element }}
            </li>
        </ul>
    </aside>

</template>

<script>
export default {
    name: 'page-sidebar',

    props: {
        data: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang='sass'>
.sidebar-layout
    width: 200px
    height: $pageHeight
    background-color: rgb(141, 83, 141)
    float: left
    position: fixed

.sidebar-list
    padding-left: .5rem
    text-align: left

</style>
