<template>
    <li>
        <article class="advantage--brew advantage">
            <h2 class="advantage__title">{{ item.title }}</h2>
            <p class="advantage__text">{{ item.text }}</p>
        </article>
    </li>
</template>

<script>
    import AdvantageTextItemMixin from '@/mixins/AdvantageTextItemMixin'

    export default {
        mixins: [AdvantageTextItemMixin]
    }
</script>

<style scoped>
</style>
