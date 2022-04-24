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
                        v-for="oneItem in assortment"
                        :key="assortment.id"
                        :oneItem="oneItem"
                ></assortment-item>

                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
    import AssortmentItem from '@/components/AssortmentItem'

    export default {
        props: {
            assortment: {
                type: Array
            }
        },
        components: {AssortmentItem}
    }
</script>

<style scoped>
</style>
