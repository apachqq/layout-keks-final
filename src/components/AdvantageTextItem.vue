<template>
    <li>
        <article class="advantage--brew advantage">
            <h2 class="advantage__title">{{ item.title }}</h2>
            <p class="advantage__text">{{ item.text }}</p>
        </article>
    </li>
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
