<template>
    <tr>
        <td class="assortment__name" scope="row">{{ item.name }}<sup :class="{assortment__new: item.new}">{{ item.newValue }}</sup></td>
        <td>&lt; {{ item.alcohol }}</td>
        <td>{{ item.calorie }}</td>
        <td>{{ item.size }}</td>
        <td>{{ item.price }}</td>
    </tr>
</template>

<script>
    export default {
        props: {
            item: {
                type: Object
            }
        }
    }
</script>

<style scoped>
</style>
