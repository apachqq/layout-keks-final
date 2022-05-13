<template>
    <footer class="footer" id="bottom">
        <div class="container container--wide">
            <div class="footer__wrapper"><a class="footer__logo" href="#bottom"><img src="img/logo.png"
                                                                                     alt="Footer logo" width="140"
                                                                                     height="76"/></a>
                <ul class="site-list footer__nav">
                    <dynamic-links
                            v-for="link in dynamicLinks"
                            :key="link.id"
                            :link="link"
                    ></dynamic-links>
                </ul>
            </div>
            <div class="footer__wrapper">
                <div class="footer__social"><a class="icon-button icon-button--insta" href="#">Инстаграм</a><a
                        class="icon-button icon-button--fb" href="#">Фейсбук</a><a class="icon-button icon-button--vk"
                                                                                   href="#">Вконтакте</a></div>
                <p class="footer__copyright">При перепечатке материалов ссылка на сайт обязательна!</p>
                <div class="footer__dev"><a class="icon-button" href="https://htmlacademy.ru/courses/345"><img
                        src="img/htmlacademy.png" alt="HTML Academy Logo" width="27" height="34"/></a><b
                        class="footer__dev-label">Разработчик: </b><a href="#">HTML Academy</a></div>
            </div>
        </div>
    </footer>
</template>

<script>
    import DynamicLinks from '@/components/DynamicLinks'
    import TheFooterMixin from '@/mixins/TheFooterMixin'

    export default {
        mixins: [TheFooterMixin],
        components: {DynamicLinks}
    }
</script>

<style scoped>
</style>
