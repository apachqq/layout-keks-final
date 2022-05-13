<template>
    <section class="advantages" id="advantages">
        <div class="container container--wide">
            <ul class="advantages__list">
                <advantage-text-item
                        v-for="item in advantageText"
                        :key="item.id"
                        :item="item"
                ></advantage-text-item>
            </ul>
        </div>
    </section>
</template>

<script>
    import AdvantageTextItem from '@/components/AdvantageTextItem'
    import AboutUsMixin from '@/mixins/AboutUsMixin'

    export default {
        mixins: [AboutUsMixin],
        components: {AdvantageTextItem}
    }
</script>

<style scoped>
</style>
