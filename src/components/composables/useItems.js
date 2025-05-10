import { ref, watch } from "vue"

// МАССИВ ТОВАРЫ
const items = ref([])
try {
    if (localStorage.getItem('items') === null) {
        items.value = [
            {
                favorite: false,
                in_basket: false,
                type: 'ring',
                new_item: false,

                id: 0,
                name: 'Кольцо с рубином',
                image: "https://raw.githubusercontent.com/Olianaoa/Aurgentum/refs/heads/main/src/assets/catalog_img/rings_img/%D0%BA%D0%BE%D0%BB%D1%8C%D1%86%D0%BE_%D1%81_%D1%80%D1%83%D0%B1%D0%B8%D0%BD%D0%BE%D0%BC.png",
                price: '550000',
                description: 'Роскошное кольцо из благородного золота с центральным акцентом — ярким рубином насыщенного винно-красного оттенка. Камень имеет элегантную огранку типа "изумруд", подчёркивающую его глубину и внутреннее сияние.',
                description2: 'Идеально подойдёт как для вечернего выхода, так и для особенного события. Это украшение подчеркнёт статус и вкус своей обладательницы.',

                material: 'золото',
                weight: 'Вес изделия: 5.4 г ',
                stone: 'Вставка: натуральный рубин и горный хрусталь',
                shape: 'Огранка рубина: изумрудная',
                stone_weight: 'Вес рубина: 2.5 карата ',
                size: 'Размер кольца: 18'
            },
            {
                favorite: false,
                in_basket: false,
                type: 'bracelet',
                new_item: true,


                id: 1,
                name: 'Браслет с бриллиантами',
                image: "https://raw.githubusercontent.com/Olianaoa/Aurgentum/refs/heads/main/src/assets/catalog_img/bracelet_img/%D1%81%D0%B5%D1%80_%D0%B1%D1%80%D0%B0%D1%81%D0%BB%D0%B5%D1%82.png",
                price: '750000',
                description: 'Этот великолепный браслет с бриллиантами олицетворяет элегантность и безупречный стиль. Утонченное плетение из серебра и сияние камней создают неповторимое украшение, способное подчеркнуть статус и вкус своей обладательницы. Идеальный выбор для особых случаев и роскошных образов.',
                description2: 'Благодаря утончённому дизайну и блеску камней, он станет главным украшением вашего образа.',

                material: 'серебро',
                weight: 'Вес: 85 грамм',
                stone: 'Вставки: бриллианты',
                shape: 'Огранка камней: круглая и грушевидная',
                stone_weight: 'Общий вес бриллиантов: 5.8 карат',
                size: 'Длина: 18 см.'
            },
            {
                favorite: false,
                in_basket: false,
                type: 'earring',
                new_item: false,

                id: 2,
                name: 'Золотые серьги',
                image: "https://raw.githubusercontent.com/Olianaoa/Aurgentum/refs/heads/main/src/assets/catalog_img/earrings_img/%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D1%8B%D0%B5_%D1%81%D0%B5%D1%80%D1%8C%D0%B3%D0%B8.png",
                price: '890000',
                description: 'Эти утонченные серьги из золота с бриллиантами воплощают в себе сочетание классики и современного стиля. Изящная форма, дополненная сверкающими камнями, делает их идеальным аксессуаром для торжественных мероприятий и особенных моментов. Их элегантность и блеск подчеркнут вашу индивидуальность и женственность.',
                description2: 'Они подойдут как для вечернего выхода, так и для особых случаев.',

                material: 'золото',
                weight: 'Вес: 15 грамм',
                stone: 'Вставки: бриллианты и кристаллы циркония',
                shape: 'Огранка камней: круглая',
                stone_weight: 'Общий вес бриллиантов: 1.2 карата',
                size: 'Длина: 4 см.'
            },
            {
                favorite: false,
                in_basket: false,
                type: 'neckless',
                new_item: false,

                id: 3,
                name: 'колье с бриллиантами',
                image: "https://raw.githubusercontent.com/Olianaoa/Aurgentum/refs/heads/main/src/assets/catalog_img/neckless_img/%D0%BA%D0%BE%D0%BB%D1%8C%D0%B5_%D1%81_%D0%B1%D1%80%D0%B8%D0%BB%D0%BB%D0%B8%D0%B0%D0%BD%D1%82%D0%B0%D0%BC%D0%B8.png",
                price: '3550000',
                description: 'Изящное ожерелье, инкрустированное множеством сверкающих камней, воплощает утонченную элегантность. Крупные фианиты расположены каскадом, плавно переходя к центральному элементу — крупному каплевидному бриллианту, который служит главным акцентом композиции. Камни искусно огранены, что создаёт эффект ослепительного сияния, подчёркивающего линию шеи и декольте.',
                description2: 'Классический дизайн ожерелья делает его универсальным — оно гармонично сочетается как с ретро-стилем, так и с современными трендами высокой моды.',

                material: 'серебро',
                weight: 'Вес изделия: 12.7 г ',
                stone: 'Вставка: Бриллианты и фианиты',
                shape: 'Огранка камней: круглая и каплевидная',
                stone_weight: 'Общий вес бриллиантов: 6.7 карата',
                size: 'Длина цепочки: 40 см'
            },

            {
                favorite: false,
                in_basket: false,
                type: 'earring',
                new_item: true,

                id: 4,
                name: 'Серьги с сапфирами',
                image: "https://raw.githubusercontent.com/Olianaoa/Aurgentum/refs/heads/main/src/assets/catalog_img/earrings_img/sapphire.png",
                price: '2300000',
                description: 'Роскошные серьги с крупными сапфирами насыщенного синего цвета, обрамлённые множеством сверкающих бриллиантов. Изысканный дизайн подчёркивает утончённость и статус.',
                description2: 'Эти серьги станут идеальным акцентом для вечернего наряда или особого события, придавая образу элегантность и неповторимый шарм.',

                material: 'белое золото',
                weight: 'Вес изделия: 12.5 г',
                stone: 'Вставки: сапфиры, бриллианты',
                shape: 'Огранка сапфира: изумрудная',
                stone_weight: 'Вес сапфиров: 6.4 карата',
                size: 'Размер: универсальный'

            },
            {
                favorite: false,
                in_basket: false,
                type: 'ring',
                new_item: true,

                id: 5,
                name: 'Кольцо с бриллиантом',
                image: "https://raw.githubusercontent.com/Olianaoa/Aurgentum/refs/heads/main/src/assets/catalog_img/rings_img/%D0%BA%D0%BE%D0%BB%D1%8C%D1%86%D0%BE_%D1%81_%D0%B1%D1%80%D0%B8%D0%BB%D0%BB%D0%B8%D0%B0%D0%BD%D1%82%D0%BE%D0%BC.png",
                price: '1750000',
                description: 'Великолепное кольцо с крупным бриллиантом грушевидной огранки в окружении изысканных круглых бриллиантов. Белое золото подчёркивает сияние камней, создавая эффект незабываемого блеска.',
                description2: 'Идеальный выбор для помолвки или знакового события. Это украшение станет символом вечной любви и утончённого вкуса.',

                material: 'золото',
                weight: 'Вес изделия: 7.8 г',
                stone: 'Вставки: бриллианты',
                shape: 'Огранка бриллианта: круглая',
                stone_weight: 'Вес центрального бриллианта: 3.1 карата',
                size: 'Размер кольца: 17'
            },
            {
                favorite: false,
                in_basket: false,
                type: 'bracelet',
                new_item: false,

                id: 6,
                name: 'Золотой браслет ',
                image: "https://raw.githubusercontent.com/Olianaoa/Aurgentum/refs/heads/main/src/assets/catalog_img/bracelet_img/%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B9_%D0%B1%D1%80%D0%B0%D1%81%D0%BB%D0%B5%D1%82.png",
                price: '1515000',
                description: 'Изящный теннисный браслет из золота, украшенный сверкающими бриллиантами в классической круглой огранке. Благодаря своему минималистичному, но элегантному дизайну, он станет идеальным дополнением как к вечернему, так и к повседневному образу.',
                description2: 'Это украшение подчеркнёт статус и изысканный стиль своей обладательницы. Совершенная гармония драгоценных материалов и мастерства исполнения.',

                material: 'золото',
                weight: 'Вес изделия: 15.6 г',
                stone: 'Вставки: бриллианты',
                shape: 'Огранка камней: круглая',
                stone_weight: 'Общий вес бриллиантов: 7.4 карата',
                size: 'Длина браслета: 18 см'
            },
            {
                favorite: false,
                in_basket: false,
                type: 'neckless',
                new_item: false,

                id: 7,
                name: 'Цветочное колье',
                image: "https://raw.githubusercontent.com/Olianaoa/Aurgentum/refs/heads/main/src/assets/catalog_img/neckless_img/%D0%BA%D0%BE%D0%BB%D1%8C%D0%B5_%D1%86%D0%B2%D0%B5%D1%82%D1%8B.png",
                price: '1215000',
                description: "Роскошное колье, украшенное множеством сверкающих бриллиантов, создает образ истинной королевской элегантности. Многоуровневая композиция из цветов и листьев плавно спадает по шее, образуя эффектный акцент в виде центрального цветка, полностью усыпанного камнями.",
                description2: "Благодаря классическому флористическому мотиву и безупречному блеску, колье идеально дополнит как вечернее платье, так и образ для торжественного мероприятия.",
                material: "белое золото",
                weight: "Вес изделия: 15.2 г",
                stone: "Вставка: бриллианты",
                shape: "Огранка камней: круглая и марquise",
                stone_weight: "Общий вес бриллиантов: 7.3 карата",
                size: "Длина цепочки: 42 см"
            },
            {
                favorite: false,
                in_basket: false,
                type: 'ring',
                new_item: false,

                id: 8,
                name: 'Золотое кольцо с изумрудом',
                image: "https://raw.githubusercontent.com/Olianaoa/Aurgentum/refs/heads/main/src/assets/catalog_img/rings_img/%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B5_%D0%BA%D0%BE%D0%BB%D1%8C%D1%86%D0%BE.png",
                price: '515000',
                description: "Элегантное кольцо из золота с выразительным изумрудом овальной формы в центре, обрамлённым сияющими фианитами. Сочетание насыщенного зелёного оттенка и блеска камней придаёт украшению утончённый шарм.",
                description2: "Это кольцо станет изюминкой вечернего наряда или прекрасным подарком на особый случай. Оно подчеркнёт вкус и индивидуальность своей обладательницы.",
                material: "золото",
                weight: "Вес изделия: 4.1 г",
                stone: "Вставка: изумруд и фианиты",
                shape: "Огранка изумруда: овальная",
                stone_weight: "Вес изумруда: 1.8 карата",
                size: "Размер кольца: 17"
            },
            {
                favorite: false,
                in_basket: false,
                type: 'earring',
                new_item: false,

                id: 9,
                name: 'Серьги с рубинами',
                image: "https://raw.githubusercontent.com/Olianaoa/Aurgentum/refs/heads/main/src/assets/catalog_img/earrings_img/%D1%81%D0%B5%D1%80%D1%8C%D0%B3%D0%B8_%D1%80%D1%83%D0%B1%D0%B8%D0%BD.jpg",
                price: '2600000',
                description: 'Богатые серьги с крупными рубинами насыщенного красного цвета, обрамлённые россыпью бриллиантов. Идеальное сочетание классики и яркого акцента.',
                description2: 'Эти серьги подчеркнут роскошь и индивидуальность их обладательницы, идеально подходя для торжественных мероприятий и вечерних выходов.',

                material: 'белое золото',
                weight: 'Вес изделия: 13.1 г',
                stone: 'Вставки: рубины, бриллианты',
                shape: 'Огранка рубина: ашер',
                stone_weight: 'Вес рубинов: 5.8 карата',
                size: 'Размер: универсальный'
            },
            {
                favorite: false,
                in_basket: false,
                type: 'bracelet',
                new_item: false,

                id: 10,
                name: 'Браслет из белого золота',
                image: "https://raw.githubusercontent.com/Olianaoa/Aurgentum/refs/heads/main/src/assets/catalog_img/bracelet_img/bracelet.jpg",
                price: '1850000',
                description: 'Элегантный браслет из белого золота, инкрустированный крупными бриллиантами и соединённый изысканными звеньями. Блестящая огранка камней подчёркивает их чистоту и блеск.',
                description2: 'Безупречный выбор для особых случаев и вечерних выходов. Браслет подчеркнёт изысканный вкус своей обладательницы.',

                material: 'белое золото',
                weight: 'Вес изделия: 14.2 г',
                stone: 'Вставки: бриллианты',
                shape: 'Огранка бриллианта: круглая',
                stone_weight: 'Общий вес бриллиантов: 5.8 карата',
                size: 'Размер: 18 см'
            },
            {
                favorite: false,
                in_basket: false,
                type: 'neckless',
                new_item: false,

                id: 11,
                name: 'Кулон в форме сердца с аквамарином',
                image: "https://raw.githubusercontent.com/Olianaoa/Aurgentum/refs/heads/main/src/assets/catalog_img/neckless_img/%D0%BF%D0%BE%D0%B4%D0%B2%D0%B5%D1%81%D0%BA%D0%B0_%D1%81%D0%B5%D1%80%D0%B4%D1%86%D0%B5.jpg",
                price: '3850000',
                description: 'Нежный кулон в форме сердца с крупным аквамарином, окружённым изящной оправой из белого золота. Прозрачный голубой камень притягивает взгляды и восхищение.',
                description2: 'Этот кулон станет прекрасным подарком для выражения самых тёплых чувств и любви, сохраняя в себе частичку мечты и романтики.',

                material: 'белое золото',
                weight: 'Вес изделия: 6.2 г',
                stone: 'Вставки: аквамарин',
                shape: 'Огранка аквамарина: сердце',
                stone_weight: 'Вес аквамарина: 4.3 карата',
                size: 'Длина цепочки: 45 см'
            },
        ]
    } else {
        items.value = JSON.parse(localStorage.getItem('items'))
    }
} catch (error) { //обязательно в скобках что-то, иначе ругается
    items.value = [
        {
            favorite: false,
            in_basket: false,
            type: 'ring',
            new_item: false,

            id: 0,
            name: 'Кольцо с рубином',
            image: "https://raw.githubusercontent.com/Olianaoa/Aurgentum/refs/heads/main/src/assets/catalog_img/rings_img/%D0%BA%D0%BE%D0%BB%D1%8C%D1%86%D0%BE_%D1%81_%D1%80%D1%83%D0%B1%D0%B8%D0%BD%D0%BE%D0%BC.png",
            price: '550000',
            description: 'Роскошное кольцо из благородного золота с центральным акцентом — ярким рубином насыщенного винно-красного оттенка. Камень имеет элегантную огранку типа "изумруд", подчёркивающую его глубину и внутреннее сияние.',
            description2: 'Идеально подойдёт как для вечернего выхода, так и для особенного события. Это украшение подчеркнёт статус и вкус своей обладательницы.',

            material: 'золото',
            weight: 'Вес изделия: 5.4 г ',
            stone: 'Вставка: натуральный рубин и горный хрусталь',
            shape: 'Огранка рубина: изумрудная',
            stone_weight: 'Вес рубина: 2.5 карата ',
            size: 'Размер кольца: 18'
        },
        {
            favorite: false,
            in_basket: false,
            type: 'bracelet',
            new_item: true,


            id: 1,
            name: 'Браслет с бриллиантами',
            image: "https://raw.githubusercontent.com/Olianaoa/Aurgentum/refs/heads/main/src/assets/catalog_img/bracelet_img/%D1%81%D0%B5%D1%80_%D0%B1%D1%80%D0%B0%D1%81%D0%BB%D0%B5%D1%82.png",
            price: '750000',
            description: 'Этот великолепный браслет с бриллиантами олицетворяет элегантность и безупречный стиль. Утонченное плетение из серебра и сияние камней создают неповторимое украшение, способное подчеркнуть статус и вкус своей обладательницы. Идеальный выбор для особых случаев и роскошных образов.',
            description2: 'Благодаря утончённому дизайну и блеску камней, он станет главным украшением вашего образа.',

            material: 'серебро',
            weight: 'Вес: 85 грамм',
            stone: 'Вставки: бриллианты',
            shape: 'Огранка камней: круглая и грушевидная',
            stone_weight: 'Общий вес бриллиантов: 5.8 карат',
            size: 'Длина: 18 см.'
        },
        {
            favorite: false,
            in_basket: false,
            type: 'earring',
            new_item: false,

            id: 2,
            name: 'Золотые серьги',
            image: "https://raw.githubusercontent.com/Olianaoa/Aurgentum/refs/heads/main/src/assets/catalog_img/earrings_img/%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D1%8B%D0%B5_%D1%81%D0%B5%D1%80%D1%8C%D0%B3%D0%B8.png",
            price: '890000',
            description: 'Эти утонченные серьги из золота с бриллиантами воплощают в себе сочетание классики и современного стиля. Изящная форма, дополненная сверкающими камнями, делает их идеальным аксессуаром для торжественных мероприятий и особенных моментов. Их элегантность и блеск подчеркнут вашу индивидуальность и женственность.',
            description2: 'Они подойдут как для вечернего выхода, так и для особых случаев.',

            material: 'золото',
            weight: 'Вес: 15 грамм',
            stone: 'Вставки: бриллианты и кристаллы циркония',
            shape: 'Огранка камней: круглая',
            stone_weight: 'Общий вес бриллиантов: 1.2 карата',
            size: 'Длина: 4 см.'
        },
        {
            favorite: false,
            in_basket: false,
            type: 'neckless',
            new_item: false,

            id: 3,
            name: 'колье с бриллиантами',
            image: "https://raw.githubusercontent.com/Olianaoa/Aurgentum/refs/heads/main/src/assets/catalog_img/neckless_img/%D0%BA%D0%BE%D0%BB%D1%8C%D0%B5_%D1%81_%D0%B1%D1%80%D0%B8%D0%BB%D0%BB%D0%B8%D0%B0%D0%BD%D1%82%D0%B0%D0%BC%D0%B8.png",
            price: '3550000',
            description: 'Изящное ожерелье, инкрустированное множеством сверкающих камней, воплощает утонченную элегантность. Крупные фианиты расположены каскадом, плавно переходя к центральному элементу — крупному каплевидному бриллианту, который служит главным акцентом композиции. Камни искусно огранены, что создаёт эффект ослепительного сияния, подчёркивающего линию шеи и декольте.',
            description2: 'Классический дизайн ожерелья делает его универсальным — оно гармонично сочетается как с ретро-стилем, так и с современными трендами высокой моды.',

            material: 'серебро',
            weight: 'Вес изделия: 12.7 г ',
            stone: 'Вставка: Бриллианты и фианиты',
            shape: 'Огранка камней: круглая и каплевидная',
            stone_weight: 'Общий вес бриллиантов: 6.7 карата',
            size: 'Длина цепочки: 40 см'
        },

        {
            favorite: false,
            in_basket: false,
            type: 'earring',
            new_item: true,

            id: 4,
            name: 'Серьги с сапфирами',
            image: "https://raw.githubusercontent.com/Olianaoa/Aurgentum/refs/heads/main/src/assets/catalog_img/earrings_img/sapphire.png",
            price: '2300000',
            description: 'Роскошные серьги с крупными сапфирами насыщенного синего цвета, обрамлённые множеством сверкающих бриллиантов. Изысканный дизайн подчёркивает утончённость и статус.',
            description2: 'Эти серьги станут идеальным акцентом для вечернего наряда или особого события, придавая образу элегантность и неповторимый шарм.',

            material: 'белое золото',
            weight: 'Вес изделия: 12.5 г',
            stone: 'Вставки: сапфиры, бриллианты',
            shape: 'Огранка сапфира: изумрудная',
            stone_weight: 'Вес сапфиров: 6.4 карата',
            size: 'Размер: универсальный'

        },
        {
            favorite: false,
            in_basket: false,
            type: 'ring',
            new_item: true,

            id: 5,
            name: 'Кольцо с бриллиантом',
            image: "https://raw.githubusercontent.com/Olianaoa/Aurgentum/refs/heads/main/src/assets/catalog_img/rings_img/%D0%BA%D0%BE%D0%BB%D1%8C%D1%86%D0%BE_%D1%81_%D0%B1%D1%80%D0%B8%D0%BB%D0%BB%D0%B8%D0%B0%D0%BD%D1%82%D0%BE%D0%BC.png",
            price: '1750000',
            description: 'Великолепное кольцо с крупным бриллиантом грушевидной огранки в окружении изысканных круглых бриллиантов. Белое золото подчёркивает сияние камней, создавая эффект незабываемого блеска.',
            description2: 'Идеальный выбор для помолвки или знакового события. Это украшение станет символом вечной любви и утончённого вкуса.',

            material: 'золото',
            weight: 'Вес изделия: 7.8 г',
            stone: 'Вставки: бриллианты',
            shape: 'Огранка бриллианта: круглая',
            stone_weight: 'Вес центрального бриллианта: 3.1 карата',
            size: 'Размер кольца: 17'
        },
        {
            favorite: false,
            in_basket: false,
            type: 'bracelet',
            new_item: false,

            id: 6,
            name: 'Золотой браслет ',
            image: "https://raw.githubusercontent.com/Olianaoa/Aurgentum/refs/heads/main/src/assets/catalog_img/bracelet_img/%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B9_%D0%B1%D1%80%D0%B0%D1%81%D0%BB%D0%B5%D1%82.png",
            price: '1515000',
            description: 'Изящный теннисный браслет из золота, украшенный сверкающими бриллиантами в классической круглой огранке. Благодаря своему минималистичному, но элегантному дизайну, он станет идеальным дополнением как к вечернему, так и к повседневному образу.',
            description2: 'Это украшение подчеркнёт статус и изысканный стиль своей обладательницы. Совершенная гармония драгоценных материалов и мастерства исполнения.',

            material: 'золото',
            weight: 'Вес изделия: 15.6 г',
            stone: 'Вставки: бриллианты',
            shape: 'Огранка камней: круглая',
            stone_weight: 'Общий вес бриллиантов: 7.4 карата',
            size: 'Длина браслета: 18 см'
        },
        {
            favorite: false,
            in_basket: false,
            type: 'neckless',
            new_item: false,

            id: 7,
            name: 'Цветочное колье',
            image: "https://raw.githubusercontent.com/Olianaoa/Aurgentum/refs/heads/main/src/assets/catalog_img/neckless_img/%D0%BA%D0%BE%D0%BB%D1%8C%D0%B5_%D1%86%D0%B2%D0%B5%D1%82%D1%8B.png",
            price: '1215000',
            description: "Роскошное колье, украшенное множеством сверкающих бриллиантов, создает образ истинной королевской элегантности. Многоуровневая композиция из цветов и листьев плавно спадает по шее, образуя эффектный акцент в виде центрального цветка, полностью усыпанного камнями.",
            description2: "Благодаря классическому флористическому мотиву и безупречному блеску, колье идеально дополнит как вечернее платье, так и образ для торжественного мероприятия.",
            material: "белое золото",
            weight: "Вес изделия: 15.2 г",
            stone: "Вставка: бриллианты",
            shape: "Огранка камней: круглая и марquise",
            stone_weight: "Общий вес бриллиантов: 7.3 карата",
            size: "Длина цепочки: 42 см"
        },
        {
            favorite: false,
            in_basket: false,
            type: 'ring',
            new_item: false,

            id: 8,
            name: 'Золотое кольцо с изумрудом',
            image: "https://raw.githubusercontent.com/Olianaoa/Aurgentum/refs/heads/main/src/assets/catalog_img/rings_img/%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B5_%D0%BA%D0%BE%D0%BB%D1%8C%D1%86%D0%BE.png",
            price: '515000',
            description: "Элегантное кольцо из золота с выразительным изумрудом овальной формы в центре, обрамлённым сияющими фианитами. Сочетание насыщенного зелёного оттенка и блеска камней придаёт украшению утончённый шарм.",
            description2: "Это кольцо станет изюминкой вечернего наряда или прекрасным подарком на особый случай. Оно подчеркнёт вкус и индивидуальность своей обладательницы.",
            material: "золото",
            weight: "Вес изделия: 4.1 г",
            stone: "Вставка: изумруд и фианиты",
            shape: "Огранка изумруда: овальная",
            stone_weight: "Вес изумруда: 1.8 карата",
            size: "Размер кольца: 17"
        },
        {
            favorite: false,
            in_basket: false,
            type: 'earring',
            new_item: false,

            id: 9,
            name: 'Серьги с рубинами',
            image: "https://raw.githubusercontent.com/Olianaoa/Aurgentum/refs/heads/main/src/assets/catalog_img/earrings_img/%D1%81%D0%B5%D1%80%D1%8C%D0%B3%D0%B8_%D1%80%D1%83%D0%B1%D0%B8%D0%BD.jpg",
            price: '2600000',
            description: 'Богатые серьги с крупными рубинами насыщенного красного цвета, обрамлённые россыпью бриллиантов. Идеальное сочетание классики и яркого акцента.',
            description2: 'Эти серьги подчеркнут роскошь и индивидуальность их обладательницы, идеально подходя для торжественных мероприятий и вечерних выходов.',

            material: 'белое золото',
            weight: 'Вес изделия: 13.1 г',
            stone: 'Вставки: рубины, бриллианты',
            shape: 'Огранка рубина: ашер',
            stone_weight: 'Вес рубинов: 5.8 карата',
            size: 'Размер: универсальный'
        },
        {
            favorite: false,
            in_basket: false,
            type: 'bracelet',
            new_item: false,

            id: 10,
            name: 'Браслет из белого золота',
            image: "https://raw.githubusercontent.com/Olianaoa/Aurgentum/refs/heads/main/src/assets/catalog_img/bracelet_img/bracelet.jpg",
            price: '1850000',
            description: 'Элегантный браслет из белого золота, инкрустированный крупными бриллиантами и соединённый изысканными звеньями. Блестящая огранка камней подчёркивает их чистоту и блеск.',
            description2: 'Безупречный выбор для особых случаев и вечерних выходов. Браслет подчеркнёт изысканный вкус своей обладательницы.',

            material: 'белое золото',
            weight: 'Вес изделия: 14.2 г',
            stone: 'Вставки: бриллианты',
            shape: 'Огранка бриллианта: круглая',
            stone_weight: 'Общий вес бриллиантов: 5.8 карата',
            size: 'Размер: 18 см'
        },
        {
            favorite: false,
            in_basket: false,
            type: 'neckless',
            new_item: false,

            id: 11,
            name: 'Кулон в форме сердца с аквамарином',
            image: "https://raw.githubusercontent.com/Olianaoa/Aurgentum/refs/heads/main/src/assets/catalog_img/neckless_img/%D0%BF%D0%BE%D0%B4%D0%B2%D0%B5%D1%81%D0%BA%D0%B0_%D1%81%D0%B5%D1%80%D0%B4%D1%86%D0%B5.jpg",
            price: '3850000',
            description: 'Нежный кулон в форме сердца с крупным аквамарином, окружённым изящной оправой из белого золота. Прозрачный голубой камень притягивает взгляды и восхищение.',
            description2: 'Этот кулон станет прекрасным подарком для выражения самых тёплых чувств и любви, сохраняя в себе частичку мечты и романтики.',

            material: 'белое золото',
            weight: 'Вес изделия: 6.2 г',
            stone: 'Вставки: аквамарин',
            shape: 'Огранка аквамарина: сердце',
            stone_weight: 'Вес аквамарина: 4.3 карата',
            size: 'Длина цепочки: 45 см'
        },
    ]
}

