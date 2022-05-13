<template>
    <a class="button"
       :class="{button__primary: value === 'Купить' && link === '#order'}"
       :href="link">{{ value }}</a>
</template>

<script>
    import ButtonBuyMixin from '@/mixins/ButtonBuyMixin'

    export default {
        name: 'button-buy',
        mixins: [ButtonBuyMixin]
    }
</script>

<style scoped>
</style>
