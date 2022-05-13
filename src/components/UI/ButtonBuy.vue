<template>
    <a class="button"
       :class="{button__primary: value === 'Купить' && link === '#order'}"
       :href="link">{{ value }}</a>
</template>

<script>
    export default {
        name: 'button-buy',
        data() {
            return {
                value: 'Купить',
                link: '#order'
            }
        }
    }
</script>

<style scoped>
</style>