watch(items, (newValue) => {
    localStorage.setItem('items', JSON.stringify(newValue))
},
    { deep: true })

//МАССИВ КОРЗИНА
const basket_array = ref([])
try {
    if (localStorage.getItem('basket_array') === null) {
        basket_array.value = []
    } else {
        basket_array.value = JSON.parse(localStorage.getItem('basket_array'))
    }
} catch (error) { //обязательно что-то в скобках
    basket_array.value = []
}

watch(basket_array, (newValue) => {
    localStorage.setItem('basket_array', JSON.stringify(newValue))
},
    { deep: true })

//МАССИВ ИЗБРАННОЕ
const favorites_array = ref([])
try {
    if (localStorage.getItem('favorites_array') === null) {
        favorites_array.value = []
    } else {
        favorites_array.value = JSON.parse(localStorage.getItem('favorites_array'))
    }
} catch (error) { //обязательно что-то в скобках 
    favorites_array.value = []
}

watch(favorites_array, (newValue) => {
    localStorage.setItem('favorites_array', JSON.stringify(newValue))
},
    { deep: true })

// поиск товара
function find_item(index) {
    return items.value.find((item) => item.id === index) // весь товар
}

// ФУНКЦИИ ДЛЯ КОРЗИНЫ

//добавить в корзину
function add_to_basket(item, active_user_id) { //товар + id 
    basket_array.value.push({
        item: item,
        user_id: active_user_id,
    })
    basket_array.value[basket_array.value.length - 1].item.in_basket = true
}
//удалить из корзины
function remove_from_basket(item_id, user_id) {
    basket_array.value.forEach(element => {
        //поиск всех товаров текущего пользователя
        if (user_id === element.user_id) {
            //поиск товара по id 
            if (item_id === element.item.id) {
                element.item.in_basket = false;
                const item_to_del = basket_array.value.indexOf(element)
                basket_array.value.splice(item_to_del, 1)
            }
        }
    });
}


