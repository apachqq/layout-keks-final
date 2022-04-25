<template>
    <section class="order" id="order">
        <div class="container">
            <h2 class="order__title title">Заказать</h2>
            <p class="order__tip">Не ждите пока нас отрекламируют, как Вятский квас, и мы поднимем цены! Закажите
                настоящий крафтовый квас сейчас. При заказе от 10 баррелей — скидка 10%.</p>
            <form class="order__form" action="" method="get">
                <div class="order__wrapper">
                    <label>Представьтесь:
                        <input type="text"/>
                    </label>
                </div>
                <div class="order__wrapper order__phone">
                    <label>Номер телефона:
                        <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
                    </label>
                </div>
                <div class="order__wrapper order__phone">
                    <label>Доп. номер:
                        <input type="tel" name="phone-ext" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
                    </label>
                </div>
                <div class="order__wrapper">
                    <label>Email:
                        <input type="email" name="email"/>
                    </label>
                </div>
                <div class="order__wrapper">
                    <label>Объём заказа: <br/>
                        <select id="value" name="value">
                            <option value="1">От 5 до 10 баррелей в неделю</option>
                        </select>
                    </label>
                </div>
                <div class="order__wrapper">
                    <label>Доп. комментарий:
                        <textarea name="text" id="text"></textarea>
                    </label>
                </div>
                <div class="order__wrapper">
                    <label class="order__newsletter">
                        <input class="visually-hidden" type="checkbox" checked="checked"/><span
                            class="custom-checkbox"></span> Я согласен получать квасную рассылку
                    </label>
                </div>
                <button class="button button__primary" type="submit">Отправить заказ</button>
            </form>
        </div>
    </section>
</template>

<script>
</script>

<style scoped>
</style>
