<template>
    <aside class="sidebar-layout">
        <ul class="sidebar-list pt-1">
            <listNode v-for="(node, i) in data" :nodes="node.children" :key=i>
                {{ node.name }}
            </listNode>
        </ul>
    </aside>

</template>

<script>
import listNode from '@/components/Layout/SideBarNode.vue'

export default {
    name: 'page-sidebar',

    components: {
        listNode
    },

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
    max-width: 100%
    min-height: $pageHeight
    background-color: rgb(141, 83, 141)
    position: fixed

.sidebar-list
    padding: 0 1rem
    text-align: left
    white-space: nowrap

</style>
