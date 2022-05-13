<template>
    <a class="button"
       :class="{button__ghost: value === 'Подробнее' && link === '#history'}"
       :href="link">{{ value }}</a> 
</template>

<script>
    import ButtonMoreMixin from '@/mixins/ButtonMoreMixin'

    export default {
        name: 'button-more',
        mixins: [ButtonMoreMixin]
    }
</script>

<style scoped>
</style>
