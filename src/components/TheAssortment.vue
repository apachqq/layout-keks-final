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
                <tr>
                    <td class="assortment__name" scope="row">Классика</td>
                    <td>&lt; 1,2%</td>
                    <td>33</td>
                    <td>330 мл</td>
                    <td>120 Р.</td>
                </tr>
                <tr>
                    <td class="assortment__name" scope="row">Шабаш</td>
                    <td>&gt; 1,2%</td>
                    <td>45</td>
                    <td>330 мл</td>
                    <td>250 Р.</td>
                </tr>
                <tr class="assortment--new">
                    <td class="assortment__name" scope="row">Вахтёр <sup class="assortment__new-tag">Новинка</sup>
                    </td>
                    <td>&lt; 1%</td>
                    <td>35</td>
                    <td>0,5 л</td>
                    <td>150 Р.</td>
                </tr>
                <tr class="assortment--new">
                    <td class="assortment__name" scope="row">Романтик <sup class="assortment__new-tag">Новинка</sup>
                    </td>
                    <td>&lt; 0,5%</td>
                    <td>27</td>
                    <td>0,5 л</td>
                    <td>90 Р.</td>
                </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            offer: {
                type: Object
            }
        },
    }
</script>

<style scoped>
</style>
