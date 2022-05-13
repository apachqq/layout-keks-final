<template>
    <article class="kvast">
        <h3 class="kvast__title title">{{ offer.name }}</h3>
        <div class="kvast__info">
            <table class="kvast__table">
                <tr>
                    <td class="kvast__characteristic">Алк.</td>
                    <td class="kvast__value">&lt; {{ offer.alcohol }}%</td>
                </tr>
                <tr>
                    <td class="kvast__characteristic">Ккал</td>
                    <td class="kvast__value">{{ offer.calorie }}</td>
                </tr>
            </table>
            <p class="kvast__consist">{{ offer.compound }}</p>
        </div>
        <img class="kvast__pic" :src="offer.picture" alt="Кваст «Вахтёр»" wigth="319"
             height="459"/>
        <p class="kvast__description">{{ offer.description }}</p>
        <p class="kvast__action">

            <button-more></button-more>

            <button-buy></button-buy>

            <b class="kvast__price">{{ offer.price }} Р.</b>
        </p>
    </article>
</template>

<script>
    import store from '@/store/store'

    export default {
        data () {
            return {
                buttonsValues: store.state.buttonsValues
            }
        },
        props: {
            offer: {
                type: Object
            }
        }
    }
</script>

<style scoped>
</style>
