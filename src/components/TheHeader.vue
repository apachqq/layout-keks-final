<template>
    <header class="page-header" id="top">
        <div class="container">
            <nav class="main-nav"><a href="#top"><img src="img/logo.png" alt="Квас «Кваст» логотип" width="140"
                                                      height="76"/></a>
                <ul class="site-list">
                    <dynamic-links
                            v-for="link in dynamicLinks"
                            :key="link.id"
                            :link="link"
                    ></dynamic-links>
                </ul>
            </nav>
            <p class="page-header__slogan">Крафтовый квас <br> всему голова!</p>
        </div>
    </header>
</template>

<script>
    import DynamicLinks from '@/components/DynamicLinks'
    import TheHeaderMixin from '@/mixins/TheHeaderMixin'

    export default {
        mixins: [TheHeaderMixin],
        components: {DynamicLinks}
    }
</script>

<style scoped>
</style>
