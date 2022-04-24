<template>
    <tr>
        <td class="assortment__name" scope="row">{{ oneItem.name }}<sup :class="{assortment__new: oneItem.new}">{{oneItem.newValue}}</sup></td>
        <td>&lt; {{ oneItem.alcohol }}</td>
        <td>{{ oneItem.calorie }}</td>
        <td>{{ oneItem.size }}</td>
        <td>{{ oneItem.price }}</td>
    </tr>
</template>

<script>
    export default {
        props: {
            oneItem: {
                type: Object
            }
        }
    }
</script>

<style scoped>
</style>
