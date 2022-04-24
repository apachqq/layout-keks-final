<template>
    <tr>
        <td class="assortment__name" scope="row">{{ oneItem.name }}</td>
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
