<template>
    <li>
        <slot></slot>
        <div v-if="nodes.length > 0">
            <listNode class="node-padding" v-for="(node, i) in nodes" :nodes="node.children" :key=i>
                {{ node.name }}
            </listNode>
        </div>
    </li>
</template>

<script>
export default {
    name: 'listNode',

    props: {
        nodes: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="sass">
.node-padding
    padding-left: 1rem
</style>


