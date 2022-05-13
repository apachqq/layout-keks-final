<template>
    <section class="assortment" id="assortment">
        <div class="container">
            <h2 class="assortment__title title">Ассортимент</h2>
            <table class="items-list">
                <thead>
                <tr>
                    <th scope="col">Название</th>
                    <th scope="col">Алк.</th>
                    <th scope="col">Ккал</th>
                    <th scope="col">Объём</th>
                    <th scope="col">Стоимость</th>
                </tr>
                </thead>
                <tbody>

                <assortment-item
                        v-for="item in assortment"
                        :key="assortment.id"
                        :item="item"
                ></assortment-item>

                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
    import AssortmentItem from '@/components/AssortmentItem'
    import TheAssortmentMixin from '@/mixins/TheAssortmentMixin'

    export default {
        mixins: [TheAssortmentMixin],
        components: {AssortmentItem}
    }
</script>

<style scoped>
</style>
