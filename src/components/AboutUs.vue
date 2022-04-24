<template>
    <section class="advantages" id="advantages">
        <div class="container container--wide">
            <ul class="advantages__list">
                <advantage-text-item
                        v-for="text in advantageText"
                        :key="text.id"
                        :text="text"
                ></advantage-text-item>
            </ul>
        </div>
    </section>
</template>

<script>
    import AdvantageTextItem from '@/components/AdvantageTextItem'

    export default {
        props: {
            advantageText: {
                type: Array
            }
        },
        components: {AdvantageTextItem}
    }
</script>

<style scoped>
</style>
