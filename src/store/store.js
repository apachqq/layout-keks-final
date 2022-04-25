import { createStore } from 'vuex'

export default createStore({
    state: {
        offers: [
            {
                id: 1,
                name: 'ВАХТЁР',
                alcohol: 1,
                calorie: 35,
                compound: 'Ржаной хлеб, Вода, Солод, Соль',
                picture: 'img/bottle-left.jpg',
                description: 'Терпкий и мощный, вкус этого кваса взбодрит после тяжёлого дня и придаст сил для вечерних приключений!',
                price: 150
            },
            {
                id: 2,
                name: 'РОМАНТИК',
                alcohol: 0.5,
                calorie: 27,
                compound: 'Ячменный хлеб, Вода, Солод, Апельсин',
                picture: 'img/bottle-right.jpg',
                description: 'Лёгкий и освежающий напиток поможет сохранять отличное настроение в течение всего дня.',
                price: 90
            }
        ],

        advantageText: [
            {
                id: 1,
                title: 'Варим сами',
                text: 'Вот этими самыми руками. Экспериментируем и творим, что хотим.'
            },
            {
                id: 2,
                title: 'Своё, родное',
                text: 'Не заработка ради, а импортозамещения для. Поднимаем производство.'
            },
            {
                id: 3,
                title: 'Не экономим',
                text: 'Человек это то, что он ест и пьёт. У нас только качественные ингредиенты.'
            }
        ],

        assortment: [
            {
                id: 1,
                name: 'Классика',
                alcohol: '1.2%',
                calorie: 33,
                size: '330 МЛ',
                price: '120 Р.',
                new: false
            },
            {
                id: 2,
                name: 'Шабаш',
                alcohol: '1.2%',
                calorie: 45,
                size: '330 МЛ',
                price: '250 Р.',
                new: false
            },
            {
                id: 3,
                name: 'Вахтёр',
                alcohol: '1%',
                calorie: 35,
                size: '0.5 Л',
                price: '150 Р.',
                new: true,
                newValue: 'Новинка'
            },
            {
                id: 4,
                name: 'Романтик',
                alcohol: '0.5%',
                calorie: 27,
                size: '0.5 Л',
                price: '90 Р.',
                new: true,
                newValue: 'Новинка'
            }
        ],

        dynamicLinks: [
            {
                id: 1,
                href: '#history',
                name: 'История'
            },
            {
                id: 2,
                href: '#advantages',
                name: 'Производство'
            },
            {
                id: 3,
                href: '#assortment',
                name: 'Ассортимент'
            },
            {
                id: 4,
                href: '#order',
                name: 'Где купить'
            }
        ]
    }
})
