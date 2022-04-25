<template>
    <a class="button" :class="{button__ghost: value === 'Подробнее'}" :href="link">{{ value }}</a> 
</template>

<script>
    export default {
        data () {
            return {
                value: 'Подробнее',
                link: '#history'
            }
        }
    }
</script>

<style scoped>
</style>
