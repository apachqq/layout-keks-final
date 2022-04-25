<template>
    <li><a class="site-list__link" :href="link.href">{{ link.name }}</a></li>
</template>

<script>
    export default {
        props: {
            link: {
                type: Object
            }
        }
    }
</script>

<style scoped>
</style>
