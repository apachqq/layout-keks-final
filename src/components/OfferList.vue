<template>
    <section class="new-items">
        <div class="container">
            <h2 class="new-items__title title">Новинки</h2>
            <div class="new-items__list">
                <card-item
                        v-for="offer in offers"
                        :key="offer.id"
                        :offer="offer"
                ></card-item>
            </div>
        </div>
    </section>
</template>

<script>
    import CardItem from '@/components/CardItem'
    import OfferListMixin from '@/mixins/OfferListMixin'

    export default {
        mixins: [OfferListMixin],
        components: {CardItem}
    }
</script>

<style scoped>
</style>
