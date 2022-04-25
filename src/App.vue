<template>
    <the-header></the-header>

    <offer-list :offers="offers"></offer-list>

    <about-us :advantageText="advantageText"></about-us>

    <history-of-kvass></history-of-kvass>

    <press-about-us></press-about-us>

    <the-assortment :assortment="assortment"></the-assortment>

    <order-form></order-form>

    <the-footer></the-footer>

</template>

<script>
    import TheHeader from '@/components/TheHeader'
    import OfferList from '@/components/OfferList'
    import AboutUs from '@/components/AboutUs'
    import HistoryOfKvass from '@/components/HistoryOfKvass'
    import PressAboutUs from '@/components/PressAboutUs'
    import TheAssortment from '@/components/TheAssortment'
    import OrderForm from '@/components/OrderForm'
    import TheFooter from '@/components/TheFooter'

    import store from '@/store/store'

    export default {
        data() {
            return {
                offers: store.state.offers,
                advantageText: store.state.advantageText,
                assortment: store.state.assortment
            }
        },
        components: {TheHeader, OfferList, TheFooter, AboutUs, HistoryOfKvass, PressAboutUs, TheAssortment, OrderForm}
    }
</script>

<style>
</style>
