<template>
    <li><a class="site-list__link" :href="link.href">{{ link.name }}</a></li>
</template>

<script>
    import DynamicLinksMixin from '@/mixins/DynamicLinksMixin'

    export default {
        mixins: [DynamicLinksMixin]
    }
</script>

<style scoped>
</style>