// ФУНКЦИИ ДЛЯ ИЗБРАННОГО 
function add_to_fav(item, active_id) { // добавить товар + id 
    favorites_array.value.push({
        item: item,
        user_id: active_id,
    })
    favorites_array.value[favorites_array.value.length - 1].item.favorite = true
}

function remove_from_fav(item_id, user_id) { // удалить товар по id
    favorites_array.value.forEach(element => {
        //поиск всех товаров текущего пользователя
        if (user_id === element.user_id) {
            //поиск товара по id 
            if (item_id === element.item.id) {
                element.item.favorite = false;
                const item_to_del = favorites_array.value.indexOf(element)
                favorites_array.value.splice(item_to_del, 1)
            }
        }
    });
}

//удалить все товары из избранного и корзины(при удалении пользователя)
function delete_user_items(user_id) {
    let array_f = []
    favorites_array.value.forEach(elem => {
        if (elem.user_id === user_id) {
            array_f.push(elem)
        }
    });
    array_f.forEach(element => {
        remove_from_fav(element.item.id, user_id)
    });

    let array_b = []
    basket_array.value.forEach(elem => {
        if (elem.user_id === user_id) {
            array_b.push(elem)
        }
    });
    array_b.forEach(element => {
        remove_from_basket(element.item.id, user_id)
    });

}

//название функции по названию файла
export default function useItems() {
    return {
        //массивы  
        items,
        basket_array, favorites_array,

        // поиск
        find_item,

        // добавление+удаление корзина/избранное
        add_to_basket, remove_from_basket,
        add_to_fav, remove_from_fav,

        //удаление 
        delete_user_items,
    }
}