<template>
    <li>
        <article class="advantage--brew advantage">
            <h2 class="advantage__title">{{ text.title }}</h2>
            <p class="advantage__text">{{ text.text }}</p>
        </article>
    </li>
</template>

<script>
    export default {
        props: {
            text: {
                type: Object
            }
        }
    }
</script>

<style scoped>
</style>
